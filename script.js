// 1. Animation au scroll
const revealElements = document.querySelectorAll(".reveal");

const scrollReveal = () => {
  const triggerBottom = window.innerHeight * 0.9;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
};

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

// 2. Bouton retour en haut
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "⬆️";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 3. Lien actif dans la navbar
document.querySelectorAll('.navbar a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active-link');
  }
});
