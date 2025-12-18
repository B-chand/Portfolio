// Highlight active navbar link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Skill Progress Animation
const skillFills = document.querySelectorAll(".fill");

function animateSkills() {
  const triggerBottom = window.innerHeight * 0.85;

  skillFills.forEach(fill => {
    const barTop = fill.getBoundingClientRect().top;
    if(barTop < triggerBottom){
      fill.style.width = fill.parentElement.parentElement.getAttribute("data-percentage") + "%";
    }
  });
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);
