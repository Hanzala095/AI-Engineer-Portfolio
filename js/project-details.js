const params=new URLSearchParams(window.location.search);

const id=parseInt(params.get("id"));

async function loadProject(){

const projectsResponse=await fetch("../data/projects.json");

const projects=await projectsResponse.json();

const caseResponse=await fetch("../data/case-studies.json");

const studies=await caseResponse.json();

const project=projects.find(p=>p.id===id);

const study=studies.find(s=>s.id===id);

if(!project||!study){

document.body.innerHTML="<h1>Project Not Found</h1>";

return;

}

document.title=project.title;

document.getElementById("project-title").textContent=project.title;

document.getElementById("project-overview").textContent=study.overview;

document.getElementById("problem").textContent=study.problem;

document.getElementById("solution").textContent=study.solution;

document.getElementById("future").textContent=study.future;

document.getElementById("github-btn").href=project.github;

const tech=document.getElementById("tech-stack");

project.technologies.forEach(item=>{

tech.innerHTML+=`

<span class="tech">

${item}

</span>

`;

});

const results=document.getElementById("results");

study.results.forEach(item=>{

results.innerHTML+=`

<li>${item}</li>

`;

});

const lessons=document.getElementById("lessons");

study.lessons.forEach(item=>{

lessons.innerHTML+=`

<li>${item}</li>

`;

});

}

loadProject();