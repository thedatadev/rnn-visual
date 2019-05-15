import React from "react";
import { connect } from "react-redux";
import { incrementCounter } from "./redux/actions";
import { hot } from 'react-hot-loader/root';

import "../public/css/styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.incrementCounter = () => this.props.incrementCounter();
  }

  render() {
    return (
      <div className="app">
        <h1>Welcome to my app!?!!!</h1>
        <p id="count">Count: {this.props.count}</p>
        <button id="button"
                type="button"
                onClick={() => {
                  this.incrementCounter();
                }}>Increment!</button>
      </div>
    );
  }
}


const mapStateToProps = state => {
  const count = state;
  return { count };
};

const mapDispatchToProps = {
  incrementCounter
};

export default connect(mapStateToProps,mapDispatchToProps)(hot(App));
