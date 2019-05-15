import React from "react";
import { connect } from "react-redux";
import { incrementCounter } from "./redux/actions";
import { getCount, getMessage } from "./redux/selectors";
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
        <h1>{this.props.message}</h1>
        <p id="count">Count: {this.props.count}</p>
        <button id="button"
                type="button"
                onClick={() => {
                  this.incrementCounter();
                }}
                >Increment!</button>
      </div>
    );
  }
}


const mapStateToProps = state => {
  const count = getCount(state);
  const message = getMessage(state);
  return { count, message };
};

const mapDispatchToProps = { incrementCounter };

export default connect(mapStateToProps, mapDispatchToProps)(hot(App));
