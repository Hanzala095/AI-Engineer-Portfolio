async function loadProjects() {

    const response = await fetch("data/projects.json");
    const projects = await response.json();
    const featured = projects.find(project => project.featured);

const featuredContainer = document.getElementById("featured-project");

featuredContainer.innerHTML = `

<div class="featured-card">

<div class="featured-left">

<img src="assets/projects/${featured.image}" alt="${featured.title}">

</div>

<div class="featured-right">

<span class="featured-tag">

⭐ Featured AI System

</span>

<h2>${featured.title}</h2>

<p>${featured.description}</p>

<div class="featured-tech">

${featured.technologies.map(tech=>`<span>${tech}</span>`).join("")}

</div>

<div class="project-buttons">

<a href="${featured.github}" class="github-btn">

Source Code

</a>

<a href="pages/project-details.html?id=${featured.id}" class="case-btn">

Case Study →

</a>

</div>

</div>

</div>

`;

    const grid = document.getElementById("project-grid");

    grid.innerHTML = "";

    projects.forEach(project => {

        grid.innerHTML += `

        <div class="project-card">

            <div class="project-top">

                <span class="project-category">${project.category}</span>

                ${project.featured ? `<span class="featured-badge">⭐ Featured</span>` : ""}

            </div>

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <div class="project-tech">

                ${project.technologies.map(tech =>
                    `<span>${tech}</span>`
                ).join("")}

            </div>

            <div class="project-buttons">

                <a href="${project.github}" target="_blank" class="github-btn">

                    Source Code

                </a>

                <a href="pages/project-details.html?id=${project.id}" class="case-btn">

                    Case Study →

                </a>

            </div>

        </div>

        `;

    });

}

loadProjects();