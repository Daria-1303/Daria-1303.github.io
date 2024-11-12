document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Theme toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
        themeToggle.textContent = document.body.classList.contains("dark-theme") ? "🌞" : "🌙";
    });

    // Carousel functionality
    let currentIndex = 0;
    const carouselItems = document.querySelectorAll('.carousel-item');

    function showNextProject() {
        carouselItems[currentIndex].style.transform = "translateX(-100%)";
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].style.transform = "translateX(0)";
    }

    setInterval(showNextProject, 3000);
});
