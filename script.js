document.addEventListener("DOMContentLoaded", function () {
  // --- Audio toggle ---
  const audio = document.getElementById("myAudio");
  const playButton = document.getElementById("playButton");

  playButton.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      playButton.textContent = "Pause Audio";
    } else {
      audio.pause();
      playButton.textContent = "Play Audio";
    }
  });

  // --- Instagram in-app browser warning ---
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isInstagram = ua.includes("Instagram");
  if (isInstagram) {
    const warning = document.getElementById("insta-warning");
    if (warning) warning.style.display = "block";
  }

  // --- Active nav link on scroll ---
  const navLinks = document.querySelectorAll("nav a.nav-link");
  const sections = document.querySelectorAll("section[id]");

  function setActiveNav() {
    let currentId = "";

    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 140 && rect.bottom >= 140) {
        currentId = sec.id;
      }
    });

    navLinks.forEach((a) => {
      const hrefId = a.getAttribute("href").replace("#", "");
      a.classList.toggle("active", hrefId === currentId);
    });
  }

  window.addEventListener("scroll", setActiveNav);
  setActiveNav();
});