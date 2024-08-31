let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let isMoving = false;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active", "prev-slide", "next-slide");
        slide.style.opacity = "0.5";
        slide.style.transform = `translate(-50%, -50%) scale(0.7)`;

        if (index === currentIndex) {
            slide.classList.add("active");
            slide.style.transform = `translate(-50%, -50%) scale(1.2)`;
            slide.style.opacity = "1";
        } else if (index === (currentIndex + 1) % totalSlides) {
            slide.classList.add("next-slide");
            slide.style.transform = `translate(50%, -50%) scale(0.7)`;
        } else if (index === (currentIndex - 1 + totalSlides) % totalSlides) {
            slide.classList.add("prev-slide");
            slide.style.transform = `translate(-150%, -50%) scale(0.7)`;
        }
    });
}

function moveSlide(step) {
    if (isMoving) return; // Prevent multiple fast clicks
    isMoving = true;

    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    updateSlides();

    setTimeout(() => {
        isMoving = false; // Allow next move after transition
    }, 600); // Adjust the duration to match your CSS transition duration
}

// Initialize the slider
updateSlides();

// Attach event listeners for prev and next buttons
document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
document.querySelector(".next").addEventListener("click", () => moveSlide(1));
