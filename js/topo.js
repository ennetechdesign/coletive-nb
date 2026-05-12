// variable
const topo = document.getElementById("topo");

// back to top of page
topo.addEventListener("click", function () {
  window.scrollTo(0, 0);
  document.getElementsByTagName("a")[7].focus();
});

// hide btn
document.addEventListener("scroll", ocultar);

// hide btn function
function ocultar() {
  if (innerWidth <= 1200 && innerWidth < innerHeight) { // portrait mobile
    if (window.scrollY > 7000) {
      topo.style.display = "flex";
    } else {
      topo.style.display = "none";
    }
  }

  if (innerWidth <= 1200 && innerWidth > innerHeight) {
    if (window.scrollY > 5000) { // landscape mobile
      topo.style.display = "flex";
    } else {
      topo.style.display = "none";
    }

  } else { // desktop
    if (window.scrollY > 6000) {
      topo.style.display = "flex";
    } else {
      topo.style.display = "none";
    }
  }
}

ocultar();
