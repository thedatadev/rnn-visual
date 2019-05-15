import React from "react";

class Graph extends React.Component {
  constructor() {
    super();

  }

  render() {

    const hoverStyles = {
      stroke: "rgb(45, 236, 167)",
      cursor: "pointer"
    };
    const pathStyles = {
      transition: "stroke 0.2s ease-in-out",
      "&:hover": hoverStyles
    };

    return (
      <div className="graph" style={{
        width: "30%",
        display: "flex",
        justifyContent: "center"
      }}>
        <svg class="svg"
              width="200"
              height="200"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                borderRadius: "50%",
                backgroundColor: "rgb(244, 247, 254)",
                boxShadow: "0 5px 8px 3px #eee"
              }}>

          <g className="multi-axis-graph">

            <path className="divide"
                  d="M60 140 L150 50"
                  strokeWidth="2px"
                  stroke="rgb(182, 181, 187)"
                  style={pathStyles}/>

                <path className="x-axis"
                  d="M60 140 H 170"
                  strokeWidth="4px"
                  stroke="rgb(96, 93, 111)"
                  style={pathStyles}/>

                <path className="y-axis"
                  d="M60 140 V 30"
                  strokeWidth="4px"
                  stroke="rgb(96, 93, 111)"
                  style={pathStyles}/>

                <circle cx="110" cy="90" r="4" fill="red"/>
          </g>

        </svg>
      </div>
    );
  }
}

export default Graph;
