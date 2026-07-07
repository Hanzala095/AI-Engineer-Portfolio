async function loadSkills() {

    const response = await fetch("data/skills-categories.json");
    const data = await response.json();

    const container = document.getElementById("skills-container");

    container.innerHTML = "";

    data.forEach(category => {

        container.innerHTML += `

        <div class="skill-category">

            <h3>${category.category}</h3>

            <div class="skill-tags">

                ${category.skills.map(skill => `
                    <span class="skill-tag">${skill}</span>
                `).join("")}

            </div>

        </div>

        `;

    });

}

loadSkills();