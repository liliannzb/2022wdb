'use strict';
// document.querySelector('.message').textContent = "Correct number!";
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 7;

// document.querySelector('input.guess').Value = 8;



let randomNumber = Math.floor(Math.random() * 20)+1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function(){
    const guessNumber = +document.querySelector('.guess').value;
   
    if(!guessNumber){
        document.querySelector('.message').textContent = "No number!";
        score--;
        document.querySelector(".score").textContent = score ; 
    }else if(guessNumber === randomNumber){
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('.message').textContent = "Correct number!";
        document.querySelector(".score").textContent = score ; 
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

     if(highScore < score){
        highScore = score
        document.querySelector(".highscore").textContent = highScore }
    

    }else if (guessNumber > randomNumber) {
        if(score > 0){
        document.querySelector('.message').textContent = "Too high!";
        score--;
        document.querySelector(".score").textContent = score ;}
        else{
            document.querySelector('.message').textContent = "YOU LOSE THE GAME";
        } 
    }else{
        if(score > 0){
        document.querySelector('.message').textContent = "Too low!";
        score--;
        document.querySelector(".score").textContent = score ;}
        else{
            document.querySelector('.message').textContent = "YOU LOSE THE GAME";
        } 
    }
}
)

document.querySelector(".again").addEventListener('click',function(){
     score = 20;
     randomNumber = Math.floor(Math.random() * 20)+1;
     document.querySelector('.message').textContent = "Start  guessing...";
     document.querySelector(".score").textContent = score;
     document.querySelector('.highscore').textContent = score;
     document.querySelector('.number').textContent =" ? ";
     document.querySelector("body").style.backgroundColor = "#222";
     document.querySelector(".number").style.width = "15rem";
     document.querySelector('.guess').value = '';
})
