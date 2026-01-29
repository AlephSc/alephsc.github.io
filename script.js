// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

  // --- SMOOTH SCROLL FOR HERO BUTTON ---
  const scrollBtn = document.getElementById("scrollBtn");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      document.getElementById("scripts").scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  // --- NAVBAR LOGIC (HAMBURGER & DROPDOWN) ---
  const hamburgerBtn = document.getElementById('hamburger-button');
  const navbarLinks = document.getElementById('navbar-links');
  const navLinks = document.querySelectorAll('.nav-link');
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownContent = document.getElementById('contactDropdown');

  // Hamburger menu toggle
  if (hamburgerBtn && navbarLinks) {
    hamburgerBtn.addEventListener('click', function () {
      hamburgerBtn.classList.toggle('is-active');
      navbarLinks.classList.toggle('is-active');
    });
  }

  // Close hamburger menu when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Check if it's not the dropdown button itself, which has its own logic
      if (!link.classList.contains('dropdown-btn')) {
        if (hamburgerBtn.classList.contains('is-active')) {
          hamburgerBtn.classList.remove('is-active');
          navbarLinks.classList.remove('is-active');
        }
      }
    });
  });

  // Contact dropdown toggle
  if (dropdownBtn && dropdownContent) {
    dropdownBtn.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default <a> tag behavior
      dropdownContent.classList.toggle('show');
    });
  }

  // Close dropdown if clicking outside
  window.addEventListener('click', function (event) {
    // Ensure the click is not on the dropdown button or inside the dropdown content
    if (dropdownContent && !dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
      if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
      }
    }
  });

});

// --- INTERSECTION OBSERVER FOR ON-SCROLL ANIMATIONS ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Stop observing once it's visible
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the element is visible
});

// Find all elements with the "hidden" class and observe them
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// --- AUTO-HIDE STICKY HEADER ---
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (lastScrollY < window.scrollY && window.scrollY > 100) {
    // Scrolling down & past a certain point
    navbar.classList.add('navbar--hidden');
  } else {
    // Scrolling up
    navbar.classList.remove('navbar--hidden');
  }

  lastScrollY = window.scrollY;
});

