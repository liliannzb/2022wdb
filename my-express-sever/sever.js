// import express from 'express';
const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("Contact me");
});

app.get("/about", (req, res) => {
  res.send("30 years old");
});

app.get("/aboutss", (req, res) => {
  res.send("30 years old");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
