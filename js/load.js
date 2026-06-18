const load = document.querySelector("#load")
const header = document.querySelector("#header")
const main = document.querySelector("#main")
const footer = document.querySelector("#footer")

window.addEventListener("load", () => {
  document.querySelector("body").style.animation = "aparecer 0.5s ease-out"
  load.style.display = "none"
  header.style.display = "flex"
  main.style.display = "block"
  footer.style.display = "flex"
})
