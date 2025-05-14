export default class themToggle {
  constructor() {
    const toggleBtn = document.getElementById("themeToggleBtn");
    const root = document.documentElement;
    const navBarImages = document.querySelectorAll('.links-container__link img');

    let storedDarkMode = localStorage.getItem("darkmode");

    const enableDarkMode = () => {
      root.setAttribute("data-theme", "dark");
      toggleBtn.setAttribute("aria-checked", "true");
      localStorage.setItem("darkmode", "enabled");
      
      Array.from(navBarImages).forEach(image => {
          const iconType = image.getAttribute('data-icon');
          if (iconType == 'home') {
            image.src = `../assets/images/home-white.svg`;
          } else if (iconType == 'about') {
            image.src = `../assets/images/info-white.svg`
          } else if (iconType == 'projects') {
            image.src = `../assets/images/projects-white.svg`
          } else {
            image.src = `../assets/images/contact-white.svg`
          }
      });

    };

    const disableDarkMode = () => {
      root.setAttribute("data-theme", "light");
      toggleBtn.setAttribute("aria-checked", "false");
      localStorage.setItem("darkmode", "disabled");

      Array.from(navBarImages).forEach(image => {
          const iconType = image.getAttribute('data-icon');
          if (iconType == 'home') {
            image.src = `../assets/images/home.svg`;
          } else if (iconType == 'about') {
            image.src = `../assets/images/about.svg`
          } else if (iconType == 'projects') {
            image.src = `../assets/images/projects.svg`
          } else {
            image.src = `../assets/images/contact.svg`
          }
      });
    };

    if (storedDarkMode == "enabled") {
      enableDarkMode();
    } else if (storedDarkMode == "disabled") {
      disableDarkMode();
    }

    toggleBtn.addEventListener("click", () => {
      const isDarkMode = toggleBtn.getAttribute("aria-checked") == "true";

      if (isDarkMode) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
  }
}
