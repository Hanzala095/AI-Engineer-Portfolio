async function loadCertificates() {

    const response = await fetch("data/certificates.json");

    const certificates = await response.json();

    const container = document.getElementById("certificate-grid");

    container.innerHTML = "";

    certificates.forEach(certificate => {

        container.innerHTML += `

<div class="certificate-card">

    ${certificate.featured ?

    `<span class="certificate-badge">

        ⭐ Featured

    </span>`

    : ""}

    <img

    src="${certificate.image}"

    alt="${certificate.title}"

    class="certificate-image">

    <h3>

        ${certificate.title}

    </h3>

    <p class="issuer">

        ${certificate.issuer}

    </p>

    <p class="date">

        ${certificate.date}

    </p>

    <div class="certificate-skills">

        ${certificate.skills.map(skill =>

            `<span>${skill}</span>`

        ).join("")}

    </div>

    <a

    href="${certificate.pdf}"

    target="_blank"

    class="certificate-btn">

        View Certificate

    </a>

</div>

`;

    });

}

loadCertificates();