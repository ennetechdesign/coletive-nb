// open menu
// variables
const menu_icon = document.getElementById("menu-icon");
const modal_container = document.getElementById("modal-container");
const nav = document.querySelectorAll(".nav .menu a");

// function
menu_icon.addEventListener("click", () => {
  if ((modal_container.style.display = "none")) {
    modal_container.style.display = "block";
    modal_container.showModal();
    modal_container.setAttribute("aria-modal", "true");
  }
});

// close menu
// variaable
const backdrop = window.document.querySelector("#backdrop");

// function
if (innerWidth <= 1200) {
  backdrop.addEventListener("click", () => {
    modal_container.style.display = "none";
    modal_container.close();
    modal_container.setAttribute("aria-modal", "false");
  });

  nav.forEach((a) => {
    a.addEventListener("click", () => {
      modal_container.style.display = "none";
      modal_container.close();
      modal_container.setAttribute("aria-modal", "false");
    });
  });
}

// dropdown of desktop menu
const dropdown = document.querySelector("#dropdown");
const dropdownContent = document.querySelector("#dropdown-content");
const dropdownIcon = document.querySelector("#dropdown-icon");

// rules to show or hide dropdown
function toggleDropdown(forceClose = false) {
  const isVisible = dropdownContent.style.display === "flex";

  if (forceClose || isVisible) {
    dropdownContent.style.display = "none";
    dropdownIcon.setAttribute("aria-expanded", "false");
    dropdownIcon.style.color = "var(--yellow-200)";
  } else {
    dropdownContent.style.display = "flex";
    dropdownIcon.setAttribute("aria-expanded", "true");
    dropdownIcon.style.color = "var(--orange)";
  }
}

// open with enter ou space key
dropdownIcon.addEventListener("keydown", (tecla) => {
  if (tecla.key === "Enter" || tecla.key === " ") {
    tecla.preventDefault();
    toggleDropdown();
  } else if (tecla.key === "Escape") {
    toggleDropdown(true);
    dropdownIcon.focus();
  }
});

// open and close via mouse
dropdown.addEventListener("mouseenter", () => toggleDropdown());
dropdown.addEventListener("mouseleave", () => toggleDropdown(true));

// close dropdown if click outside
document.addEventListener("click", (e) => {
  if (!document.querySelector("#dropdown").contains(e.target)) {
    toggleDropdown(true);
  }
});

// close menu if lose focus
dropdownContent.addEventListener("focusout", () => {
  // check if new focus is out of dropdown
  setTimeout(() => {
    if (!dropdownContent.contains(document.activeElement)) {
      toggleDropdown(true);
    }
  }, 10);
});
