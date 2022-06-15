const express = require("express");
const bodyParser = require("body-parser");

let items = ["buy food", "cook food", "eat food"];
let workItem = [];

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

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

  res.render("list-04", { listTitle: day, newItems: items });
});

app.post("/", (req, res) => {
  console.log(req.body);
  const item = req.body.newItem;

  items.push(item);
  res.redirect("/");
  // res.render("list-03", { newItem: inp });不能分開放

  // console.log(todo, inp);
});
app.get("/work", (req, res) => {
  res.render("list-04", { listTitle: "Work List", newItems: workItem });
});

app.post("/work", (req, res) => {
  let item = req.body.newItem;
  workItem.push(item);
  res.redirect("/work");
});

app.listen(3001, function () {
  console.log("Server started on port 3001.");
});
