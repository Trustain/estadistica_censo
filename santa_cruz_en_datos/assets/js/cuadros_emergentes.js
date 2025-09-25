document.addEventListener("DOMContentLoaded", () => {
  let currentTooltip = null;

  // Al hacer clic en cualquier info-icon
  document.querySelectorAll(".metadato-tooltip .info-icon").forEach(icon => {
    icon.addEventListener("click", e => {
      e.stopPropagation();

      const parent = icon.closest(".metadato-tooltip");
      const text = parent.getAttribute("data-tooltip");

      // Eliminar tooltip actual si existe
      if (currentTooltip) {
        currentTooltip.remove();
        currentTooltip = null;
      }

      // Crear el nuevo tooltip
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip-flotante";
      tooltip.textContent = text;
      document.body.appendChild(tooltip);

      // Posicionarlo junto al icono
      const rect = icon.getBoundingClientRect();
      tooltip.style.top = (rect.bottom + 6) + "px";
      tooltip.style.left = (rect.left) + "px";

      currentTooltip = tooltip;
    });
  });

  // Ocultar tooltip al hacer clic fuera
  document.addEventListener("click", () => {
    if (currentTooltip) {
      currentTooltip.remove();
      currentTooltip = null;
    }
  });

  // Evitar que clic en el tooltip lo cierre (opcional)
  document.body.addEventListener("click", e => {
    if (currentTooltip && currentTooltip.contains(e.target)) {
      e.stopPropagation();
    }
  });
});
