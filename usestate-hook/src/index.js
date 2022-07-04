import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

let count = 0;
function increase() {
  count++;
  console.log(count);
  root.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
