document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("scripts").scrollIntoView({
    behavior: "smooth"
  });
});

// Example dynamic script card (future ready)
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    alert("Script preview coming soon!");
  });
});
