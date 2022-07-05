import React, { useState } from "react";

function App(e) {
  const [item, setitem] = useState("");
  const [items, setitems] = useState([]);

  function handleChangeItem(e) {
    const value = e.target.value;

    setitem(value);
  }

  function addItem() {
    setitems((prevItem) => {
      return [...prevItem, item];
    });
    setitem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={handleChangeItem}
          name="add"
          value={item}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem, i) => {
            return <li key={i}>{todoitem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
