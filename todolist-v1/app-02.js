const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const todays = new Date();
  const currentDay = todays.getDay();
  console.log(todays);
  console.log(currentDay);

  let day = " ";
  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log(`Error: current day is not equal ${currentDay}`);
  }
  res.render("list-02", { kindOfDay: day });
});

app.listen(3001, function () {
  console.log("Server started on port 3001.");
});
