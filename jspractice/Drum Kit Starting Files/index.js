// alert("music!");
// document.querySelectorAll("button")[].addEventListener("click", function (){
//     alert("I got clicked!");
// })

for ( let n = 0; n< document.querySelectorAll(".drum").length; n++){
    document.querySelectorAll("button")[n].addEventListener("click", function (){
      var buttonInnerHtml = this.innerHTML;
      keyPressEvent(buttonInnerHtml);
      buttonAnimation(buttonInnerHtml)

    //   switch(buttonInnerHtml) {
    //       case "w" :
    //           var crash = new Audio("./sounds/crash.mp3");
    //           crash.play();
    //         break;
    //         case "a" :
    //           var kick = new Audio("./sounds/kick-bass.mp3");
    //          kick.play();
    //         break;
    //         case "s" :
    //             var snare = new Audio("./sounds/snare.mp3");
    //            snare.play();
    //         break;
    //         case "d" :
    //             var tom1 = new Audio("./sounds/tom-1.mp3");
    //            tom1.play();
    //         break;
    //         case "j" :
    //             var tom2 = new Audio("./sounds/tom-2.mp3");
    //            tom2.play();
    //         break;
    //         case "k" :
    //             var tom3 = new Audio("./sounds/tom-3.mp3");
    //            tom3.play();
    //         break;
    //         case "l" :
    //             var tom4 = new Audio("./sounds/tom-4.mp3");
    //            tom4.play();
    //         break;
    //         default:
    //         console.log(buttonInnerHtml);
      
    // }

} )}

document.addEventListener("keypress" ,function(event){
    keyPressEvent(event.key);
    buttonAnimation(event.key)
    
})


function keyPressEvent(key){
    switch(key) {
        case "w" :
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
          break;
          case "a" :
            var kick = new Audio("./sounds/kick-bass.mp3");
           kick.play();
          break;
          case "s" :
              var snare = new Audio("./sounds/snare.mp3");
             snare.play();
          break;
          case "d" :
              var tom1 = new Audio("./sounds/tom-1.mp3");
             tom1.play();
          break;
          case "j" :
              var tom2 = new Audio("./sounds/tom-2.mp3");
             tom2.play();
          break;
          case "k" :
              var tom3 = new Audio("./sounds/tom-3.mp3");
             tom3.play();
          break;
          case "l" :
              var tom4 = new Audio("./sounds/tom-4.mp3");
             tom4.play();
          break;
          default:
          console.log(buttonInnerHtml);
    
    }
}
function buttonAnimation(currentKey) {
    let buttonAnimation = document.querySelector("." + currentKey);

    buttonAnimation.classList.add("pressed");

    setTimeout(function(){
        buttonAnimation.classList.remove("pressed");
        
    },100)

}