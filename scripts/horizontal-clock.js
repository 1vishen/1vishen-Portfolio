// logic for horizontal clock

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const sliderIndicator = document.querySelector('.slider-indicator');
    const timeSlider = document.querySelector('.time-slider');
    const modeIcon = document.querySelector('.mode-icon');

    function getCurrentTime() {
        const now = new Date();
        return now.getHours() + now.getMinutes() / 60;
    }

    function setSliderPosition(time) {
        const percentage = (time / 24) * 100;
        sliderIndicator.style.left = `calc(${percentage}% - 10px)`;
    }

    function updateModeBasedOnTime(time) {
        if (time >= 6 && time < 18) {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            modeIcon.classList.add('sun');
            modeIcon.classList.remove('moon');
        } else {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            modeIcon.classList.add('moon');
            modeIcon.classList.remove('sun');
        }
    }

    function handleSliderInteraction(event) {
        const rect = timeSlider.getBoundingClientRect();
        const xPos = event.clientX - rect.left;
        const time = Math.min(Math.max((xPos / rect.width) * 24, 0), 24);
        setSliderPosition(time);
        updateModeBasedOnTime(time);
    }

    timeSlider.addEventListener('mousedown', function (e) {
        handleSliderInteraction(e);

        function onMouseMove(event) {
            handleSliderInteraction(event);
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    timeSlider.addEventListener('click', handleSliderInteraction);

    function updateTimeAndMode() {
        const currentTime = getCurrentTime();
        setSliderPosition(currentTime);
        updateModeBasedOnTime(currentTime);
    }

    // Initial update
    updateTimeAndMode();

    // Update every minute
    setInterval(updateTimeAndMode, 60000);
});
