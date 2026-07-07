async function loadResearch(){

const response = await fetch("data/research.json");

const research = await response.json();

const container = document.getElementById("research-grid");

research.forEach(item=>{

container.innerHTML+=`

<div class="research-card">

<i class="${item.icon}"></i>

<h3>${item.title}</h3>

<p>${item.description}</p>

</div>

`;

});

}

loadResearch();