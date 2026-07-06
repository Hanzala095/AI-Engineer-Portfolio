const roles = [

"AI Engineer",

"Machine Learning Enthusiast",

"Computer Vision Developer",

"NLP Explorer",

"Human-Centered AI Researcher"

];

let roleIndex = 0;

let charIndex = 0;

const typing = document.getElementById("typing");

function type(){

if(!typing) return;

typing.textContent =

roles[roleIndex].substring(0,charIndex);

charIndex++;

if(charIndex<=roles[roleIndex].length){

setTimeout(type,80);

}

else{

setTimeout(erase,1500);

}

}

function erase(){

typing.textContent=

roles[roleIndex].substring(0,charIndex);

charIndex--;

if(charIndex>=0){

setTimeout(erase,40);

}

else{

roleIndex++;

if(roleIndex>=roles.length){

roleIndex=0;

}

setTimeout(type,300);

}

}

type();