const html = document.documentElement;
const prefs = window.matchMedia("(prefers-color-scheme: dark)");
const mobile_radios = document.querySelectorAll('input[name="mobile-theme"]');
const desktop_radios = document.querySelectorAll('input[name="desktop-theme"]');
const labels = document.querySelectorAll("label");

function aplicarTema(tema) {
  html.classList.toggle("dark-mode", tema === "dark");
}

function temaInicial() {
  const sistema = prefs.matches ? "dark" : "light";
  aplicarTema(sistema);

  document.querySelector(
    `input[name="mobile-theme"][value="${sistema}"]`
  ).checked = true;
  document.querySelector(
    `input[name="desktop-theme"][value="${sistema}"]`
  ).checked = true;
}

// detect changes from any of the radios
mobile_radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) aplicarTema(radio.value);
  });
});

desktop_radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) aplicarTema(radio.value);
  });
});

// change theme via keyboard
labels.forEach((label) => {
  label.addEventListener("keypress", (tecla) => {
    if (tecla.key === "Enter") {
      tecla.target.click();
      label.focus();
    }
  });
});

temaInicial();
