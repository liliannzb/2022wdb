import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  // const [bgColor, setBgColor] = useState("White");
  const [bgColor, setBgColor] = useState(false);

  function handleClick() {
    // console.log("click");
    setHeadingText("Submitted");
  }

  function mouseOver() {
    console.log("over");
    // setBgColor("black");
    setBgColor(true);
  }

  function mouseOut() {
    console.log("out");
    // setBgColor("White");
    setBgColor(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        style={{ backgroundColor: bgColor ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
