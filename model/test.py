'''
https://pytorch.org/tutorials/beginner/saving_loading_models.html

'''
from data import training_data
from model import RNN
import pickle as pkl
import torch

def infer(model, input_tensor, class_tensor):

    output_sequence = []

    with torch.no_grad():

        hidden = model.initHidden()

        for token_idx in range(input_tensor.size()[0]): # NOTE: Assuming batch_first = True
            output, hidden = model(input_tensor[token_idx].view([1, -1]), hidden)
            output_sequence.append(output.tolist()[0])

    return output_sequence


def demo_data():

    model_filepath = "saved/nhk_model"

    rnn = RNN(training=False)
    rnn.load_state_dict(torch.load(model_filepath))
    rnn.eval()

    clean_X, clean_y, train_X, train_y = training_data()

    mapping = dict({
        'X': clean_X.tolist(),
        'y': clean_y.tolist(),
        'out': []
    })

    for idx in range(len(train_X)):

        if idx > 0 and (idx + 1) % 100 == 0:
                print(f"Demo data index: {idx + 1}")

        article_tensor = train_X[idx]

        class_tensor = train_y[idx]
        
        output_sequence = infer(rnn, article_tensor, class_tensor)

        mapping['out'].append(output_sequence)

    return mapping


def save(mapping):

    with open("saved/mapping.pkl", "wb") as f:
        pkl.dump(mapping, f)
    
    print("mapping saved")



if __name__ == "__main__":

    mapping = demo_data()
    
    save(mapping)
    

    

