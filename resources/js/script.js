const scheme = document.querySelector(".color-scheme");
const changeButton = document.querySelector(".scheme-changer");
const themeIcon = document.querySelector(".theme-icon");

let preferDark = window.matchMedia("(prefers-color-scheme: dark)");

function setDark() {
  scheme.href = "./resources/css/dark.style.css";
  themeIcon.src = "./resources/images/icons/sun.png";
  scheme.classList?.remove("light-theme");
  scheme.classList.add("dark-theme");
  localStorage.setItem("theme", "dark");
}

function setLight() {
  scheme.href = "./resources/css/light.style.css";
  themeIcon.src = "./resources/images/icons/moon.png";
  scheme.classList?.remove("dark-theme");
  scheme.classList.add("light-theme");
  localStorage.setItem("theme", "light");
}

if (localStorage.getItem("theme") === "dark" || preferDark.matches) {
  setDark();
} else {
  setLight();
}

changeButton.addEventListener("click", () => {
  if (scheme.classList.contains("light-theme")) {
    setDark();
  } else {
    setLight();
  }
});
