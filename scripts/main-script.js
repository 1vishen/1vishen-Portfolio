// main js logic

//navbar appearance when scrolling
/* Dynamically changes navbar appearance based on scroll position by 
adding/removing the 'scrolled' class when the user scrolls past 50 pixels. */
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* Dynamically make material you imag appear based on scroll position by 
adding/removing the 'scrolled' class when the user scrolls past 50 pixels. */
// Remember: querySelectorAll() returns a NodeList, which we iterate over with forEach().
// If we used querySelector() instead, it would only select the first matching element.
// Using forEach ensures we apply the effect to all matching elements.
window.addEventListener("scroll", () => {
  const materialYouImgs = document.querySelectorAll(".material-you-img");

  if (window.scrollY > 300) {
    materialYouImgs.forEach((img) => img.classList.add("scrolled"));
  } else {
    materialYouImgs.forEach((img) => img.classList.remove("scrolled"));
  }
});

// cursor hover effect - enlarge
// cursor hover effect on horizontal clock implemented separately
const cursor = document.querySelector(".cursor");
const hoverElements = document.querySelectorAll(".hover-me");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

hoverElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-hover");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-hover");
  });
});
