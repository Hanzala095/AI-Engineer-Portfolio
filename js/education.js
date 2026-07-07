async function loadEducation(){

const response = await fetch("data/education.json");

const education = await response.json();

const container = document.getElementById("education-container");

education.forEach(item=>{

container.innerHTML += `

<div class="education-card">

<h3>${item.degree}</h3>

<h4>${item.institution}</h4>

<p>${item.duration}</p>

<p>${item.board}</p>

<p>${item.location}</p>

</div>

`;

});

}

loadEducation();