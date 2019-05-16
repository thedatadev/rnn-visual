import Instruction from './Instruction';
import Selector from './Selector';
import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (
      <div id="landing">
        <Instruction />
        <Selector title="Select a model" choiceType="model" />
        <Selector title="Select a dataset" choiceType="dataset" />
        <Link to="/monitor">Done</Link>
      </div>
    );
  }
}

export default Landing;
