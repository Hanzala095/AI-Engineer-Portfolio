const reveals = document.querySelectorAll(
".reveal,.reveal-left,.reveal-right,.reveal-scale"
);

function revealSections(){

const windowHeight = window.innerHeight;

reveals.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < windowHeight - 120){

item.classList.add("active");

}

});

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);