async function loadCertificates(){

const response=await fetch("data/certificates.json");

const certificates=await response.json();

const grid=document.getElementById("certificate-grid");

certificates.forEach(item=>{

grid.innerHTML+=`

<div class="certificate-card">

<h3>${item.title}</h3>

<p>${item.issuer}</p>

<a href="${item.credential}" target="_blank">

View Credential →

</a>

</div>

`;

});

}

loadCertificates();