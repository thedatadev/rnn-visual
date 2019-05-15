const initialState = {
  count: 0,
  message: "RNN Visuals!"
};

const myReducer = (state = initialState, action) => {

  switch (action.type) {
    case "increment": {
      return Object.assign({}, state, {count: state.count + 1})
    }
    default: {
      return state;
    }
  }

}


export default myReducer;
