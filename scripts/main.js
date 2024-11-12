document.addEventListener("DOMContentLoaded", () => {
    // Theme toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        themeToggle.textContent = document.body.classList.contains("dark-theme") ? "🌞" : "🌙";
    });

    // Carousel functionality with manual navigation
    let currentIndex = 0;
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    function showProject(index) {
        carouselItems.forEach((item, i) => {
            item.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showProject(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalItems;
        showProject(currentIndex);
    });

    // Initial display
    showProject(currentIndex);
});
