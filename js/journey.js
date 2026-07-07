async function loadJourney(){

const response = await fetch("data/journey.json");

const journey = await response.json();

const container = document.getElementById("timeline-container");

journey.forEach((item,index)=>{

container.innerHTML += `

<div class="timeline-item ${index%2===0?"left":"right"}">

<div class="timeline-card">

<div class="timeline-year">

${item.year}

</div>

<h3 class="timeline-title">

${item.title}

</h3>

<p class="timeline-description">

${item.description}

</p>

</div>

</div>

`;

});

}

loadJourney();