const menuBar = document.getElementById('menu-bar');
const catMenu = document.getElementById('cat_menu');
const closeBtn = document.getElementById('btn');


function toggleMenu() {
    catMenu.classList.toggle('hidden');
}


menuBar.addEventListener('click', function() {
    toggleMenu();
});


closeBtn.addEventListener('click', function() {
    toggleMenu();
});


document.addEventListener("DOMContentLoaded", function () {
    const aboutMeSection = document.getElementById("about-me");

    function handleScroll() {
        const sectionTop = aboutMeSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8; 

        if (sectionTop < triggerPoint) {
            aboutMeSection.classList.add("animate");
            window.removeEventListener("scroll", handleScroll); 
        }
    }

    window.addEventListener("scroll", handleScroll);
});

