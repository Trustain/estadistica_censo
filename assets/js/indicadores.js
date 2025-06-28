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

document.querySelectorAll('.pestana-libro').forEach(btn => {
  btn.addEventListener('click', () => {
    // Cambiar clase activa
    document.querySelectorAll('.pestana-libro').forEach(b => b.classList.remove('activo'));
    btn.classList.add('activo');

    // Mostrar contenido correspondiente
    const libroId = btn.getAttribute('data-libro');
    document.querySelectorAll('.libro-contenedor').forEach(libro => {
      libro.classList.add('d-none');
    });
    document.getElementById(libroId).classList.remove('d-none');
  });
});
