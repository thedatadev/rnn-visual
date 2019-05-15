import React from "react";

import Char from "./Char";

class Sequence extends React.Component {
  constructor() {
    super();
    this.getRandomColor = (colors) => {
      const randomClass = Math.floor(Math.random() * Math.floor(colors.length));
      const randomColor = Math.floor(Math.random() * Math.floor(colors[randomClass].length));
      return colors[randomClass][randomColor]
    };
  }

  render() {

    const class1Colors = [
      "rgb(92, 203, 238)",
      "rgb(61, 191, 232)",
      "rgb(52, 168, 204)",
      "rgb(29, 168, 212)",
      "rgb(31, 144, 180)",
      "rgb(23, 113, 142)"
    ];

    const class2Colors = [
      "rgb(240, 169, 169)",
      "rgb(233, 140, 140)",
      "rgb(238, 98, 98)",
      "rgb(214, 69, 69)",
      "rgb(198, 41, 41)",
      "rgb(161, 21, 21)"
    ];

    const colors = [class1Colors, class2Colors];


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
