const button = document.getElementById("copy-pix");
const text = button.querySelector(".text");
const icon = button.querySelector(".icon");
const feedback = document.getElementById("copy-feedback");

const pixKey = text.textContent;

let timeoutId;

button.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(pixKey);

    clearTimeout(timeoutId);

    text.textContent = "Copiada!";
    icon.classList.replace("fa-copy", "fa-check");

    feedback.textContent = "Chave Pix copiada para a área de transferência.";

    timeoutId = setTimeout(() => {
      text.textContent = pixKey;
      icon.classList.replace("fa-check", "fa-copy");
      feedback.textContent = "";
    }, 2000);
  } catch (error) {
    console.error("Erro ao copiar a chave Pix:", error);

    text.textContent = "Erro ao copiar Pix";
    icon.classList.replace("fa-copy", "fa-xmark");
    feedback.textContent = "Erro ao copiar a chave Pix.";

    timeoutId = setTimeout(() => {
      text.textContent = pixKey;
      icon.classList.replace("fa-xmark", "fa-copy");
      feedback.textContent = "";
    }, 2000);
  }
});
