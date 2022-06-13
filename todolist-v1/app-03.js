const express = require("express");
const bodyParser = require("body-parser");

let items = ["buy food", "cook food", "eat food"];

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  const today = new Date();
  const currentDay = today.getDay();
  // console.log(today);
  // console.log(currentDay);

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list-03", { kindOfDay: day, newItems: items });
});

app.post("/", (req, res) => {
  const item = req.body.newItem;

  items.push(item);
  res.redirect("/");
  // res.render("list-03", { newItem: inp });不能分開放

  console.log(todo, inp);
});

app.listen(3002, function () {
  console.log("Server started on port 3002.");
});
