// $(document).ready(function () {
//   $("h2").css("color", "red");
// });
// 如果把CDN放在header就要$(document).ready

$("h2").css("color", "green")
console.log($("h2").css("color"));
console.log($("h2").css("font-size"));
$("button") //全選

$("h1").addClass("big-style  margin-50");
//removeClass
 
$("h1").hasClass('margin-50');
$("h2").text("Bye");

$("button").html("<em>Hey</em>");

$('a').attr('href',"http://tw.yahoo.com")

$("h1").click(function(){
    $("h1").css("color", "purple")
})

// for(let i = 0; i<5; i++){
//     document.querySelectorAll('button')[i].addEventListener("click",function(){
//         document.querySelector('h2').style.color = "pink";
//     })
// 

$('button').click(function(){
    $('h2').css("color","pink")
}) 

$('input').keypress(function(event){
   console.log(event.key); 
})

$(document).keypress(function(event){
    console.log(event.key);
    $("h1").text(event.key)
})

$('h2').on("mouseover",function(){
    $("h2").css("color", "blue" )
})
  
$("h1").before("<button>New</button >")
$("h1").after("<button>New1</button >")
$("h1").prepend("<button>New2</button >")
$("h1").append("<button>New3</button >")
 
// $("h3").remove();
$("button").on("click",function(){
    $("h1").fadeOut();
})
$("button").on("click",function(){
    $("h1").fadeIn()
})

//fadeOut() + fadeIn() ==> fadeToggle()

$("button").on("click",function(){
    $("h2").slideUp();
})
//slideUp() + slideDown() ==> slideToggle() 

$("button").on("click",function(){
    $("h3").animate({opacity: 0.5});
})