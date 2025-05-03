export default class eyesLogic {
  constructor() {
    this.eyes = document.querySelectorAll(".eye");
    this.heroImage = document.getElementById("heroImage");

    const pointerMediaQuery = window.matchMedia("(pointer: fine)");
    this.updateInteraction(pointerMediaQuery);

    // Listen for changes in input method
    pointerMediaQuery.addEventListener("change", (e) => {
      this.updateInteraction(e);
    });
  }

  updateInteraction(e) {
    const hasMouse = e.matches;

    if (hasMouse) {
      this.eyes.forEach((eye) => {
        eye.classList.remove("invisible-eyes");

        eye.addEventListener("mouseenter", () => {
          this.eyes.forEach((e) => e.classList.add("no-rotate"));
        });
        eye.addEventListener("mouseleave", () => {
          this.eyes.forEach((e) => e.classList.remove("no-rotate"));
        });
      });

      document.body.addEventListener("mousemove", (e) => {
        this.eyeball(e);
      });

      this.heroImage.style.backgroundImage = "";
    } else {
      this.heroImage.style.backgroundImage =
        "url(/assets/images/me-mobile.svg)";

      this.eyes.forEach((eye) => {
        eye.classList.add("invisible-eyes");
      });

      document.body.removeEventListener("mousemove", (e) => {
        this.eyeball(e);
      });
    }
  }

  eyeball(e) {
    this.eyes.forEach((eye) => {
      const rect = eye.getBoundingClientRect();
      const eyeX = rect.left + eye.clientWidth / 2;
      const eyeY = rect.top + eye.clientHeight / 2;

      const radian = Math.atan2(e.pageY - eyeY, e.pageX - eyeX);
      const rotation = radian * (180 / Math.PI);

      eye.style.transform = `rotate(${rotation}deg)`;
    });
  }
}
