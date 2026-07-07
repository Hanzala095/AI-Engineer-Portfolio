async function loadContact(){

const response=await fetch("data/contact.json");

const contact=await response.json();

document.getElementById("contact-email").textContent=contact.email;
document.getElementById("contact-location").textContent=contact.location;

document.getElementById("github-link").href=contact.github;
document.getElementById("linkedin-link").href=contact.linkedin;

}

loadContact();