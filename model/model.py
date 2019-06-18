import torch
import torch.nn as nn
import torch.nn.functional as F

import config

class RNN(nn.Module):
    ''' Basic Recurrent Neural Network '''
    
    def __init__(self, training = True):
        ''' Describe the network topology '''
        super(RNN, self).__init__()

        self.training = training

        self.criterion = nn.CrossEntropyLoss()

        self.hidden_size = config.hidden_size
        self.concat_size = config.input_size + config.hidden_size
            
        self.i2h = nn.Linear(self.concat_size, config.hidden_size)
        self.i2o = nn.Linear(self.concat_size, config.output_size)

        self.probabilisticTransformer = nn.LogSoftmax(dim=1) if training else nn.Softmax(dim=1)

    def forward(self, input, hidden):
        ''' Describe the flow from input layer to output layer '''

        combined = torch.cat((input, hidden), 1)

        hidden = self.i2h(combined)
        output = self.i2o(combined)

        output = self.probabilisticTransformer(output)

        return output, hidden

    def initHidden(self):
        ''' Initial hidden state of all zeros '''
        return torch.zeros(1, self.hidden_size)


if __name__ == "__main__":

    # from data import training_data

    # clean_X, clean_y, train_X, train_y = training_data()

    # sample_X = train_X[0][:5]
    # sample_y = train_y[0]

    # model = RNN(training=False)


    # if not model.training:

    #     with torch.no_grad():

    #         hidden = model.initHidden()
    #         model.zero_grad()

    #         for token_idx in range(sample_X.size()[0]): # NOTE: Assuming batch_first = True
    #             output, hidden = model(sample_X[token_idx].view([1, -1]), hidden)
    #             print(output.tolist()[0])
    #             print()

    pass