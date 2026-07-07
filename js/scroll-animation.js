const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show-section");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden-section");

observer.observe(section);

});