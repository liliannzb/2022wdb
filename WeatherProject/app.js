const express = require("express");
const app = express();
const port = 3003;
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const query = req.body.cityName;
  const apiKey = "8846d39eeb44f9d7fd15179d47392527";
  const unit = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;
  https.get(url, (response) => {
    console.log(response.statusCode);
    response.on("data", (d) => {
      //   process.stdout.write(d);
      const weatherData = JSON.parse(d);
      console.log(weatherData);
      //   console.log(d); hexadeimal

      //   const object = {
      //     name: "Amy",
      //     nickname: "A"
      //   };
      //   console.log(JSON.stringify(object));
      const temp = weatherData.main.temp;
      //   console.log(temp);
      const description = weatherData.weather[0].description;
      //   console.log(description);
      const icon = weatherData.weather[0].icon;
      //   console.log(icon);
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      res.write(`<p>${description}</p>`);
      res.write(
        `<h1>The temperature in ${query} is ${temp} ,${description}</h1>`
      );
      // res.write("<img src= " + imageURL + " >")
      res.write(`<img src="${imageURL}">`);
      res.send();
      //   res.send(`<h1>The temperature in Taipei is ${temp} ,${description}</h1>`);
    });
    //   res.send("hello!");
  });
});

app.listen(port, () => {
  console.log(`server ${port}`);
});
