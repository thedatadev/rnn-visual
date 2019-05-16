import React from 'react';
import TextList from "./TextList";
import Loading from '../shared/Loading';

class Monitor extends React.Component {
  constructor() {
    super();
    this.loading = true;
  }

  render() {
    return (
      <div id="monitor">
        // TODO: see if there is something in React like Vue's v-show
        <Loading loading={this.loading}/>
        <TextList loading={this.loading}/>
      </div>
    );
  }
}

export default Monitor;
