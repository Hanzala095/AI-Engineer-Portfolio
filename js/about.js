async function loadAbout(){

const response = await fetch("data/about.json");

const about = await response.json();

document.getElementById("about-description").textContent = about.description;

document.getElementById("about-location").textContent = about.location;

document.getElementById("about-degree").textContent = about.degree;

document.getElementById("about-university").textContent = about.university;

document.getElementById("about-internships").textContent = about.internships;

document.getElementById("about-projects").textContent = about.projects;

document.getElementById("about-availability").textContent = about.availability;

}

loadAbout();