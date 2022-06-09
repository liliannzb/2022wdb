'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';



// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1},${ing2},and ${ing3}`);
  },

  orderDelivery: function (starterIndex, mainIndex, time, address) {

    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time} `
    );
  },
}; 

restaurant.orderDelivery({
  time: '12:30',
  address: 'Taipei',
  starterIndex: 1,
  mainIndex: 2,
});

const days = ['mon', "tue", 'wed', 'thu', 'fri', 'sat', 'sun']

for (const day of days){
  // console.log(day);
  // console.log(restaurant.openingHours[day]?.open)
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`we will open on ${day} , ${open}`)
}










for(const item of restaurant.starterMenu){
  console.log(item)
};
for(const item of restaurant.starterMenu.entries()){
  console.log(item)
};
for(const item of restaurant.starterMenu.entries()){
  console.log(`${item[0] + 1} : ${item[1]}`)
};

for(const item of restaurant.starterMenu.entries()){
  console.log(restaurant.starterMenu.entries())
};
console.log(...restaurant.starterMenu.entries());
console.log([...restaurant.starterMenu.entries()])



let [, first, , section] = restaurant.categories;
console.log(first, section);

const { name: newname, openingHours: hours } = restaurant;
console.log({ newname, hours });

// const main = first;
// first = section;
// section = main
// console.log([first, section])

// -----------
// [first, section] = [section, first];
// console.log(first, section)

// -------------
// const arr = [4, 5, 6];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const[h, y, ] = arr;
// console.log([h, y,  ])

// const [starter, mainCourse] = restaurant.order(3,1)
// console.log([starter, mainCourse])

// const nested = [2,3,[4,5]];
// const [i,,[j,k]] = nested;
// console.log([i,j,k]);

// const { name, openingHours, order } = restaurant;
// console.log(name, openingHours, order);

// let a = 166;
// let b = 124;
// const obj = { a: 10, b: 12, c: 55 };
// // ({a,b} = obj);
// console.log(a, b);

// const newMainMenu = [...restaurant.mainMenu, 'cheese cake'];
// console.log(newMainMenu);

// const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(fullMenu);

// const str = 'fafafa';
// const letter = [...str];
// console.log(letter);

// const ingredients = [(prompt('ings1')),(prompt('ings2')),(prompt('ings3'))]
// console.log(typeof ingredients)
//  console.log(restaurant.orderPasta(...ingredients))

// const newRestaurant = { findeIN: 1999, ...restaurant };
// console.log(newRestaurant);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'jackk';
// console.log(restaurantCopy.name, restaurant.name);

// const [aa, bb, ...others] = [1, 2, 3, 4, 5];
// console.log(aa, bb, others);

// const add = function (...number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) sum += number[i];
//   console.log(sum);
// };
// add(1, 4);
// add(2, 4, 6);

// let asd = [123, 234, 345];
// let [main, second] = asd;
// [main, second] = [second, main];
// console.log(main, second);
