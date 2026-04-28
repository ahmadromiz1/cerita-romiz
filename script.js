const navToggle = document.querySelector(".nav-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const revealElements = document.querySelectorAll(".reveal");
const yearEl = document.getElementById("year");
const typingEl = document.getElementById("typing-text");

const typingWords = [
  "Internal systems architecture",
  "ETL and reporting automation",
  "AI-assisted operational tooling",
  "Secure application delivery"
];

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const closeMenu = () => {
  if (!navToggle || !navPanel) {
    return;
  }

  navToggle.setAttribute("aria-expanded", "false");
  navPanel.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

if (navToggle && navPanel) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navPanel.classList.toggle("is-open");
    document.body.classList.toggle("menu-open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const id = entry.target.getAttribute("id");
      const activeTarget = id === "about" ? "#home" : `#${id}`;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === activeTarget);
      });
    });
  },
  {
    threshold: 0.35,
    rootMargin: "-20% 0px -35% 0px"
  }
);

sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

if (typingEl && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let wordIndex = 0;

  window.setInterval(() => {
    wordIndex = (wordIndex + 1) % typingWords.length;
    typingEl.classList.add("is-changing");

    window.setTimeout(() => {
      typingEl.textContent = typingWords[wordIndex];
      typingEl.classList.remove("is-changing");
    }, 180);
  }, 2400);
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    closeMenu();
  }
});
