export default class themToggle {
  constructor() {
    const toggleBtn = document.getElementById("themeToggleBtn");
    const root = document.documentElement;

    let storedDarkMode = localStorage.getItem("darkmode");

    const enableDarkMode = () => {
      root.setAttribute("data-theme", "dark");
      toggleBtn.setAttribute("aria-checked", "true");
      localStorage.setItem("darkmode", "enabled");
    };

    const disableDarkMode = () => {
      root.setAttribute("data-theme", "light");
      toggleBtn.setAttribute("aria-checked", "false");
      localStorage.setItem("darkmode", "disabled");
    };

    if (storedDarkMode == "enabled") {
      enableDarkMode();
    } else if (storedDarkMode == "disabled") {
      disableDarkMode();
    }

    toggleBtn.addEventListener("click", () => {
      const isDarkMode = toggleBtn.getAttribute("aria-checked") == "true";
      console.log(isDarkMode);
      if (isDarkMode) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
  }
}
