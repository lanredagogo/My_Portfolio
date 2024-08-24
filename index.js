const menuBar = document.getElementById('menu-bar');
const catMenu = document.getElementById('cat_menu');
const closeBtn = document.getElementById('btn');

// Function to toggle menu visibility
function toggleMenu() {
    catMenu.classList.toggle('hidden');
}

// Event listener for hamburger icon click
menuBar.addEventListener('click', function() {
    toggleMenu();
});

// Event listener for close button click
closeBtn.addEventListener('click', function() {
    toggleMenu();
});


document.addEventListener("DOMContentLoaded", function () {
    const aboutMeSection = document.getElementById("about-me");

    function handleScroll() {
        const sectionTop = aboutMeSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8; // Trigger the animation when 80% of the section is visible

        if (sectionTop < triggerPoint) {
            aboutMeSection.classList.add("animate");
            window.removeEventListener("scroll", handleScroll); // Remove the event listener after animation triggers
        }
    }

    window.addEventListener("scroll", handleScroll);
});

