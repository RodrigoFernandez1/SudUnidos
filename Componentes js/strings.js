document.querySelector(".card-button").addEventListener("click", () => {
  alert("¡Botón de la tarjeta presionado!");
});

/* nav */
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
}
