const progressBar =
document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const totalHeight =
document.documentElement.scrollHeight-window.innerHeight;

const progress =
(window.scrollY/totalHeight)*100;

progressBar.style.width=
progress+"%";

});
const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}

else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};