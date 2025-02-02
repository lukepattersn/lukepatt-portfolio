/* -------------------------------------------
   Carousel Functionality
------------------------------------------- */
const carouselSection = document.querySelector('#carousel');
if (carouselSection) {
  const carousel = carouselSection.querySelector('.carousel');
  const slides = carousel.querySelectorAll('.carousel-slide');
  let currentSlide = 0;
  const nextButton = carouselSection.querySelector('.carousel-next');
  const prevButton = carouselSection.querySelector('.carousel-prev');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  // Auto-cycle the slides every 5 seconds
  setInterval(nextSlide, 5000);
}
