import React from "react";
import { hot } from 'react-hot-loader/root';
import Landing from "./components/Landing";
import Monitor from "./components/Monitor";
import "../public/css/styles.css";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <Landing />
        <Monitor />
      </div>
    );
  }
}

export default hot(App);
