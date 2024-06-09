
    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const hero = document.querySelector('.hero');
        const images = ['assets/bg1.jpg', 'assets/bg2.jpg', 'assets/bg3.jpg', 'assets/bg4.jpg'];
        let currentImageIndex = 0;

        if (hamburger && navLinks) {
            hamburger.addEventListener("click", function() {
                navLinks.classList.toggle("active");
            });
        }

        function changeBackground() {
            hero.style.backgroundImage = `url(${images[currentImageIndex]})`;
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }

        setInterval(changeBackground, 5000);
        changeBackground(); 
    });

