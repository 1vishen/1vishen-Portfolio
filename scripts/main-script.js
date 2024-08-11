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
