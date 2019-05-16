import React from "react";
import Sequence from "./Sequence";
import Graph from "./Graph";

class Text extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="text" style={{
        display: "flex",
        margin: "20px auto"
        }}>

        <Sequence title={this.props.text.title} content={this.props.text.content} />
        <Graph />
      </div>
    );
  }
}

export default Text;
