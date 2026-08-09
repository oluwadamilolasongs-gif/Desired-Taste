const restaurantName = document.querySelector(".restaurant-name");
const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");

const mobileNav = document.querySelector(".mobile-nav");

// Hamburger animation + mobile navigation
menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");

    mobileNav.classList.toggle("active");

});

// Glow Effect
function glowEffect() {

    restaurantName.classList.add("glow");
    header.classList.add("header-glow");

    setTimeout(() => {

        restaurantName.classList.remove("glow");
        header.classList.remove("header-glow");

    }, 2300);

}

// First glow after 2 seconds
setTimeout(glowEffect, 2000);

// Continue glowing every 10 seconds
setInterval(glowEffect, 10000);

// Sticky Header

window.addEventListener("scroll", () => {

    if(window.scrollY > 20){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

// ===========================
// HERO CAROUSEL
// ===========================

const slides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide =>{

        slide.classList.remove("active");

        const content = slide.querySelector(".hero-content");

if(content){

    content.classList.remove("show");

}

    });

    slides[index].classList.add("active");

    setTimeout(()=>{

        const activeContent = slides[index].querySelector(".hero-content");

if(activeContent){

    activeContent.classList.add("show");

}

    },2000);

}

showSlide(currentSlide);

setInterval(()=>{

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

},10000);

// ===========================
// RESERVATION MODAL
// ===========================

const reserveBtn = document.querySelector(".reserve-btn");

const reservationModal = document.querySelector(".reservation-modal");

const closeBtn = document.querySelector(".close-btn");

reserveBtn.addEventListener("click", () => {

    reservationModal.classList.add("active");

    document.body.style.overflow = "hidden";

});

closeBtn.addEventListener("click", () => {

    reservationModal.classList.remove("active");

    document.body.style.overflow = "auto";

});

reservationModal.addEventListener("click", (e) => {

    if(e.target === reservationModal){

        reservationModal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});

// ===========================
// RESERVATION FORM VALIDATION
// ===========================

const reservationForm = document.querySelector(".reservation-form");

const successMessage = document.querySelector(".success-message");

reservationForm.addEventListener("submit", (e) => {

    e.preventDefault();

    if(!reservationForm.checkValidity()){

        reservationForm.reportValidity();

        return;

    }

    reservationModal.classList.remove("active");

    document.body.style.overflow = "auto";

    successMessage.classList.add("show");

    reservationForm.reset();
    

});

// Close success message when tapping outside the card

successMessage.addEventListener("click", (e) => {

    if(e.target === successMessage){

        successMessage.classList.remove("show");

    }

});

// ===========================
// FINAL SCROLL ANIMATIONS
// ===========================

document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(
        ".signature-section .dish, " +
        ".menu-card, " +
        ".testimonial-card, " +
        ".footer-brand, " +
        ".footer-links, " +
        ".footer-contact, " +
        ".footer-social, " +
        ".footer-divider, " +
        ".footer-bottom"
    );

    // Add the base animation class
    revealElements.forEach(element => {
        element.classList.add("scroll-reveal");
    });

    // Intersection Observer (re‑animates every time element enters viewport)
    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                const element = entry.target;

                if (entry.isIntersecting) {
                    // Animate in whenever element enters viewport
                    element.classList.add("is-visible");
                } else {
                    // Reset when element leaves viewport so it can animate again
                    element.classList.remove("is-visible");
                }
            });
        },
        {
            threshold: 0.1,              // triggers when 10% of element is visible
            rootMargin: "0px 0px -10px 0px"
        }
    );

    // Observe each element
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});