'''
https://pytorch.org/tutorials/beginner/saving_loading_models.html

1. Instantiate a model with training set to False

2. Load a pretrained model and use its weights

3. Load the data

4. Run 20 samples of the data into the model

5. Serve its X, y and outputs to the client

'''

def infer(model, input_tensor, class_tensor):

    output_sequence = []

    with torch.no_grad():

        hidden = model.initHidden()

        for token_idx in range(input_tensor.size()[0]): # NOTE: Assuming batch_first = True
            output, hidden = model(input_tensor[token_idx].view([1, -1]), hidden)
            output_sequence.append(output.tolist()[0])

    return output_sequence

if __name__ == "__main__":

    from data import training_data
    from model import RNN
    import torch

    model_filepath = "saved_model/nhk_model"

    rnn = RNN(training=False)
    rnn.load_state_dict(torch.load(model_filepath))
    rnn.eval()

    clean_X, clean_y, train_X, train_y = training_data()

    for idx in range(len(train_X)):

        if idx > 0 and (idx + 1) % 100 == 0:
                print(f"Index: {idx + 1}")

        article_tensor = train_X[idx]

        class_tensor = train_y[idx]
        
        output_sequence = infer(rnn, article_tensor, class_tensor)

