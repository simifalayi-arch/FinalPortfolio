// Accordion behavior for Swiss design page
document.querySelectorAll(".toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    const content = toggle.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      ?.scrollIntoView({ behavior: "smooth" });
  });
});
