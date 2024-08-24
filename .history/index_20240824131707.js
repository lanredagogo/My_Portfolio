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
