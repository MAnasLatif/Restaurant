window.addEventListener("load", function() {
    /* ----------- start Animation on page-loader ---------------- */
    document.querySelector(".page-loader").classList.add("fade-out")
    setTimeout(function() {
        document.querySelector(".page-loader").style.display = "none";
    }, 600);
    /* ----------- Animation on scroll ---------------- */
    AOS.init();
});
/* ------------------------- menu toggle button ------------------- */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", togglenav);

function togglenav() {
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

// close nav when click on a nav item
document.addEventListener("click", function(e) {
    if (e.target.closest(".nav-item")) {
        togglenav();
    }
});

/* ------------------------ Sticky Header ------------------ */
window.addEventListener("scroll", function() {
    if (this.pageYOffset > 60) {
        document.querySelector(".header").classList.add("sticky");
    } else {
        document.querySelector(".header").classList.remove("sticky");
    }
});

/* ------------------------ menu tabs --------------------------- */
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e) {
    if (
        e.target.classList.contains("menu-tab-item") &&
        !e.target.classList.contains("active")
    ) {
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection
            .querySelector(".menu-tab-content.active")
            .classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
    }
});