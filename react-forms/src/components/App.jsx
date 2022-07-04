import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [handingTest, setHeadingTest] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function submitName(event) {
    event.preventDefault();
    setHeadingTest(name);
  }

  return (
    <div className="container">
      <form onSubmit={submitName}>
        <h1>Hello {handingTest} </h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
