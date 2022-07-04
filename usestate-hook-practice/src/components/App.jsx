import React, { useState } from "react";

let time = new Date().toLocaleTimeString("en-US", { hour12: false });
console.log(time);

function App() {
  // setInterval(changeTime, 10000);

  const now = new Date().toLocaleTimeString("en-US", { hour12: false });

  const [time, setTime] = useState(now);

  function changeTime() {
    const newTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    console.log(now);
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={changeTime}>Get Time</button>
    </div>
  );
}

export default App;
