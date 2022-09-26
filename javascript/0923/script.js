'use strict';
/*
const lufthansa = {
    airline: "Lufthansa",
    iataCode:"LH",
    bookings:[],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({flight:`${this.iataCode}${flightNum}`,name})
    }
}
lufthansa.book(239,"John")
lufthansa.book(123,"Smith")
console.log(lufthansa)

const eurowings = {
    airline:"Eurowings",
    iataCode:"EW",
    bookings:[],
}
const book = lufthansa.book

//call
book.call(eurowings, 23,"Sarah")
console.log(eurowings)

book.call(lufthansa,143,"Mary")
console.log(lufthansa)

const swiss = {
    airline:"Swiss Air Lines",
    iataCode:"LX",
    bookings:[]
}

book.call(swiss,583, "Cooper")
console.log(swiss)

//apply 不用了
const flightData = [583,'George']
// book.apply(swiss, flightData)
// console.log(swiss) 

book.call(swiss, ...flightData)
console.log(swiss) 

//bind

const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)


bookEW(789,'Steven')
console.log(eurowings)

const bookEW23 = book.bind(eurowings,230)
bookEW23("Jonas")
bookEW23("Martha")

 lufthansa.planes = 300
 lufthansa.buyPlane = function(){
    console.log(this)
    this.planes++
    console.log(this.planes)
 }
 lufthansa.buyPlane()
 document.querySelector('.buy').addEventListener("click", lufthansa.buyPlane.bind(lufthansa))

 const addTax = (rate,value)=> value + value*rate
 console.log(addTax(0.1,200))
 const addVAT = addTax.bind(null, 0.23)
 // addVat = value => value + value * 0.23
 console.log(addVAT(100))
*/

/*
 const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`))
        console.log(answer) 
        
        typeof answer === "number" && answer < this.answers.length
        && this.answers[answer]++

        // console.log(this.answers)
        this.displayResults()
        this.displayResults('string')
      },

      displayResults(type = "array"){
        if(type === 'array'){
            console.log(this.answers)
        }else if(type ==='string'){
            console.log(`Poll results are ${this.answers.join(',' )}`)
        }
      }
    }

//  poll.registerNewAnswer()

document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll))

poll.displayResults.call({answers:[5,2,4]}, 'string')
poll.displayResults.call({answers:[1,5,2,4]}, 'string')
poll.displayResults.call({answers:[1,5,2,4,9]})

const boardPassengers = function(n,wait){
    const perGroup = n/3

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`)
        console.log(`There are 3 groups, each with ${perGroup} passengers`)
    }, wait* 1000)
    console.log(`Will start boarding in ${wait} seconds`)
}
*/

(function(){
    const header = document.querySelector("h1")
    header.style.color = 'red'
    document.querySelector('body').addEventListener('click',function(){
        header.style.color = 'blue'
    })
})()
