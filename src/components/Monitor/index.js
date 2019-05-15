import React from 'react';
import TextList from "./TextList";

class Monitor extends React.Component {
  render() {
    return (
      <div id="monitor">
        <h1>This is the monitor!!</h1>
        <TextList />
      </div>
    );
  }
}

export default Monitor;
