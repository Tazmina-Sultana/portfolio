const typingElement = document.getElementById("typing");

const typingWords = [
  "Future Software Developer",
  "Web Development Learner",
  "Problem Solver",
  "CSE Student"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typingEffect() {
  const currentWord = typingWords[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typingEffect, 1200);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % typingWords.length;
  }

  setTimeout(typingEffect, isDeleting ? 60 : 110);
}

typingEffect();

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const icon = themeToggle.querySelector("i");

  if (document.body.classList.contains("light")) {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
});

const counters = document.querySelectorAll(".counter");

function startCounters() {
  counters.forEach(counter => {
    const target = Number(counter.getAttribute("data-target"));
    let count = 0;
    const speed = target / 80;

    function updateCounter() {
      if (count < target) {
        count += speed;
        counter.textContent = Math.ceil(count);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    }

    updateCounter();
  });
}

let countersStarted = false;

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });

  const statsSection = document.querySelector(".stats");

  if (statsSection) {
    const statsTop = statsSection.getBoundingClientRect().top;

    if (statsTop < window.innerHeight && !countersStarted) {
      startCounters();
      countersStarted = true;
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
