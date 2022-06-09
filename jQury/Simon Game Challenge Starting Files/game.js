const buttonColors = ["red", "blue", "green", "yellow"];

// const randomChosenColor = buttonColors[nextSequence()];
//console.log(randomChosenColor)

const gamePattern = [];
const level = 0;
const started = false;

function nextSequence() {
  level++;

  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);


}
let userChosenColor = [];

const userClickedPattern = [];

$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  playSound(userChosenColor);
});

function playSound(n) {
  const audio = new Audio("sounds/" + n + ".mp3");
  audio.play();
}

function animatePress(currentColor){
  $("#" +currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" +currentColor).removeClass("pressed");
  },100)
}
