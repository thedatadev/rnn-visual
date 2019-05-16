from flask import Flask, jsonify, request

import step

app = Flask(__name__)

## Static server
@app.route("/", methods=['GET'])
def index():
    ''' Returns the static assets for React.js SPA '''
    return "<h1>Placeholder for final React.js SPA</h1>"

## Model server
@app.route("/model")
def model():
    ''' Serves predictions given the model and dataset '''
    params = step._1_validate_params(request)
    if not params:
        return '', 400
    dataset_path, model_path = params

    dataset = step._2_load_dataset(dataset_path)
    model   = step._3_load_model(model_path)

    results = step._4_run(model, dataset)

    return step._5_serve_model(results), 200

if __name__ == "__main__":
    app.run(debug=true, port=4000)
