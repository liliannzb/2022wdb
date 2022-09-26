const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";

const dbName = "fruitDB";

const client = new MongoClient(url, { useNewUrlParser: true });

client.connect(function (err) {
  assert.equal(null, err);
  console.log("connected successfully to server");

  const db = client.db(dbName);
  //   insertDocument(db, function () {
  //     client.close();
  //   });

  findDocuments(db, function () {
    client.close();
  });
});

const insertDocument = function (db, callback) {
  const collection = db.collection("fruits");

  collection.insertMany(
    [
      { name: "apple", score: 8, review: "great" },
      { name: "orange", score: 3, review: "great" },
      { name: "banana", score: 9, review: "great" }
    ],
    function (err, result) {
      console.log(result);
      assert.equal(err, null);
      assert.equal(3, result.insertedCount);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    }
  );
};

const findDocuments = function (db, callback) {
  const collection = db.collection("fruits");
  collection.find({}).toArray(function (err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);
  });
};
