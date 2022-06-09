"use strick"

// let hasDriversLicense = false;
// const passText = true;

// if(passText)hasDriversLicense = true;
// if(hasDriversLicense) console.log("I can drive.")

// function juiceProducer(applenum, orangenum){
//   const juice = ` I want ${applenum} bottles of apple juice,and ${orangenum} bottle of orange juice.` 
//   return console.log(juice)
// };

// juiceProducer(2,3);


// function juiceProducer1(x, y){
//     const num =`I have ${x} dollors, and ${y} apples.`
//     return console.log(num)
//   };


// juiceProducer1()


// let birthday = 1991;

// const  calcAge = function(birthday){
//     return 2033 - birthday;
// }
// console.log(calcAge);

// const calcAge2 = birthday => 2033 - birthday;

// console.log(calcAge2(1920))


// const botcalc = bottles => `I got ${bottles} of water.`;
// console.log( botcalc(3));




// const age = birthYear => 2022 - birthYear

// // const howManyYear = age => 65 - age 
 
// function howManyYear(age){
//     return 65 - age
// }

// console.log(howManyYear(age(1977)))


// const yearUntilRetired = birthYear =>{
//     const age = 2023 - birthYear;
//     return 65 - age;
// }

// console.log(yearUntilRetired(1976))

// ------------------

function fruitPieces(fruit) {
     return fruit * 4
}


function fruitProcessor(apples,oranges){
    const applePieces = fruitPieces(apples);
    const orangePieces = fruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
    return juice
}

console.log(fruitProcessor(3,4));

fruitProcessor(5,4)


 