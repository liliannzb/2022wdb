//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true });

const ArticleSchema = {
  title: String,
  content: String
};
const Article = mongoose.model("articles", ArticleSchema);

app
  .route("/articles")
  .get(function (req, res) {
    Article.find(function (err, foundArticles) {
      if (err) {
        res.status(404).send(err);
        return;
      }
      console.log({ foundArticles });
      res.send(foundArticles);
    });
  })
  .post((req, res) => {
    console.log("title:" + req.body.title);
    console.log("content:" + req.body.content);
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content
    });
    newArticle.save(function (err) {
      if (!err) {
        res.send("Successfully added");
      } else {
        res.send(err);
      }
    });
  })
  .delete((req, res) => {
    Article.deleteMany(function (err) {
      if (!err) {
        res.send("Successfully deleted");
      } else {
        res.send(err);
      }
    });
  });

app
  .route("/articles/:articleTitle")
  .get((req, res) => {
    const typeTitle = req.params.articleTitle;
    Article.findOne({ title: typeTitle }, (err, foundArticle) => {
      if (!err) {
        res.send(foundArticle);
      } else {
        console.error(err);
        res.status(404).send("oops!");
      }
    });
  })
  .put((req, res) => {
    Article.replaceOne(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      // { overwrite: true },
      function (err) {
        if (!err) {
          res.send("Successfully updated");
        } else {
          console.log(err);
          res.send("oops!");
        }
      }
    );
  })
  .patch((req, res) => {
    Article.updateOne(
      { title: req.params.articleTitle },
      { $set: req.body },
      function (err) {
        if (!err) {
          res.send("Successfully updated");
        } else {
          console.log(err);
          res.send("oops!");
        }
      }
    );
  })
  .delete((req, res) => {
    Article.deleteOne({ title: req.params.articleTitle }, function (err) {
      if (!err) {
        res.send("Successfully deleted");
      } else {
        console.log(err);
        res.send("oops!");
      }
    });
  });

app.listen(3600, function () {
  console.log("Server started on port 3600");
});
