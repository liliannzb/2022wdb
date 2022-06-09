const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log("get");
});

app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
  const wNum = parseFloat(req.body.weight);
  const hNum = parseFloat(req.body.height);
  const bmi = wNum / (hNum * hNum);
  res.send(`${bmi}`);
});

app.post("/", (req, res) => {
  const num1 = Number(req.body.n1);
  const num2 = Number(req.body.n2);

  const results = num1 + num2;
  const re1 = results.toString();
  console.log("post");
  //   res.send(JSON.stringify(results));
  //   res.send(re1);
  res.send(`${results}`);

  //   res.status(200).send(results);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
