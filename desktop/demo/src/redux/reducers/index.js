const initialState = {
  choices: {
    model: ["model1", "model2", "model3"],
    dataset: ["dataset1", "dataset2", "dataset3"]
  },
  chosen: {
    model: "model1 (default)",
    dataset: "dataset1 (default)"
  }
};

const myReducer = (state = initialState, action) => {

  switch (action.type) {

    case "makeChoice": {
      return Object.assign({}, state, {})
      // return Object.assign({}, state, {state.chosen[action.choiceType]: action.choice})
    }

    default: {
      return state;
    }
  }

}


export default myReducer;
