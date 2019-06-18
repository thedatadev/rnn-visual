import os
import sys
import torch
import MeCab
import gensim
import numpy as np
import pandas as pd
import pickle as pkl


def raw():
    # Load NHK dataset
    easy_path = os.path.abspath("data/raw/easy_articles.csv")
    hard_path = os.path.abspath("data/raw/hard_articles.csv")
    easy_news = pd.read_csv(easy_path)
    hard_news = pd.read_csv(hard_path)

    # Extract the article text
    easy_texts = easy_news['texts']
    hard_texts = hard_news['texts']
    easy_texts_size = len(easy_texts)
    hard_texts_size = len(hard_texts)

    # Label each as easy (0) or hard (1)
    EASY = 0
    HARD = 1
    easy_targets = pd.Series(easy_texts_size * [EASY])
    hard_targets = pd.Series(hard_texts_size * [HARD])

    # Merge the dataset
    # NOTE: ignore_index is used to allow index continuity 
    X = pd.concat([easy_texts,   hard_texts],   ignore_index=True)
    y = pd.concat([easy_targets, hard_targets], ignore_index=True)

    return X, y


def save(X, y):
    print("saving")

    X_path = os.path.abspath("data/clean/X.pkl")
    y_path = os.path.abspath("data/clean/y.pkl")

    with open(X_path, 'wb') as X_file:
        pkl.dump(X, X_file)

    with open(y_path, 'wb') as y_file:
        pkl.dump(y, y_file)


def load():
    print("loading")

    X_path = os.path.abspath("data/clean/X.pkl")
    y_path = os.path.abspath("data/clean/y.pkl")

    X = None
    y = None

    with open(X_path, 'rb') as X_file:
        X = pkl.load(X_file)

    with open(y_path, 'rb') as y_file:
        y = pkl.load(y_file)

    return X, y


def embed(X):
    print("embedding")
    ''' Embed all articles in X '''
    model_path = "./word2vec/pretrained/word2vec.model.bin"
    model = gensim.models.Word2Vec.load(model_path)
    return X.apply(lambda article: np.array([model.wv[token] for token in article if token in model.wv]))


def filter_empty(X_token, X_embed, y):
    print("filtering")
    ''' Filter out all empty articles '''
    non_empty_indices = [idx for idx, article in enumerate(X_embed) if len(article) > 0 ]
    X = pd.Series([ X_token[idx] for idx in non_empty_indices  ])

    X = []
    model_path = "./word2vec/pretrained/word2vec.model.bin"
    model = gensim.models.Word2Vec.load(model_path)
    for idx in non_empty_indices:
        clean_X_token = [ token for token in X_token[idx] if token in model.wv ]
        X.append(clean_X_token)

    y = pd.Series([ y[idx] for idx in non_empty_indices ])
    return X, y


def clean(X, y):
    print("cleaning")
    '''

    After tokenizing and embedding all texts, filter out all empty sequences.

    Return all nonempty sequences in tokenized form.

    '''

    def tokenize(X):
        print("tokenizing")
        ''' Tokenize all articles in X '''
        tagger = MeCab.Tagger("-Owakati")
        return X.apply(lambda article: tagger.parse(article).split())
    
    X_token = tokenize(X)

    X_embed = embed(X_token)

    X_filter, y_filter = filter_empty(X_token, X_embed, y)

    return X_filter, y_filter


def tensorize(X, y):
    print("tensorizing")
    X = [ torch.tensor(article) for article in X ]
    y = [ torch.tensor([category], dtype=torch.long) for category in y ]
    return X, y


def prepare(X, y):
    print("preparing")
    X_embed = embed(X)

    X_tensor, y_tensor = tensorize(X_embed, y)

    return X_tensor, y_tensor


def training_data():

    clean_X, clean_y = load()

    train_X, train_y = prepare(clean_X, clean_y)

    return clean_X, clean_y, train_X, train_y


if __name__ == "__main__":


    ### Clean raw training data and save
    # X, y = raw()
    # clean_X, clean_y = clean(X, y)
    # save(clean_X, clean_y)


    ### Prepare clean training data for model
    # clean_X, clean_y = load()
    # train_X, train_y = prepare(clean_X, clean_y)


    pass





