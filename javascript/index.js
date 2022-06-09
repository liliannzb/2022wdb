// console.log("John")
// let firstName = "John";
// console.log(firstName)

// let javes = true;
// console.log(typeof true);
// console.log(typeof "asd");
// console.log(typeof javes);
// console.log(typeof acd);


// const now = 2045
// const ageTom = now - 1999;
// const ageFred = now - 2010;
// console.log(ageTom, ageFred);
// console.log(ageTom * 2, ageFred / 3);

// const nameFirst = "May";
// const nameLast = "Chen";
// console.log(nameFirst + " " + nameLast)

// let x = 5 + 10;
// x += 10 ;//x = x+10  => 25
// x *= 4 ; // x =x*4  =>100
// x++;
// x--;
// x--;
// console.log(x);


// //comparison operators 結果是布林值
// console.log(ageTom > ageFred) // =>true
// console.log(ageFred >= 18);
// const isFullAge = ageFred >= 18;
// console.log(typeof isFullAge); 

// let x, y;
// x = y = 25 - 10;
// console.log(x,y)

// const firstName = "Amy";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;
// const jonas = "I'm " + firstName +", a " +(2022 - birthYear) + " years old " + job + "." ;

// console.log(jonas);

// const jonasnew = `I'm ${firstName}, a ${year -birthYear} years old ${job}.`

// const jonasnew = `I'm ${firstName}, a ${2020 -birthYear} years old ${job}.`
// console.log(jonasnew);

// console.log('a string \n\
// a function')

// console.log(`a string
// a function`)

// let n = "1" + 1
// n = n - 1

// const money = 0;

// if (money){
//     console.log("I got money")
// }else{
//     console.log("I'm poor...")
// }

// if ("money"){
//     console.log("I got money")
// }else{
//     console.log("I'm poor...")
// }
// if ({}){
//     console.log("I got money")
// }else{
//     console.log("I'm poor...")
// }

// const typeNumber = prompt("type the number");
// console.log(typeof typeNumber)

// if (typeNumber === 23){
//     alert("Wow!")
// }

// const friends = ["Amy", "Bella", "Cindy","David"];
// console.log(friends);
// console.log(friends[2]);
// console.log(friends.length)
// console.log(friends[0]= "Peter")
// console.log(friends);
// console.log(friends[friends.length - 1])

// const firstName = "teacher";
// const person =[firstName, "Leo", 2020 - 1977 , friends] ;

// console.log(person);


// friends.push("Zack");
// console.log(friends);

// friends.unshift("Marry");
// console.log(friends);


// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Cindy"));
// console.log(friends.includes("Cindy"));


// if (friends.includes("Cindy")){
//     console.log("You have a friend called Cindy.")
// }




// -------------

// const calcAge = function(birthday){
//     return 2035 - birthday
// }

// const year = [1994, 1979, 2010, 2001]
// const age1 = calcAge(year[0]);
// const age2 = calcAge(year[2]);
// const age3 = calcAge(year[year.length - 1]);

// const newAge = [calcAge(year[0]), calcAge(year[2]), calcAge(year[year.length - 1])]
// // console.log(newAge)

// ----------

// const joans = {
//     firstName : 'Mike',
//     lastName : 'Ho',
//     age : 2040 - 1993,
//     job : "teacher",
//     friends : ["Amy", "Nick", "Hebe"]
// };

// const interestedIN = prompt('What do you want to know about joans ? Choose between firstName, lastName, age, job, friends')
// console.log(joans[interestedIN])

// console.log(`${joans.firstName} has ${joans.friends.length} friends,and his best friend call ${joans.friends[0]}.`)

// const person = {
//     firstName : 'Mike',
//     lastName : 'Ho',
//     birthYear: 1993,
//     job : "teacher",
//     friends : ["Amy", "Nick", "Hebe"],
//     hasDriverLicense : true, 

    // calcAge: function(birthYear){
    //     return 2035 - birthYear;
    // },


    // calcAge: function(){
    //     return 2035 - this.birthYear;
    // },


    // calcAge: function(){
    //     this.age = 2035 - this.birthYear;
    //     return this.age;
    // },
//     driverLicense : function(){
//         if (this.hasDriverLicense){
//            return "has a driver license"
//         }else {
//           return  "do not has driver license " 
//         }

//     },
//     getSummary : function(){
//         return `${this.firstName} is ${this.age} old  ${this.job}, he has ${this.hasDriverLicense ? "a" : "no"} license.`
//     },

   

// }; 
// console.log(person.getSummary())
// console.log(person.driverLicense()),

// person.calcAge();
// console.log(person.age)



// console.log(`${person.firstName} is ${person.age} old ${person.job},he ${person.driverLicense()} `)

// console.log('Lifting weights repetition 1')

// for (let rep = 1; rep <= 10 ; rep++){
//     console.log(`Lifting weights repetition ${rep}.`)
// };

// const type =[];
// const type1 =[];
// const joansArrow =[
//     "joans", "jom", 2030-2001, "teacher", ["Marry", "May","Mini"]
// ];

// for(let i = 0; i < joansArrow.length  ; i++){
//     console.log(joansArrow[i], typeof joansArrow[i])
// };


// for(let i = 0; i < joansArrow.length  ; i++){
//     type.push(joansArrow[i]),
//     type1[i] =joansArrow[i]
// };
// console.log(type1);
// console.log(type);

//------------//

// const year = [1991, 1987, 2020, 2001, 1999]
// const calcYear = []

// for(let i = 0; i < year.length; i++){
//     calcYear.push(2055 - year[i])
// };

//  console.log(calcYear);




//  const joansArrow =[
//     "joans", "jom", 2030-2001, "teacher", ["Marry", "May","Mini"]
// ];

// for(let i = 0; i < joansArrow.length  ; i++){
//     if(typeof joansArrow[i] !== 'string') continue;
//     console.log(joansArrow[i], typeof joansArrow[i])
// };
// for(let i = 0; i < joansArrow.length  ; i++){
//     if(typeof joansArrow[i] === 'number') break;
//     console.log(joansArrow[i], typeof joansArrow[i])
// };


let i = 1
while(i < 10){
    // console.log(`Lifting weights repetition ${i}.`);
    i++;
}

let dice = Math.floor(Math.random() * 6) + 1;
while(dice !== 6 ){
    console.log(`You rolled ${dice}`)
    dice = Math.floor(Math.random() * 6) + 1;
    if (dice === 6 )console.log('end')
}

for(let dice = Math.floor(Math.random() * 6) + 1;dice !== 6;dice = Math.floor(Math.random() * 6) + 1){
    console.log(`You rolled aa ${dice}`)
}








// console.log('Lifting weights repetition 1')

// for ( let type = 1; type <= 3; type++){
// for (let rep = 1; rep <= 10 ; rep++){
//     console.log(`Calc(${type}) kind:lifting weights repetition ${rep}.`)
// }};


// console.log('Lifting weights repetition 1')

// for ( let type = 1; type <= 3; type++){
//     console.log(`-----------exercise ${type}`)
// for (let rep = 1; rep <= 5 ; rep++){
//     console.log(`Lifting weights repetition ${rep}.`)
// }};

