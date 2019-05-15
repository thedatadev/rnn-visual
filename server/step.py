def _1_validate_params(request):
    try:
        dataset = request.json.dataset
        model = request.json.model
        return dataset, model
    except:
        return

def _2_load_dataset(filename):
    if not os.path.exists(filename):
        return
    return pd.read_csv(filename)

def _3_load_model(filename):
    if not os.path.exists(filename):
        return
    return loaded_model

def _4_run(model, dataset):
    return model(dataset)
    
def _5_serve_model(results):
    return results
