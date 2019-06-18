from random import sample
import time
import numpy as np
import config
import pickle
import torch

def get_next_batch(X, y):
    mini_batch_X, mini_batch_y = [], []
    for batch in range(config.mini_batch_size):
        next_batch_item_index = np.random.randint(0, len(X))
        mini_batch_X.append(X[next_batch_item_index])
        mini_batch_y.append(y[next_batch_item_index])
    return mini_batch_X, mini_batch_y

def forward_pass(model, input_tensor, class_tensor):

    output_sequence = []
    
    hidden = model.initHidden()
    model.zero_grad()

    for token_idx in range(input_tensor.size()[0]): # NOTE: Assuming batch_first = True
        output, hidden = model(input_tensor[token_idx].view([1, -1]), hidden)
        if not model.training:
            output_sequence.append(output.tolist()[0])

    loss = model.criterion(output, class_tensor)
    loss.backward()

    # Add parameters' gradients to their values, multiplied by learning rate
    for p in model.parameters():
        p.data.add_(-config.learning_rate, p.grad.data)

    return output, loss.item(), output_sequence


def predicted_class(output):
    easy_prob = output[0][0]
    hard_prob = output[0][1]
    pred_class = 0 if easy_prob > hard_prob else 1
    return pred_class

def training_accuracy(predictions):

    total_predictions = len(predictions)
    correct_predictions = 0
    for y, pred in predictions:
        if y == pred:
            correct_predictions += 1
    return correct_predictions / total_predictions

def train(model, X, y):

    # mapping = dict({})

    # if not model.training:
    #     mapping = dict({
    #         'X': X.tolist(),
    #         'y': y.tolist(),
    #         'out': [ [] for idx in range(len(X)) ]
    #     })

    time_start = time.time()

    current_loss = 0
    all_losses = []
    plot_every = 1_000

    train_acc = []
    predictions = []

    best_accuracy = 0

    # for epoch in range(config.num_train_epochs):
    for epoch in range(1): # TODO: remove

        # mini_batch_X, mini_batch_y = get_next_batch(X, y)
        mini_batch_X = X # TODO: remove
        mini_batch_y = y # TODO: remove

        print(f"Epoch: {epoch}")

        for idx in range(len(mini_batch_X)):

            if idx > 0 and (idx + 1) % 100 == 0:
                print(f"Index: {idx + 1}")

            # extract the next sentence
            article_tensor = mini_batch_X[idx]
            # extract the next class
            class_tensor = mini_batch_y[idx]
            # pass the class and sentence into the train function
            output, loss, output_sequence = forward_pass(model, article_tensor, class_tensor)

            # if not model.training:
            #     mapping['out'][idx] = output_sequence

            # accummulate the loss
            current_loss += loss
            # keep track of predicted classes
            predictions.append((class_tensor.item(), predicted_class(output)))

        # if (epoch + 1) % plot_every == 0 and epoch != 0:
        if True: # TODO: remove

            current_accuracy = training_accuracy(predictions) * 100

            # Save the best model
            if current_accuracy > best_accuracy:
                print(f"Current model has highest training accuracy of {current_accuracy}")
                torch.save(model.state_dict(), f"saved_model/nhk_model")
                best_accuracy = int(current_accuracy)

            # Track statistics 
            all_losses.append(current_loss / plot_every)
            train_acc.append(current_accuracy)
            print(f"{epoch + 1} epochs\t{all_losses[-1]} loss\t{current_accuracy}% train acc")
            
            # Reset every N epochs
            predictions = []
            current_loss = 0

        # Train until 100% training accuracy
        if best_accuracy == 100:
            print(f"100% training accuracy achieved after {epoch+1} epochs")
            break

    # Save the results for further analysis
    with open("stats/losses.pkl", "wb+") as losses_f:
        pickle.dump(all_losses, losses_f)
    
    with open("stats/train_acc.pkl", "wb+") as train_acc_f:
        pickle.dump(train_acc, train_acc_f)

    print(f"runtime: {time.time() - time_start} seconds")
    print(f"Best model achieved a training accuracy of {best_accuracy}%")

    return all_losses

if __name__ == "__main__":

    from data import training_data
    from model import RNN

    clean_X, clean_y, train_X, train_y = training_data()

    model = RNN()

    losses = train(model, train_X, train_y)

