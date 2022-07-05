import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

const citrus = ["lime", "lemon", "orange"];
const fruits = ["Apple", "banana", "coconut", ...citrus];

console.log(fruits);

const fullname = {
  fname: "Joa",
  lname: "Boa"
};

const user = {
  ...fullname
};

console.log(user);
