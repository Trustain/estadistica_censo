function inicializarLibro(pestanaSelector, contenedorSelector, itemSelector, hojaSelector) {
  document.querySelectorAll(pestanaSelector).forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll(pestanaSelector).forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');

      const libroId = btn.getAttribute('data-libro');
      document.querySelectorAll(contenedorSelector).forEach(libro => {
        libro.classList.add('d-none');
      });
      document.getElementById(libroId).classList.remove('d-none');
    });
  });

  document.querySelectorAll(contenedorSelector).forEach(libro => {
    const items = libro.querySelectorAll(itemSelector);
    const hojas = libro.querySelectorAll(hojaSelector);

    items.forEach(item => {
      item.addEventListener("click", () => {
        items.forEach(i => i.classList.remove("activa"));
        hojas.forEach(h => h.classList.remove("activa"));

        item.classList.add("activa");
        const idHoja = item.getAttribute("data-hoja");
        libro.querySelector("#" + idHoja).classList.add("activa");
      });
    });
  });
}
