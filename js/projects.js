let allProjects = [];

async function loadProjects() {

    const response = await fetch("data/projects.json");

    allProjects = await response.json();

    displayProjects(allProjects);

}

function displayProjects(projects) {

    const grid = document.getElementById("project-grid");

    grid.innerHTML = "";

    projects.forEach(project => {

        grid.innerHTML += `

<div class="project-card">

<div class="project-header">

<span class="project-category">

${project.category}

</span>

<span class="project-year">

${project.year}

</span>

</div>

${project.featured ?

`<span class="featured-badge">

⭐ Featured Project

</span>`

:""}

<h3>${project.title}</h3>

<p>${project.shortDescription}</p>

<div class="project-tech">

${project.technologies.map(tech =>

`<span>${tech}</span>`

).join("")}

</div>

<div class="project-meta">

<span>${project.type}</span>

<span>${project.team}</span>

</div>

<div class="project-buttons">

<a href="${project.github}"

target="_blank"

class="github-btn">

Source Code

</a>

<a

href="pages/project-details.html?id=${project.id}"

class="case-btn">

Case Study →

</a>

</div>

</div>

`;

    });

}

loadProjects();