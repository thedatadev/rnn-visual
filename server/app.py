from flask import Flask, jsonify
from flask_cors import CORS
import pickle as pkl

app = Flask(__name__)
CORS(app)

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

        return jsonify(articles=mapping[:20]), 200
    

if __name__ == "__main__":

    app.run(debug=True, port=4000)
