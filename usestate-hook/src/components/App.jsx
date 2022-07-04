import React, { useState } from "react";

function App() {
  const state = useState(0);
  let [count, setCount] = useState(0);

  console.log(state[0]);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    if (count >= 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
export default App;
