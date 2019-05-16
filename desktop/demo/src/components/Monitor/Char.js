import React from "react";

class Char extends React.Component {
  constructor() {
    super();

  }

  render() {

    return (
      <span className="char" style={{
        backgroundColor: this.props.color,
        padding: "4px"
      }}>{this.props.char}</span>
    );
  }
}

export default Char;
