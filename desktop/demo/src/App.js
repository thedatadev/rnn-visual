import React from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom';
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
        <Router>
          <div className="routing">
            <Route exact path="/" component={Landing} />
            <Route exact path="/monitor" component={Monitor} />
          </div>
        </Router>
      </div>
    );
  }
}

export default hot(App);
