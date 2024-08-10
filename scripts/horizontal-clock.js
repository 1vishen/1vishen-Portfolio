document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const sliderIndicator = document.querySelector(".slider-indicator");
  const timeSlider = document.querySelector(".time-slider");
  const modeIcon = document.querySelector(".mode-icon");

  function getCurrentTime() {
    const now = new Date();
    return now.getHours() + now.getMinutes() / 60;
  }

  function setSliderPosition(time) {
    const indicatorWidth = 20; // Width of the slider indicator in pixels. Update if changed in CSS.
    const percentage = (time / 24) * 100;
    sliderIndicator.style.left = `calc(${percentage}% - ${
      indicatorWidth / 2
    }px)`; // indicatorWidth / 2 to get the middle of the element be where we want it to be
  }

  function updateModeBasedOnTime(time) {
    if (time >= 6 && time < 18) {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
    } else {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
    }
  }

  function handleSliderInteraction(event) {
    const rect = timeSlider.getBoundingClientRect();
    const xPos = event.clientX - rect.left;
    const time = Math.min(Math.max((xPos / rect.width) * 24, 0), 24);
    setSliderPosition(time);
    updateModeBasedOnTime(time);
  }

  timeSlider.addEventListener("click", handleSliderInteraction);

  function updateTimeAndMode() {
    const currentTime = getCurrentTime();
    setSliderPosition(currentTime);
    updateModeBasedOnTime(currentTime);
  }

  // Initial update
  updateTimeAndMode();

  // Update every 15 minute
  setInterval(updateTimeAndMode, 900000);
});
