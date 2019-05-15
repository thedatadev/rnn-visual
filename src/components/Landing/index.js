import Instruction from './Instruction';
import Selector from './Selector';
import React from 'react';

class Landing extends React.Component {
  render() {
    return (
      <div id="landing">
        <Instruction />
        <Selector title="Select a model" choiceType="model" />
        <Selector title="Select a dataset" choiceType="dataset" />
      </div>
    );
  }
}

export default Landing;
