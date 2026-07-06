async function loadDashboard(){

const projects=await fetch("data/projects.json");

const skills=await fetch("data/skills.json");

const experience=await fetch("data/experience.json");

const projectData=await projects.json();

const skillData=await skills.json();

const experienceData=await experience.json();

document.getElementById("project-count").textContent=projectData.length+"+";

document.getElementById("skill-count").textContent=skillData.length+"+";

document.getElementById("experience-count").textContent=experienceData.length;

}

loadDashboard();