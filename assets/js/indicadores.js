const items = document.querySelectorAll(".item-hoja");
const hojas = document.querySelectorAll(".hoja");

items.forEach(item => {
  item.addEventListener("click", () => {
    // Quitar activo de todos
    items.forEach(i => i.classList.remove("activa"));
    hojas.forEach(h => h.classList.remove("activa"));

    // Activar el seleccionado
    item.classList.add("activa");
    const idHoja = item.getAttribute("data-hoja");
    document.getElementById(idHoja).classList.add("activa");
  });
});
