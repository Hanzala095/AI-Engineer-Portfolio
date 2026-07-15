const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
const menuBtn = document.querySelector('.menu-btn');
const navLinksContainer = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
    });
});
