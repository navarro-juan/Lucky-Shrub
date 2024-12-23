
// event listener to look and assign element to variables hamburger and navmenu

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Ensure hamburger and navMenu exist
  if (hamburger && navMenu) {
      // Toggle mobile menu on click
      hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("active");
          navMenu.classList.toggle("active");
      });

      // Close nav when a nav link is clicked
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach(link => {
          link.addEventListener("click", (e) => {
              // Prevent default anchor behavior
              e.preventDefault();

              // Close mobile menu
              hamburger.classList.remove("active");
              navMenu.classList.remove("active");

              // Get the target section
              const targetId = link.getAttribute('href');
              const targetSection = document.querySelector(targetId);

              // Smooth scroll to the section
              if (targetSection) {
                  targetSection.scrollIntoView({
                      behavior: 'smooth'
                  });
              }
          });
      });
  }
});let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}