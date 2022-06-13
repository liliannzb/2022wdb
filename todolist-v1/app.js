const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const today = new Date();
  const currentDay = today.getDay();

  let day = " ";

  if (currentDay === 6 || currentDay === 0) {
    day = "Weekend";
    //getDate()星期一 === 1
    res.write("<h1>Yaeh weekend!</h1>");
    // res.sendFile(__dirname + "/index.html");
  } else {
    day = "Weekday";

    // res.write("<p>It's not the weekend...</p>");
    // res.write("<h1>Boo! I have to work...</h1>");
    // res.send();
    // res.sendFile(__dirname + "/index.html");
  }
  res.render("list", { kindOfDay: day });
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
