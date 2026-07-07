const searchInput = document.getElementById("search-project");

const buttons = document.querySelectorAll(".filter-btn");

let currentFilter = "All";

searchInput.addEventListener("input", filterProjects);

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

currentFilter = button.dataset.filter;

filterProjects();

});

});

function filterProjects(){

const search = searchInput.value.toLowerCase();

const filtered = allProjects.filter(project=>{

const matchesSearch =

project.title.toLowerCase().includes(search)

||

project.shortDescription.toLowerCase().includes(search)

||

project.technologies.join(" ").toLowerCase().includes(search);

const matchesCategory =

currentFilter==="All"

||

project.category===currentFilter;

return matchesSearch && matchesCategory;

});

displayProjects(filtered);

}