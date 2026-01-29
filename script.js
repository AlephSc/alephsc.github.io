// 1. Smooth scroll for the hero button
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("scripts").scrollIntoView({
    behavior: "smooth"
  });
});

// 2. Intersection Observer for on-scroll animations
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