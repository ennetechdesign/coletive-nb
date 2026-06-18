// variables
const sliders = document.querySelectorAll(".img-container");
let isDown = false;
let startX;
let scrollLeft;

sliders.forEach((slider) => {
  slider.addEventListener("mousedown", (e) => {
    isDown = true;

    // perform horizontal movement
    scrollLeft = slider.scrollLeft;
    startX = e.pageX - slider.offsetLeft;

    slider.style.cursor = "grabbing";
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;

    slider.style.cursor = "grabbing";
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;

    slider.style.cursor = "grab";
  });

  slider.addEventListener("mousemove", (e) => {
    if (isDown === false) {
      // do nothing if click isn't pressed
      return;
    } else {
      // move scroll if click is pressed
      e.preventDefault();

      // perform acceleration of horizontal movement
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1;
      slider.scrollLeft = scrollLeft - walk;
    }
  });
});
