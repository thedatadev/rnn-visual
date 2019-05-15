import React from "react";

import Char from "./Char";

class Sequence extends React.Component {
  constructor() {
    super();
    this.getRandomColor = (colors) => colors[Math.floor(Math.random() * Math.floor(colors.length))];
  }

  render() {

    const colors = [
      "rgb(92, 203, 238)",
      "rgb(61, 191, 232)",
      "rgb(52, 168, 204)",
      "rgb(29, 168, 212)",
      "rgb(31, 144, 180)",
      "rgb(23, 113, 142)"
    ];


    return (
      <div className="sequence" style={{
        width: "70%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "30px",
      }}>
        <div className="title" style={{
          textAlign: "left",
          padding: "7px",
          fontFamily: "Arial",
          border: "1px solid rgb(229, 236, 246)",
          borderRadius: "6px"

        }}>{this.props.title}</div>
        <div className="content" style={
          { marginTop: "12px",
          textAlign: "left",
          fontWeight: "100",
          fontSize: "1.3em",
        }
      }>{ this.props.content.split('').map((value, index) => {
              return <Char key={index} char={value} color={this.getRandomColor(colors)}/>
          })
        }
        </div>
      </div>
    );
  }
}

export default Sequence;
