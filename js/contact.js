// ======================================
// Load Contact Information
// ======================================

async function loadContact() {

    try {

        const response = await fetch("data/contact.json");
        const contact = await response.json();

        document.getElementById("contact-email").textContent = contact.email;
        document.getElementById("contact-location").textContent = contact.location;

        document.getElementById("github-link").href = contact.github;
        document.getElementById("linkedin-link").href = contact.linkedin;

    }

    catch (error) {

        console.error("Failed to load contact information:", error);

    }

}

loadContact();


// ======================================
// EmailJS Initialization
// ======================================

emailjs.init("Me2ymjtlVy5Xrmq37");


// ======================================
// Toast Notification
// ======================================

function showToast(title, message, success = true) {

    const toast = document.getElementById("toast");
    const icon = document.getElementById("toast-icon");
    const toastTitle = document.getElementById("toast-title");
    const toastMessage = document.getElementById("toast-message");

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    if (success) {

        icon.className = "fa-solid fa-circle-check";
        icon.style.color = "#22C55E";
        toast.style.borderLeftColor = "#22C55E";

    }

    else {

        icon.className = "fa-solid fa-circle-xmark";
        icon.style.color = "#EF4444";
        toast.style.borderLeftColor = "#EF4444";

    }

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


// ======================================
// Contact Form
// ======================================

const form = document.getElementById("contact-form");
const button = document.getElementById("send-btn");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Honeypot Protection
    if (document.getElementById("website").value !== "") {

        return;

    }

    // Get Values

    const fromName = document.getElementById("from_name").value.trim();
    const fromEmail = document.getElementById("from_email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation

    if (fromName.length < 2) {

        showToast("Invalid Name", "Please enter your full name.", false);
        return;

    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(fromEmail)) {

        showToast("Invalid Email", "Please enter a valid email address.", false);
        return;

    }

    if (subject.length < 3) {

        showToast("Invalid Subject", "Please enter a subject.", false);
        return;

    }

    if (message.length < 10) {

        showToast("Message Too Short", "Message should contain at least 10 characters.", false);
        return;

    }

    button.disabled = true;

    button.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    const templateParams = {

        from_name: fromName,
        from_email: fromEmail,
        subject: subject,
        message: message

    };

    emailjs.send(

        "service_rbu06pl",
        "template_gzyz5tb",
        templateParams

    )

    .then(() => {

        button.innerHTML =
            '<i class="fa-solid fa-circle-check"></i> Sent Successfully';

        showToast(

            "Message Sent",

            "Thank you! I'll get back to you soon."

        );

        form.reset();

        setTimeout(() => {

            button.disabled = false;

            button.innerHTML =
                '<i class="fa-solid fa-paper-plane"></i> <span>Send Message</span>';

        }, 2000);

    })

    .catch((error) => {

        console.error(error);

        showToast(

            "Sending Failed",

            "Something went wrong. Please try again.",

            false

        );

        button.disabled = false;

        button.innerHTML =
            '<i class="fa-solid fa-paper-plane"></i> <span>Send Message</span>';

    });

});