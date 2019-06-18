from flask import Flask, jsonify

import pickle as pkl

app = Flask(__name__)

## Static server
@app.route("/", methods=['GET'])
def index():
    ''' Returns the static assets for React.js SPA '''
    return "<h1>Placeholder for final React.js SPA</h1>"

## Model server
@app.route("/model", methods=['GET'])
def model():
    ''' Serves predictions given the model and dataset '''
    
    mapping_filepath = "../model/saved/mapping.pkl"

    with open(mapping_filepath, "rb") as f:

        mapping = pkl.load(f)

        trim_X = mapping['X'][:20]
        trim_y = mapping['y'][:20]
        trim_out = mapping['out'][:20]

        return jsonify(mapping={ "X": trim_X, "y": trim_y, "out": trim_out }), 200
    

if __name__ == "__main__":

    app.run(debug=True, port=4000)
