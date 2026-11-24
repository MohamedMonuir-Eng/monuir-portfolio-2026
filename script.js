
// ==============================
// MOBILE MENU
// ==============================

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {

    function closeMobileMenu() {
        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeMobileMenu();
        }
    });
}


// ==============================
// PORTFOLIO FILTERS
// ==============================

const filterButtons = document.querySelectorAll(".filter-btn");
const workCards = document.querySelectorAll(".work-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filterValue = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        workCards.forEach(card => {

            const category = card.dataset.category;

            if (filterValue === "all" || category === filterValue) {
                card.hidden = false;
            } else {
                card.hidden = true;
            }

        });

    });

});


// ==============================
// SCROLL REVEAL
// ==============================

const revealElements = document.querySelectorAll(
    ".new-gallery .gallery-heading, .gallery-filters, .work-card, .about-section, .contact-section"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("active");
    });

}
