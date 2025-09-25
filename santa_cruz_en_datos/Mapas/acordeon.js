// Selección de variable temática
document.querySelectorAll('.variable-list li').forEach(li => {
  li.addEventListener('click', () => {
    document.querySelectorAll('.variable-list li, #extra-options li').forEach(el => el.classList.remove('active'));
    li.classList.add('active');
    const variable = li.getAttribute('data-variable');
    updateMap(variable);
  });
});

// Manejo de 'Ninguna'
document.querySelectorAll('#extra-options li').forEach(li => {
  li.addEventListener('click', () => {
    document.querySelectorAll('.variable-list li, #extra-options li').forEach(el => el.classList.remove('active'));
    li.classList.add('active');
    const variable = li.getAttribute('data-variable');
    updateMap(variable);
  });
});

document.querySelector('#extra-options li[data-variable="none"]').addEventListener('click', () => {
  // Eliminar capas del mapa
  if (geojsonLayer) {
    geojsonLayer.remove();
    geojsonLayer = null;
  }
  if (overlayLayer) {
    overlayLayer.remove();
    overlayLayer = null;
  }

  // Reset variables
  currentPrimary = null;
  currentOverlay = null;

  // Limpiar iconos e indicadores
  clearIndicators();
  updateThematicHighlights();

  // Marcar visualmente esta opción
  document.querySelectorAll('.variable-list li').forEach(li => li.classList.remove('active-primary', 'active-overlay'));
  document.querySelectorAll('#extra-options li').forEach(li => li.classList.remove('active'));
  document.querySelector('#extra-options li[data-variable="none"]').classList.add('active');
});

/* ================= SELECCION DE CAPAS ================= */
let currentPrimary = null;
let currentOverlay = null;

// Mostrar/ocultar temáticas (sin limitar a una abierta)
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.classList.toggle('show');
  });
});

// Limpia íconos e indicadores de capa activa
function clearIndicators() {
  document.querySelectorAll('.variable-list li').forEach(li => {
    li.classList.remove('active-primary', 'active-overlay');
    li.querySelectorAll('.icon-indicator').forEach(icon => icon.remove());
  });
}

// Actualiza visualmente la temática (Demografía, etc.)
function updateThematicHighlights() {
  document.querySelectorAll('.accordion-item').forEach(item => {
    const header = item.querySelector('.accordion-header');
    const listItems = item.querySelectorAll('li');

    let hasActive = false;
    listItems.forEach(li => {
      if (li.classList.contains('active-primary') || li.classList.contains('active-overlay')) {
        hasActive = true;
      }
    });

    if (hasActive) {
      header.classList.add('active-thematic');
    } else {
      header.classList.remove('active-thematic');
    }
  });
}

// Agrega ícono correspondiente
function setIndicator(li, type) {
  const icon = document.createElement('span');
  icon.classList.add('icon-indicator');
  icon.textContent = type === 'primary' ? '🔘' : '🟦';
  li.appendChild(icon);
}

// Manejo de clics sobre capas
document.querySelectorAll('.variable-list li').forEach(li => {
  li.addEventListener('click', e => {
    const variable = li.getAttribute('data-variable');

    // SHIFT + clic → superposición
    if (e.shiftKey) {
      currentOverlay = variable;
      updateOverlay(variable);
    } else {
      currentPrimary = variable;
      updateMap(variable);
    }

    clearIndicators();

    // Estilos e íconos
    if (currentPrimary) {
      const liPrimary = document.querySelector(`li[data-variable="${currentPrimary}"]`);
      if (liPrimary) {
        liPrimary.classList.add('active-primary');
        setIndicator(liPrimary, 'primary');
      }
    }

    if (currentOverlay && currentOverlay !== currentPrimary) {
      const liOverlay = document.querySelector(`li[data-variable="${currentOverlay}"]`);
      if (liOverlay) {
        liOverlay.classList.add('active-overlay');
        setIndicator(liOverlay, 'overlay');
      }
    }

    updateThematicHighlights();
  });
});