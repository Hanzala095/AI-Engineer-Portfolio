// ======================================
// Scroll Progress Bar
// ======================================

const progressBar = document.getElementById("progress-bar");

if (progressBar) {

    window.addEventListener("scroll", () => {

        const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress =
            (window.scrollY / totalHeight) * 100;

        progressBar.style.width = progress + "%";

    });

}


// ======================================
// Back To Top Button
// ======================================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        }

        else {

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}