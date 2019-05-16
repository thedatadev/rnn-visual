import React from "react";

class Loading extends React.Component {
  constructor() {
    super();
    this.show = false;
  }

  componentDidMount() {
    let dotIndices = [0, 1, 2, 3];
    let currentDot = dotIndices.shift();
    const dots = document.querySelectorAll('.dot');
    dots[currentDot].style.transform = "translateY(-30px)";
    setInterval(function() {
      dots[currentDot].style.transform = "translateY(30px)";
      dotIndices.push(currentDot);
      currentDot = dotIndices.shift();
      dots[currentDot].style.transform = "translateY(-30px)";
    }, 400);
  }

  render() {

    let loadingStyles = {
      display: "flex",
      padding: "10px",
      margin: "100px",
      transition: "opacity 0.2s ease-in-out",
      opacity: "1"
    };

    let dotStyles = {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      backgroundColor: "rgb(74, 224, 161)",
      marginLeft: "40px",
      transition: "all 0.3s ease-in-out"
    };

    // toggle() {
    //   const loading = document.querySelector('#loading');
    //   loading.style.opacity = show ? 1 : 0;
    //   show = !show;
    // }

    return (
      <div id="loading" style={loadingStyles}>
        <div className="dot" style={dotStyles}></div>
        <div className="dot" style={dotStyles}></div>
        <div className="dot" style={dotStyles}></div>
        <div className="dot" style={dotStyles}></div>
      </div>
    );
  }
}

export default Loading;
