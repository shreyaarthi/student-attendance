// Welcome message
console.log("Smart Attendance Management Website Loaded");

// Simple button effect
document.querySelector(".button").addEventListener("click", function () {
    console.log("Welcome to the Smart Attendance Project!");
});


// Highlight navigation link while scrolling

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "white";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#60a5fa";
        }

    });

});
