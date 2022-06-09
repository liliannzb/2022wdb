'use strict';
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnShowModel = document.querySelectorAll('.show-modal');

const openModal = function(){
    modal.classList.remove("hidden"); 
    overlay.classList.remove("hidden");
}


for(let i = 0;i < btnShowModel.length; i++)
btnShowModel[i].addEventListener('click',function(){
    modal.classList.remove("hidden"); 
    overlay.classList.remove("hidden");
});

const CloseModal = function(){
    modal.classList.add("hidden"); 
    overlay.classList.add("hidden");
}

btnCloseModal.addEventListener("click",CloseModal);

overlay.addEventListener("click",CloseModal);

window.addEventListener("keydown", function(event){
    // event.key = "Escape"
    if(event.key === "Escape") {
    if(modal.classList.contains = ("hidden")){
    CloseModal();}}
})
