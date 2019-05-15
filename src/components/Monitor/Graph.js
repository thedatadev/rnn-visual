import React from "react";

class Graph extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="graph" style={{
        width: "30%",
        display: "flex",
        justifyContent: "center"
      }}>
        <div style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "rgb(38, 224, 141)"
        }}></div>
      </div>
    );
  }
}

export default Graph;
