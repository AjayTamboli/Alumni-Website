function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const mainContent = document.querySelector('.main-content');
  const body = document.body;

  // Toggle active states
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  body.classList.toggle('menu-active');

  // Adjust the main content's margin-top dynamically based on nav-links height
  if (navLinks.classList.contains('active')) {
    const navHeight = navLinks.offsetHeight; // Get height of nav-links
    mainContent.style.marginTop = `${navHeight}px`; // Push content below nav-links
  } else {
    mainContent.style.marginTop = '0'; // Reset content position
  }
}

// Handle dropdowns (if any)
document.querySelectorAll('.nav-item .nav-link').forEach((item) => {
  item.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) { // Allow on mobile only
      e.preventDefault();
      const parent = item.parentElement;
      parent.classList.toggle('active');
    }
  });
});
// JavaScript for Image Slider

// Select all slides
const slides = document.querySelectorAll('.slider .slide');
let currentSlide = 0;

// Function to show the current slide and hide others
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
    showSlide(currentSlide);
}

// Function to go to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to the last slide
    showSlide(currentSlide);
}

// Automatically change slides every 3 seconds
let autoSlideInterval = setInterval(nextSlide, 3000);

// Restart auto-slide after manual navigation
function restartAutoSlide() {
    clearInterval(autoSlideInterval); // Stop current auto-slide
    autoSlideInterval = setInterval(nextSlide, 3000); // Restart auto-slide
}

// Event listener for manual slide navigation
document.querySelector('#nextButton').addEventListener('click', () => {
    nextSlide(); // Move to the next slide
    restartAutoSlide(); // Restart auto-slide
});

document.querySelector('#prevButton').addEventListener('click', () => {
    prevSlide(); // Move to the previous slide
    restartAutoSlide(); // Restart auto-slide
});

// Initial display of the first slide
showSlide(currentSlide);





