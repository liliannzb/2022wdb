// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import { createRoot } from "react-dom/client";
import cars from "./practice";
// import animals from "./data";

// console.log(animals);
// const [cat, dog] = animals;
// const { name, sound } = cat;
// console.log(sound);

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [teslaTopColour]
} = tesla;
const {
  coloursByPopularity: [hondaTopColour]
} = honda;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);
