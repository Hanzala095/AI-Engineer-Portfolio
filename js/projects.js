let allProjects = [];

async function loadProjects() {

    const response = await fetch("data/projects.json");
    allProjects = await response.json();

    displayFeaturedProject();
    displayProjects(allProjects);

}

function displayFeaturedProject() {

    const featuredContainer = document.getElementById("featured-project");

    if (!featuredContainer) return;

    const featured = allProjects.find(project => project.featured);

    if (!featured) return;

    featuredContainer.innerHTML = `

<div class="featured-card">

    <div class="featured-image">

        <img src="assets/projects/factory.png" alt="${featured.title}">

    </div>

    <div class="featured-content">

        <span class="featured-label">

⭐ Featured AI System

</span>

<div class="featured-meta">

    <span>

        <i class="fa-regular fa-calendar"></i>

        ${featured.year}

    </span>

    <span>

        <i class="fa-solid fa-building"></i>

        ${featured.team}

    </span>

    <span>

        <i class="fa-solid fa-microchip"></i>

        ${featured.category}

    </span>

</div>

<h2>${featured.title}</h2>

        <p>${featured.shortDescription}</p>

        <div class="project-tech">

            ${featured.technologies.map(tech =>

                `<span>${tech}</span>`

            ).join("")}

        </div>

        <div class="project-buttons">

            <a href="${featured.github}"

target="_blank"

class="github-btn">

<i class="fa-brands fa-github"></i>

Source Code

</a>

            <a href="pages/project-details.html?id=${featured.id}"

               class="case-btn">

                <i class="fa-solid fa-book-open"></i>

Case Study

            </a>

        </div>

    </div>

</div>

`;

}

function displayProjects(projects) {

    const grid = document.getElementById("project-grid");

    grid.innerHTML = "";

    projects.forEach(project => {

        grid.innerHTML += `

<div class="project-card">

    <img

        src="${project.image}"

        alt="${project.title}"

        class="project-thumbnail">

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

        ⭐ Featured

    </span>`

    : ""}

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

        <a href="pages/project-details.html?id=${project.id}"

           class="case-btn">

            Case Study →

        </a>

    </div>

</div>

`;

    });

}

loadProjects();