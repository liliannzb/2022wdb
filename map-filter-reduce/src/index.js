var numbers = [3, 56, 2, 48, 5];

// function double(x) {
//   return x * x;
// }
// const newNumbers = numbers.map(double);

const newNumbers = [];
function double(x) {
  newNumbers.push(x * 2);
}

numbers.forEach(double);
// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// }); 也可以這樣寫

console.log(newNumbers);

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

const filterNUm = numbers.filter(function (num) {
  return num > 10;
});
console.log(filterNUm);

const filternNum = [];
numbers.forEach((item, index) => {
  if (item > 10) {
    filternNum.push(item);
  }
});
console.log(filternNum);

//Reduce - Accumulate a value by doing something to each item in an array.

let newNumber = 0;
numbers.forEach((num) => {
  newNumber += num;
});
console.log(newNumber);

const newnumber = numbers.reduce((accumultor, currntNumer) => {
  console.log("accumultor:", accumultor);
  console.log("currntNumer:", currntNumer);
  return accumultor + currntNumer;
});
console.log(newnumber);
//Find - find the first item that matches from an array.
const n10 = numbers.find((num) => {
  return num > 10;
});

console.log(n10);

//FindIndex - find the index of the first item that matches.
const n10I = numbers.findIndex((num) => {
  return num > 10;
});

console.log(n10I);

const emojipedia = require("./emojipedia.js");
// import emojipedia from "./emojipedia.js";

const newEmoji = emojipedia.map((emojientry) => {
  return emojientry.meaning.substring(0, 100);
});
console.log(newEmoji);
