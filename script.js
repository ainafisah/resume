document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       AOS INIT
    ========================= */
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 900,
            once: true
        });
    }

    /* =========================
       ACTIVE NAV HIGHLIGHT
    ========================= */
    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

});