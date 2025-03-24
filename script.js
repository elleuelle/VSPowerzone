// ✅ Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

// ✅ Smooth Scrolling Effect for Navigation Links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active"); // Toggle menu visibility
    });

    // ✅ Close menu when clicking outside (Mobile UX Fix)
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });
});



// ✅ Button Hover Effect (Glowing Animation)
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.boxShadow = "0 0 15px #00ff00";
    });

    button.addEventListener("mouseleave", () => {
        button.style.boxShadow = "none";
    });
});
// ✅ Scroll Spy - Highlights Active Section in Navbar
document.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav ul li a");

    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});
window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.style.background = "black"; /* Solid color when scrolling */
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.5)"; /* Transparent at top */
    }
});

let slideIndex = 0; // Start at the first slide

// Show slide based on current slideIndex
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot'); // Get all the dots
    if (index >= slides.length) slideIndex = 0; // If at the end, go back to the first slide
    if (index < 0) slideIndex = slides.length - 1; // If before the first slide, go to the last one

    // Move the carousel to the correct slide position
    const carousel = document.querySelector('.carousel');
    carousel.style.transition = "transform 1s ease-in-out"; // Smooth transition for sliding
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`; // Adjust the slide index dynamically

    // Remove 'active' class from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    // Add 'active' class to the current dot
    dots[slideIndex].classList.add('active');
}
// Move slides when clicking next or previous
function moveSlide(n) {
    slideIndex += n; // Adjust the slide index by the click direction
    showSlide(slideIndex); // Update the displayed slide
}

// Set up auto-slide every 5 seconds (optional)
setInterval(() => {
    moveSlide(1); // Move to the next slide automatically
}, 5000); // 5 seconds interval

// Initially show the first slide
showSlide(slideIndex);
