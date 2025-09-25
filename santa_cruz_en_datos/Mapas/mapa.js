const map = L.map('map', {
    center: [-50.1, -70.6],
    zoom: 6,
    maxBounds: [[-55, -75], [-45, -65]]
  });

  const baseMaps = {
    "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }),
    "Esri Satelital": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles © Esri'
    })
  };

  baseMaps["Esri Satelital"].addTo(map);
  L.control.layers(baseMaps).addTo(map);

  const variableColors = {
    totalpobl: ['#ffffcc', '#a1dab4', '#41b6c4', '#2c7fb8', '#253494'],
    varon:     ['#fef0d9', '#fdcc8a', '#fc8d59', '#e34a33', '#b30000'],
    mujer:     ['#fde0dd', '#fa9fb5', '#c51b8a', '#7a0177', '#49006a'],
    hogares:   ['#edf8e9', '#bae4b3', '#74c476', '#31a354', '#006d2c'],
    viviendasp:['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4'],
    viv_part_h:['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4']
  };

  const geojsonUrl = 'radios_santacruz.geojson';
  let geojsonLayer, overlayLayer;
  let primaryOpacity = parseFloat(document.getElementById('opacity-slider').value);
  let overlayOpacity = parseFloat(document.getElementById('overlay-opacity-slider').value);

  function getColor(d, variable) {
    const colors = variableColors[variable];
    const limits = getBreaks(variable);
    return d > limits[4] ? colors[4] :
           d > limits[3] ? colors[3] :
           d > limits[2] ? colors[2] :
           d > limits[1] ? colors[1] : colors[0];
  }

  function getBreaks(variable) {
    const breaks = {
      totalpobl: [50, 200, 500, 1000, 2000],
      varon: [25, 100, 250, 500, 1000],
      mujer: [25, 100, 250, 500, 1000],
      hogares: [10, 50, 100, 250, 500],
      viviendasp: [10, 50, 100, 250, 500],
      viv_part_h: [10, 50, 100, 250, 500]
    };
    return breaks[variable];
  }

  const legend = L.control({ position: 'bottomright' });
  legend.onAdd = function () {
    const div = L.DomUtil.create('div', 'info legend');
    div.innerHTML = '<strong>Variable</strong><br>';
    return div;
  };
  legend.addTo(map);

  function updateLegend(variable) {
    const div = document.querySelector('.legend');
    if (!variable || variable === 'none') {
      div.classList.remove('active');
      div.innerHTML = '';
      return;
    }
    const colors = variableColors[variable];
    const limits = getBreaks(variable);
    let labels = [];
    for (let i = 0; i < limits.length; i++) {
      labels.push('<i style="background:' + colors[i] + '"></i> ' + (i === 0 ? '≤ ' + limits[i] : limits[i - 1] + '–' + limits[i]));
    }
    div.innerHTML = '<strong>' + variable + '</strong><br>' + labels.join('<br>');
    div.classList.add('active');
  }

  function styleFeature(feature, variable, opacity) {
    return {
      fillColor: getColor(feature.properties[variable], variable),
      weight: 1,
      opacity: 1,
      color: 'white',
      fillOpacity: opacity
    };
  }

  function highlightFeature(e) {
    const layer = e.target;
    layer.setStyle({
      weight: 3,
      color: '#666',
      fillOpacity: 0.9
    });
    const props = layer.feature.properties;
    const variable = document.querySelector('#variable-list li.active')?.getAttribute('data-variable');
    let content = `<strong>${props.toponimo_i}</strong>`;
    if (variable && variable !== 'none') {
      content += `<br>${variable}: ${props[variable]}`;
    }
    const infoBox = document.getElementById('info-box');
    infoBox.innerHTML = content;
    infoBox.style.display = 'block';
  }

  function resetHighlight(e) {
    const layer = e.target;
    const variable = document.querySelector('#variable-list li.active')?.getAttribute('data-variable');
    if (variable && variable !== 'none') {
      layer.setStyle(styleFeature(layer.feature, variable, primaryOpacity));
    }
    document.getElementById('info-box').style.display = 'none';
  }

  function applyGlobalOffsetAndScale(data, metersNorth = 450, scaleFactor = 1.001) {
    const offsetLat = metersNorth / 111320;

    let sumLng = 0, sumLat = 0, count = 0;
    data.features.forEach(feature => {
      const geom = feature.geometry;
      const coords = geom.type === "Polygon" ? geom.coordinates : geom.coordinates.flat();
      coords.forEach(ring => {
        ring.forEach(([lng, lat]) => {
          sumLng += lng;
          sumLat += lat;
          count++;
        });
      });
    });

    const cx = sumLng / count;
    const cy = sumLat / count;

    function transformRing(ring) {
      return ring.map(([lng, lat]) => {
        const newLng = cx + (lng - cx) * scaleFactor;
        const newLat = cy + (lat - cy) * scaleFactor + offsetLat;
        return [newLng, newLat];
      });
    }

    data.features.forEach(feature => {
      const geom = feature.geometry;
      if (geom.type === "Polygon") {
        geom.coordinates = geom.coordinates.map(transformRing);
      } else if (geom.type === "MultiPolygon") {
        geom.coordinates = geom.coordinates.map(polygon =>
          polygon.map(transformRing)
        );
      }
    });
  }

  function updateMap(variable) {
    if (geojsonLayer) geojsonLayer.remove();
    if (!variable || variable === 'none') {
      updateLegend(null);
      return;
    }
    geojsonLayer = L.geoJSON(null, {
      style: function (feature) {
        return styleFeature(feature, variable, primaryOpacity);
      },
      onEachFeature: function (feature, layer) {
        layer.on({
          mouseover: highlightFeature,
          mouseout: resetHighlight
        });
      }
    });
    fetch(geojsonUrl)
      .then(res => res.json())
      .then(data => {
        applyGlobalOffsetAndScale(data, 450, 1.001); // ← global scale + shift north
        geojsonLayer.addData(data).addTo(map);
      });
    updateLegend(variable);
  }

  function updateOverlay(variable) {
    if (overlayLayer) overlayLayer.remove();
    if (!variable || variable === 'none') return;
    overlayLayer = L.geoJSON(null, {
      style: function (feature) {
        return styleFeature(feature, variable, overlayOpacity);
      }
    });
    fetch(geojsonUrl)
      .then(res => res.json())
      .then(data => {
        applyGlobalOffsetAndScale(data, 500, 1.001);
        overlayLayer.addData(data).addTo(map);
      });
  }

  document.querySelectorAll('#variable-list li').forEach(li => {
    li.addEventListener('click', () => {
      document.querySelectorAll('#variable-list li').forEach(el => el.classList.remove('active'));
      li.classList.add('active');
      const variable = li.getAttribute('data-variable');
      updateMap(variable);
    });
  });

  document.getElementById('overlay-variable').addEventListener('change', e => {
    const variable = e.target.value;
    updateOverlay(variable);
  });

  document.getElementById('opacity-slider').addEventListener('input', (e) => {
  primaryOpacity = parseFloat(e.target.value);
  if (geojsonLayer) {
      geojsonLayer.eachLayer(layer => {
        const variable = document.querySelector('.variable-list li.active, #extra-options li.active')?.getAttribute('data-variable');
        if (variable && variable !== 'none') {
          layer.setStyle({ fillOpacity: primaryOpacity });
        }
      });
    }
  });

  document.getElementById('overlay-opacity-slider').addEventListener('input', (e) => {
    overlayOpacity = parseFloat(e.target.value);
    const overlay = document.getElementById('overlay-variable').value;
    updateOverlay(overlay);
  });