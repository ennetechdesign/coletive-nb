// btn variable
const link_principal = document.querySelectorAll(".main-link");

link_principal.forEach((btn) => {
  btn.addEventListener("click", () => {
    // section variable
    const mapping_btn = document.getElementById("mapping-btn");

    // section animation
    mapping_btn.style.animation = "mapping-btn .8s ease-out .7s";

    // Remove animation
    setTimeout(() => {
      mapping_btn.style.animation = "none";
    }, 2000);
  });
});
