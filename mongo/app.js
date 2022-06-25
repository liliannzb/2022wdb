const mongoose = require("mongoose");

// main().catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/fruitData");
// }

mongoose.connect("mongodb://localhost:27017/fruitData", {
  useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name."]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

function insertFruits() {
  const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Petty solid as a fruit."
  });

  const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "Petty solid as a fruit."
  });

  const banana = new Fruit({
    name: "Banana",
    rating: 5,
    review: "Petty solid as a fruit."
  });

  const orange = new Fruit({
    name: "Orange",
    rating: 6,
    review: "Petty solid as a fruit."
  });

  return Fruit.insertMany([fruit, kiwi, banana, orange]);
}

function getFruits() {
  return Fruit.find().exec();
}

async function testFruit() {
  try {
    // const result = await insertFruits();
    // console.log("insertFruits", result);

    const fruits = await getFruits();
    //  console.log("getFruits", fruits);

    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });

    mongoose.connection.close();
  } catch (error) {
    console.error(error);
  }
}

testFruit();

// const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "John",
//   age: 37
// });

// person.save();
