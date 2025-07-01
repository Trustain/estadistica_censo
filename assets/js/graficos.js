/*DEMOGRAFIA*/

 var options = {
  series: [
    {
      name: '2022',
      data: [
        { x: 'Corpen Aike', y: 15171, goals: [{ name: '2010', value: 11093, strokeColor: '#775DD0' }] },
        { x: 'Deseado', y: 126743, goals: [{ name: '2010', value: 107630, strokeColor: '#775DD0' }] },
        { x: 'Güer Aike', y: 137895, goals: [{ name: '2010', value: 113267, strokeColor: '#775DD0' }] },
        { x: 'Lago Argentino', y: 25586, goals: [{ name: '2010', value: 18864, strokeColor: '#775DD0' }] },
        { x: 'Lago Buenos Aires', y: 12606, goals: [{ name: '2010', value: 8750, strokeColor: '#775DD0' }] },
        { x: 'Magallanes', y: 12911, goals: [{ name: '2010', value: 9202, strokeColor: '#775DD0' }] },
        { x: 'Río Chico', y: 6314, goals: [{ name: '2010', value: 5158, strokeColor: '#775DD0' }] }
      ]
    }
  ],
  chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  colors: ['#00E396'],
  dataLabels: {
    enabled: false // ❌ No etiquetas sobre las barras
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val.toLocaleString('es-AR'); // ✅ Solo muestra el valor formateado
      }
    }
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        return value.toLocaleString('es-AR'); // ✅ Eje X con separador de miles
      }
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['2022', '2010'],
    markers: {
      fillColors: ['#00E396', '#775DD0']
    }
  }
};


var chart = new ApexCharts(document.querySelector("#poblacion"), options);
chart.render();


var options = {
  series: [
    {
      name: 'Variación %',
      data: [
        { x: 'Deseado', y: 17.76, abs: 19113 },
        { x: 'Güer Aike', y: 21.75, abs: 24628 },
        { x: 'Río Chico', y: 22.41, abs: 1156 },
        { x: 'Lago Argentino', y: 35.63, abs: 6722 },
        { x: 'Corpen Aike', y: 36.77, abs: 4078 },
        { x: 'Magallanes', y: 40.31, abs: 3709 },
        { x: 'Lago Buenos Aires', y: 44.08, abs: 3856 }
      ]
    }
  ],
  chart: {
    type: 'bar',
    height: 350 // ✅ mismo tamaño que el gráfico anterior
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '70%' // ✅ mismo ancho relativo
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, { seriesIndex, dataPointIndex, w }) {
      const abs = w.config.series[seriesIndex].data[dataPointIndex].abs;
      return abs.toLocaleString('es-AR') + ' pers.';
    },
    style: {
      fontSize: '12px',
      colors: ['#fff']
    }
  },
  tooltip: {
    y: {
      formatter: function (val, { series, seriesIndex, dataPointIndex, w }) {
        const abs = w.config.series[seriesIndex].data[dataPointIndex].abs;
        return `+${val.toFixed(2)}% (${abs.toLocaleString('es-AR')} personas)`;
      }
    }
  },
  xaxis: {
    labels: {
      formatter: function (val) {
        return Math.round(val) + ' %'; // ✅ sin decimales
      }
    },
    title: {
      text: undefined // ❌ sin título de eje
    }
  },
  colors: ['#00E396'], // ✅ mismo color que el gráfico anterior
  legend: {
    show: false
  }
};

var chart = new ApexCharts(document.querySelector("#variacion"), options);
chart.render();

/*==================================================================================*/

var options = {
          series: [{
          name: 'Santa Cruz',
          type: 'line',
          data: [10, 11, 16, 19, 30]
        }, {
          name: 'Corpen Aike',
          hidden: true,
          type: 'line',
          data: [24, 17, 20, 20, 25]
        }, {
          name: 'Deseado',
          hidden: true,
          type: 'line',
          data: [9, 9, 14, 16, 27]
        }, {
          name: 'Güer Aike',
          hidden: true,
          type: 'line',
          data: [8, 10, 16, 22, 37]
        }, {
          name: 'Lago Argentino',
          hidden: true,
          type: 'line',
          data: [24, 15, 17, 18, 23]
        }, {
          name: 'Lago Buenos Aires',
          hidden: true,
          type: 'line',
          data: [16, 16, 19, 22, 25]
        }, {
          name: 'Magallanes',
          hidden: true,
          type: 'line',
          data: [28, 31, 31, 23, 27]
        }, {
          name: 'Rio Chico',
          hidden: true,
          type: 'line',
          data: [22, 16, 23, 18, 24]
        }],
          chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        stroke: {
          width: [4, 4, 4, 4, 4, 4, 4, 4],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        
        fill: {
          opacity: [1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['1980', '1991', '2001', '2010', '2022'],
        markers: {
          size: 0
        },
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
          toolbar: {
            show: false // ✅ esto oculta la barra
          }
        },
        colors: ['#00E396', '#008FFB', '#FEB019', '#FF4560', '#775DD0', '#3F51B5', '#F86624', '#4CAF50'],
        xaxis: {
          title: {
          text: 'Censos Nacionales',
          }
        },
        legend: {
          show: true,
          position: 'bottom',
          horizontalAlign: 'center',
          floating: false,
          markers: {
            width: 12,
            height: 12
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0);
              }
              return y;
        
            }
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#indiceenvejecimiento"), options);
        chart.render();

var options = {
  series: [
    { name: 'Santa Cruz', type: 'line', data: [10, 11, 16, 19, 30] },
    { name: 'Corpen Aike', hidden: true, type: 'line', data: [24, 17, 20, 20, 25] },
    { name: 'Deseado', hidden: true, type: 'line', data: [9, 9, 14, 16, 27] },
    { name: 'Güer Aike', hidden: true, type: 'line', data: [8, 10, 16, 22, 37] },
    { name: 'Lago Argentino', hidden: true, type: 'line', data: [24, 15, 17, 18, 23] },
    { name: 'Lago Buenos Aires', hidden: true, type: 'line', data: [16, 16, 19, 22, 25] },
    { name: 'Magallanes', hidden: true, type: 'line', data: [28, 31, 31, 23, 27] },
    { name: 'Rio Chico', hidden: true, type: 'line', data: [22, 16, 23, 18, 24] }
  ],
  chart: {
    height: 350,
    type: 'line',
    stacked: false
  },
  stroke: {
    width: Array(8).fill(4),
    curve: 'smooth'
  },
  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: 'center',
    floating: false,
    markers: {
      width: 12,
      height: 12
    },
  },
  fill: {
    opacity: [1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  colors: ['#00E396', '#008FFB', '#FEB019', '#FF4560', '#775DD0', '#3F51B5', '#F86624', '#4CAF50'],
  labels: ['1980', '1991', '2001', '2010', '2022'],
  markers: {
    size: 0
  },
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
  toolbar: {
        show: false,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: true,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: true | '<img src="/static/icons/reset.png" width="20">'
        },
  }
  },
  xaxis: {
    title: {
    text: 'Censos Nacionales',
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        return typeof y !== "undefined" ? y.toFixed(0) : y;
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#indicedependenciapotencial"), options);
chart.render()

const infos = document.querySelectorAll('.info-leyenda');

const aplicarAnimacion = (elemento) => {
  elemento.classList.remove('info-destacada');
  void elemento.offsetWidth;
  elemento.classList.add('info-destacada');
};

infos.forEach(info => {
  aplicarAnimacion(info);

  const animacionTardia = setTimeout(() => {
    if (info.style.display !== 'none') {
      aplicarAnimacion(info);
    }
  }, 10000);

  // Cancelar si se hace clic en leyenda (esto debe estar dentro del contexto del gráfico)
  if (typeof chart !== 'undefined') {
    chart.addEventListener('legendClick', () => {
      info.style.display = 'none';
      clearTimeout(animacionTardia);
    });
  }

  // Cierre manual
  const cerrarManual = info.querySelector('.btn-close');
  if (cerrarManual) {
    cerrarManual.addEventListener('click', () => {
      info.style.display = 'none';
      clearTimeout(animacionTardia);
    });
  }
});

/*PIRAMIDES DE POBLACION*/

var options = {
  series: [
    {
      name: 'Hombres - Santa Cruz',
      data: [0.04, 0.1, 0.3, 0.67, 1.1, 1.74, 2.72, 3.6, 4.35, 5.1, 6.48, 8.01, 8.42, 8.67, 8.31, 7.24, 8.3, 9.14, 9.02, 6.69]
    },
    {
      name: 'Mujeres - Santa Cruz',
      data: [-0.06, -0.21, -0.49, -0.94, -1.46, -2.03, -3.01, -3.6, -4.5, -5.27, -6.46, -7.93, -8.39, -8.85, -8.28, -6.92, -7.8, -8.75, -8.64, -6.41]
    }
    
  ],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true
  },
  colors: ['#007bff', '#ff4d6d', '#5bc0de', '#ff9f9f'],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '100%',
      borderRadius: 4,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all'
    }
  },
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 768, // para tablets y móviles
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }
  ],
  stroke: {
    width: 1,
    colors: ["#fff"]
  },
  xaxis: {
    categories: ['95+','90-94','85-89', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
      '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'
    ],
    title: {
      text: 'Porcentaje'
    },
    labels: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      }
    }
  },
  tooltip: {
    shared: false,
    x: {
      formatter: function (val) {
        return val;
      }
    },
    y: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      }
    }
  },
  legend: {
    position: 'bottom',
    formatter: function(seriesName) {
    // Mapeo manual para mostrar nombres más amigables
    const nombresPersonalizados = {
      'Hombres - Santa Cruz': 'Hombres',
      'Mujeres - Santa Cruz': 'Mujeres'
    };
    return nombresPersonalizados[seriesName] || seriesName;
  }
  }
};
var chart = new ApexCharts(document.querySelector("#piramideSC"), options);
        chart.render();

var options = {
  series: [
    {
      name: 'Hombres - Corpen Aike',
      data: [0.09, 0.12, 0.4, 0.57, 0.99, 1.65, 2.29, 3.57, 3.69, 3.98, 6.11, 7.8, 9.12, 8.89, 8.63, 7.94, 7.66, 8.93, 9.68, 7.9]
    },
    {
      name: 'Mujeres - Corpen Aike',
      data: [-0.08, -0.33, -0.47, -0.74, -1.21, -1.58, -2.83, -3.29, -4.02, -4.63, -6.14, -7.19, -8.28, -9.62, -8.75, -7.73, -7.19, -9.41, -8.8, -7.7]
    }
    
  ],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true
  },
  colors: ['#007bff', '#ff4d6d', '#5bc0de', '#ff9f9f'],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '100%',
      borderRadius: 4,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all'
    }
  },
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 768, // para tablets y móviles
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }
  ],
  stroke: {
    width: 1,
    colors: ["#fff"]
  },
  xaxis: {
    categories: ['95+','90-94','85-89', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
      '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'
    ],
    title: {
      text: 'Porcentaje'
    },
    labels: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      }
    }
  },
  tooltip: {
    shared: false,
    x: {
      formatter: function (val) {
        return val;
      }
    },
    y: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      }
    }
  },
  legend: {
    position: 'bottom',
    formatter: function(seriesName) {
    // Mapeo manual para mostrar nombres más amigables
    const nombresPersonalizados = {
      'Hombres - Corpen Aike': 'Hombres',
      'Mujeres - Corpen Aike': 'Mujeres'
    };
    return nombresPersonalizados[seriesName] || seriesName;
  }
  }
};
var chart = new ApexCharts(document.querySelector("#piramideCA"), options);
chart.render();

var options = {
  series: [
    {
      name: 'Hombres - Deseado',
      data: [0.03, 0.09, 0.27, 0.6, 0.96, 1.54, 2.44, 3.42, 4.4, 5.13, 6.58, 8.06, 8.45, 8.49, 8.26, 7.38, 8.62, 9.33, 9.17, 6.8]
    },
    {
      name: 'Mujeres - Deseado',
      data: [-0.05, -0.2, -0.44, -0.86, -1.32, -1.79, -2.78, -3.5, -4.22, -5.23, -6.36, -8.12, -8.39, -8.69, -8.23, -7.11, -8.21, -8.96, -8.91, -6.61]
    }
    
  ],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true
  },
  colors: ['#007bff', '#ff4d6d', '#5bc0de', '#ff9f9f'],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '100%',
      borderRadius: 4,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all'
    }
  },
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 768, // para tablets y móviles
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }
  ],
  stroke: {
    width: 1,
    colors: ["#fff"]
  },
  xaxis: {
    categories: ['95+','90-94','85-89', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
      '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'
    ],
    title: {
      text: 'Porcentaje'
    },
    labels: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      }
    }
  },
  tooltip: {
    shared: false,
    x: {
      formatter: function (val) {
        return val;
      }
    },
    y: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      }
    }
  },
  legend: {
    position: 'bottom',
    formatter: function(seriesName) {
    // Mapeo manual para mostrar nombres más amigables
    const nombresPersonalizados = {
      'Hombres - Deseado': 'Hombres',
      'Mujeres - Deseado': 'Mujeres'
    };
    return nombresPersonalizados[seriesName] || seriesName;
  }
  }
};
var chart = new ApexCharts(document.querySelector("#piramideDeseado"), options);
chart.render();

var options = {
  series: [
    {
      name: 'Hombres - Güer Aike',
      data: [0.04, 0.11, 0.33, 0.81, 1.33, 2.05, 3.12, 3.92, 4.49, 5.29, 6.35, 7.79, 8.1, 8.79, 8.38, 7.2, 8.23, 8.87, 8.59, 6.21]
    },
    {
      name: 'Mujeres - Güer Aike',
      data: [-0.07, -0.21, -0.54, -1.11, -1.74, -2.41, -3.44, -3.92, -5.06, -5.46, -6.53, -7.67, -8.11, -8.77, -8.3, -6.83, -7.49, -8.22, -8.18, -5.95]
    }
    
  ],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true
  },
  colors: ['#007bff', '#ff4d6d', '#5bc0de', '#ff9f9f'],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '100%',
      borderRadius: 4,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all'
    }
  },
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 768, // para tablets y móviles
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }
  ],
  stroke: {
    width: 1,
    colors: ["#fff"]
  },
  xaxis: {
    categories: ['95+','90-94','85-89', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
      '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'
    ],
    title: {
      text: 'Porcentaje'
    },
    labels: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      }
    }
  },
  tooltip: {
    shared: false,
    x: {
      formatter: function (val) {
        return val;
      }
    },
    y: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      }
    }
  },
  legend: {
    position: 'bottom',
    formatter: function(seriesName) {
    // Mapeo manual para mostrar nombres más amigables
    const nombresPersonalizados = {
      'Hombres - Güer Aike': 'Hombres',
      'Mujeres - Güer Aike': 'Mujeres'
    };
    return nombresPersonalizados[seriesName] || seriesName;
  }
  }
};
var chart = new ApexCharts(document.querySelector("#piramideGA"), options);
        chart.render();


var options = {
  series: [
    {
      name: 'Hombres - Lago Argentino',
      data: [0.03, 0.09, 0.13, 0.41, 0.92, 1.45, 2.34, 3.12, 4.28, 5.04, 7.32, 9.66, 9.59, 7.83, 7.46, 6.43, 8.11, 9.41, 9.48, 6.89]
    },
    {
      name: 'Mujeres - Lago Argentino',
      data: [-0.03, -0.13, -0.33, -0.63, -1.05, -1.55, -2.54, -3.21, -3.83, -4.93, -7.32, -10, -9.9, -9.04, -7.66, -5.73, -7.9, -9.36, -8.64, -6.22]
    }
    
  ],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true
  },
  colors: ['#007bff', '#ff4d6d', '#5bc0de', '#ff9f9f'],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '100%',
      borderRadius: 4,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all'
    }
  },
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 768, // para tablets y móviles
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }
  ],
  stroke: {
    width: 1,
    colors: ["#fff"]
  },
  xaxis: {
    categories: ['95+','90-94','85-89', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
      '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'
    ],
    title: {
      text: 'Porcentaje'
    },
    labels: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      }
    }
  },
  tooltip: {
    shared: false,
    x: {
      formatter: function (val) {
        return val;
      }
    },
    y: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      }
    }
  },
  legend: {
    position: 'bottom',
    formatter: function(seriesName) {
    // Mapeo manual para mostrar nombres más amigables
    const nombresPersonalizados = {
      'Hombres - Lago Argentino': 'Hombres',
      'Mujeres - Lago Argentino': 'Mujeres'
    };
    return nombresPersonalizados[seriesName] || seriesName;
  }
  }
};
var chart = new ApexCharts(document.querySelector("#piramideLA"), options);
        chart.render();


var options = {
  series: [
    {
      name: 'Hombres - Lago Bs. As.',
      data: [0.02, 0.22, 0.38, 0.72, 0.96, 1.57, 2.69, 3.51, 4.09, 4.55, 5.9, 7.63, 8.35, 10.29, 8.56, 6.67, 7.44, 9.19, 9, 8.29]
    },
    {
      name: 'Mujeres - Lago Bs. As.',
      data: [-0.02, -0.14, -0.48, -0.77, -1.12, -1.62, -2.67, -3.09, -4.08, -5.23, -5.79, -6.61, -8.99, -9.59, -8.88, -7.19, -7.03, -9.11, -9.97, -7.62]
    }
    
  ],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true
  },
  colors: ['#007bff', '#ff4d6d', '#5bc0de', '#ff9f9f'],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '100%',
      borderRadius: 4,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all'
    }
  },
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 768, // para tablets y móviles
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }
  ],
  stroke: {
    width: 1,
    colors: ["#fff"]
  },
  xaxis: {
    categories: ['95+','90-94','85-89', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
      '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'
    ],
    title: {
      text: 'Porcentaje'
    },
    labels: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      }
    }
  },
  tooltip: {
    shared: false,
    x: {
      formatter: function (val) {
        return val;
      }
    },
    y: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      }
    }
  },
  legend: {
    position: 'bottom',
    formatter: function(seriesName) {
    // Mapeo manual para mostrar nombres más amigables
    const nombresPersonalizados = {
      'Hombres - Lago Bs. As.': 'Hombres',
      'Mujeres - Lago Bs. As.': 'Mujeres'
    };
    return nombresPersonalizados[seriesName] || seriesName;
  }
  }
};
var chart = new ApexCharts(document.querySelector("#piramideLBA"), options);
        chart.render();


var options = {
  series: [
    {
      name: 'Hombres - Magallanes',
      data: [0.02, 0.09, 0.31, 0.6, 0.83, 1.47, 2.59, 3.13, 3.95, 4.93, 6.22, 7.41, 8.2, 9.06, 9.26, 7.86, 7.8, 9.56, 9.73, 6.98]
    },
    {
      name: 'Mujeres - Magallanes',
      data: [-0.06, -0.36, -0.65, -1.06, -1.43, -2.22, -2.49, -3.23, -3.93, -5.16, -6.31, -7.18, -8.05, -8.92, -8.46, -7.32, -7.65, -9.45, -9.2, -6.87]
    }
    
  ],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true
  },
  colors: ['#007bff', '#ff4d6d', '#5bc0de', '#ff9f9f'],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '100%',
      borderRadius: 4,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all'
    }
  },
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 768, // para tablets y móviles
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }
  ],
  stroke: {
    width: 1,
    colors: ["#fff"]
  },
  xaxis: {
    categories: ['95+','90-94','85-89', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
      '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'
    ],
    title: {
      text: 'Porcentaje'
    },
    labels: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      }
    }
  },
  tooltip: {
    shared: false,
    x: {
      formatter: function (val) {
        return val;
      }
    },
    y: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      }
    }
  },
  legend: {
    position: 'bottom',
    formatter: function(seriesName) {
    // Mapeo manual para mostrar nombres más amigables
    const nombresPersonalizados = {
      'Hombres - Magallanes': 'Hombres',
      'Mujeres - Magallanes': 'Mujeres'
    };
    return nombresPersonalizados[seriesName] || seriesName;
  }
  }
};
var chart = new ApexCharts(document.querySelector("#piramideMagallanes"), options);
        chart.render();


var options = {
  series: [
    {
      name: 'Hombres - Rio Chico',
      data: [0.1, 0.03, 0.42, 0.61, 1.13, 1.29, 2.73, 3.15, 3.6, 5.11, 6.47, 7.69, 8.91, 8.52, 8.01, 6.98, 8.23, 9.65, 10.16, 7.2]
    },
    {
      name: 'Mujeres - Rio Chico',
      data: [-0.03, -0.22, -0.59, -0.56, -1, -1.81, -2.5, -2.72, -3.85, -4.85, -5.91, -7.26, -8.1, -9.64, -8.54, -6.66, -9.29, -9.89, -9.48, -7.07]
    }
    
  ],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true
  },
  colors: ['#007bff', '#ff4d6d', '#5bc0de', '#ff9f9f'],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '100%',
      borderRadius: 4,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all'
    }
  },
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 768, // para tablets y móviles
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }
  ],
  stroke: {
    width: 1,
    colors: ["#fff"]
  },
  xaxis: {
    categories: ['95+','90-94','85-89', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
      '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'
    ],
    title: {
      text: 'Porcentaje'
    },
    labels: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      }
    }
  },
  tooltip: {
    shared: false,
    x: {
      formatter: function (val) {
        return val;
      }
    },
    y: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      }
    }
  },
  legend: {
    position: 'bottom',
    formatter: function(seriesName) {
    // Mapeo manual para mostrar nombres más amigables
    const nombresPersonalizados = {
      'Hombres - Rio Chico': 'Hombres',
      'Mujeres - Rio Chico': 'Mujeres'
    };
    return nombresPersonalizados[seriesName] || seriesName;
  }
  }
};
var chart = new ApexCharts(document.querySelector("#piramideRC"), options);
        chart.render();

/*EDAD MEDIANA*/
  var options = {
    series: [
      {
        name: 'Total de población',
        data: [31, 29, 30, 32, 31, 30, 29, 29]
      },
      {
        name: 'Mujer/Femenino', hidden: true,
        data: [31, 30, 31, 32, 32, 30, 30, 29]
      },
      {
        name: 'Varón/Masculino', hidden: true,
        data: [30, 29, 30, 31, 31, 30, 29, 29]
      }
    ],
    chart: {
      height: 350,
      type: 'bar',
      stacked: false
    },
    plotOptions: {
      bar: {
        columnWidth: '70%'
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#FFF']
      },
      formatter: function (val) {
        return val.toFixed(0);
      }
    },
    fill: {
      opacity: 1
    },
    labels: [
      'Santa Cruz', 'Corpen Aike', 'Deseado', 'Güer Aike',
      'Lago Argentino', 'Lago Bs. As.', 'Magallanes', 'Río Chico'
    ],
    markers: {
      size: 0
    },
    xaxis: {
      type: 'category',
      labels: {
        style: {
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '12px'
        }
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      title: {
        text: 'Edad'
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " años";
          }
          return y;
        }
      }
    },
    colors: ['#008FFB','#4CAF50', '#FEB019'] // opcionalmente coherente con los otros gráficos
  };

  var chart = new ApexCharts(document.querySelector("#edad_mediana"), options);
  chart.render();
    
/*DEMOGRAFIA*/

/*=============================   SALUD    ==========================================================================================*/
  var options = {
    chart: {
      type: 'bar',
      stacked: true,
      height: 350
    },
    series: [
      {
        name: "Tiene obra social o prepaga (incluye PAMI)",
        data: [74.1, 78.4, 70.8, 76.7, 68.9, 78.7, 77.9, 79.9]
      },
      {
        name: "Tiene programas o planes estatales de salud",
        data: [8.9, 7.3, 9.7, 8.1, 13.3, 6.8, 7.3, 4.2]
      },
      {
        name: "No tiene obra social, prepaga ni plan estatal",
        data: [17.0, 14.3, 19.5, 15.2, 17.8, 14.5, 14.8, 15.9]
      }
    ],
    xaxis: {
      max: 100,
      labels: {
        formatter: function (val) {
          return parseInt(val) + "%";
        }
      },
      categories: [
        "Santa Cruz", "Corpen Aike", "Deseado", "Güer Aike",
        "Lago Argentino", "Lago Buenos Aires", "Magallanes", "Río Chico"
      ]
    },
    tooltip: {
      x: {
        show: true
      },
      y: {
        formatter: function (val) {
          return val + "%";
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    colors: ['#4CAF50', '#008FFB', '#FEB019'], // colores armónicos con #e6b800
    legend: {
      position: 'bottom'
    }
  };

  var chart = new ApexCharts(document.querySelector("#salud"), options);
  chart.render();


  var options = {
    chart: {
      type: 'bar',
      stacked: true,
      height: 350
    },
    series: [
      {
        name: "Obra social o prepaga (incluye PAMI)",
        data: [89.3, 91.5, 88.0, 90.5, 83.8, 92.1, 91.4, 95.0]
      },
      {
        name: "Programas o planes estatales de salud",
        data: [10.7, 8.5, 12.0, 9.5, 16.2, 7.9, 8.6, 5.0]
      }
    ],
    xaxis: {
      max: 100,
      labels: {
        formatter: function (val) {
          return parseInt(val) + "%";
        }
      },
      categories: [
        "Santa Cruz", "Corpen Aike", "Deseado", "Güer Aike",
        "Lago Argentino", "Lago Buenos Aires", "Magallanes", "Río Chico"
      ]
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toFixed(1) + "%";
        }
      }
    },
    colors: ['#4CAF50', '#008FFB'], // Verde y amarillo armónicos
    legend: {
      position: 'bottom'
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#FFF']
      },
      formatter: function (val) {
        return val.toFixed(1);
      }
    }
  };

  var chart = new ApexCharts(document.querySelector("#tipoCobertura"), options);
  chart.render();
/*=============================   PREVISION SOCIAL  =================================================================================*/

  var options = {
    chart: {
      type: 'bar',
      stacked: true,
      height: 350
    },
    series: [
      {
        name: "Sí percibe jubilación o pensión",
        data: [14.1, 12.6, 12.9, 15.9, 11.8, 13.2, 12.8, 13.8]
      },
      {
        name: "No percibe jubilación o pensión",
        data: [85.9, 87.4, 87.1, 84.1, 88.2, 86.8, 87.2, 86.2]
      }
    ],
    xaxis: {
      max: 100,
      labels: {
        formatter: function (val) {
          return parseInt(val) + "%";
        }
      },
      categories: [
        "Santa Cruz", "Corpen Aike", "Deseado", "Güer Aike",
        "Lago Argentino", "Lago Buenos Aires", "Magallanes", "Río Chico"
      ]
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toFixed(1) + "%";
        }
      }
    },
    colors: ['#775DD0', '#00E396'],
    legend: {
      position: 'bottom'
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#FFF']
      },
      formatter: function (val) {
        return val.toFixed(1);
      }
    }
  };

  var chart = new ApexCharts(document.querySelector("#percepcion_Prevision"), options);
  chart.render();

var options = {
    chart: {
      type: 'bar',
      stacked: true,
      height: 350
    },
    series: [
      {
        name: "Solo jubilación",
        data: [59.7, 62.3, 57.5, 62.1, 57.2, 59.5, 55.5, 53.2]
      },
      {
        name: "Solo pensión por fallecimiento",
        data: [10.6, 11.8, 11.8, 9.9, 8.0, 11.6, 8.5, 15.2]
      },
      {
        name: "Jubilación y pensión por fallecimiento",
        data: [9.2, 9.2, 9.4, 9.0, 8.1, 8.2, 12.5, 11.0]
      },
      {
        name: "Solo pensión de otro tipo",
        data: [20.4, 16.8, 21.4, 18.9, 26.7, 20.6, 23.5, 20.6]
      }
    ],
    xaxis: {
      max: 100,
      labels: {
        formatter: function (val) {
          return parseInt(val) + "%";
        }
      },
      categories: [
        "Santa Cruz", "Corpen Aike", "Deseado", "Güer Aike",
        "Lago Argentino", "Lago Buenos Aires", "Magallanes", "Río Chico"
      ]
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toFixed(1) + "%";
        }
      }
    },
    colors: ['#4CAF50', '#FEB019', '#775DD0', '#008FFB'],
    legend: {
      position: 'bottom'
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#FFF']
      },
      formatter: function (val) {
        return val.toFixed(1);
      }
    }
  };

  var chart = new ApexCharts(document.querySelector("#TipoBeneficio"), options);
  chart.render();

  /* ========================== VIVIENDAS ==================================*/
  var options = {
    chart: {
      type: 'bar',
      stacked: true,
      height: 350
    },
    series: [
      {
        name: "Hay personas presentes",
        data: [87.5, 88.6, 88.4, 87.8, 85.5, 85.2, 84.7, 83.9]
      },
      {
        name: "No hay personas presentes",
        data: [12.5, 11.4, 11.6, 12.2, 14.5, 14.8, 15.3, 16.1]
      }
    ],
    xaxis: {
      max: 100,
      labels: {
        formatter: function (val) {
          return parseInt(val) + "%"; // sin decimales ni símbolo
        }
      },
      categories: [
        "Santa Cruz", "Corpen Aike", "Deseado", "Güer Aike",
        "Lago Argentino", "Lago Buenos Aires", "Magallanes", "Río Chico"
      ]
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toFixed(1) + "%";
        }
      }
    },
    colors: ['#D9831F', '#BF6B30'],
    legend: {
      position: 'bottom'
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#FFF']
      },
      formatter: function (val) {
        return val.toFixed(1).replace(".0", ""); // sin símbolo de %
      }
    }
  };

  var chart = new ApexCharts(document.querySelector("#Vivienda_ocupacion"), options);
  chart.render();

var options = {
    chart: {
      type: 'bar',
      stacked: true,
      height: 350
    },
    series: [
      {
        name: "Viviendas particulares",
        data: [134840, 6197, 49464, 54818, 11008, 5349, 5376, 2628]
      },
      {
        name: "Viviendas colectivas",
        data: [170, 11, 27, 43, 65, 6, 9, 9]
      }
    ],
    xaxis: {
      title: {
        text: 'Cantidad de viviendas'
      },
      labels: {
        formatter: function (val) {
          return parseInt(val).toLocaleString('es-AR');
        }
      },
      categories: [
        "Santa Cruz", "Corpen Aike", "Deseado", "Güer Aike",
        "Lago Argentino", "Lago Buenos Aires", "Magallanes", "Río Chico"
      ]
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toLocaleString('es-AR') + " viviendas";
        }
      }
    },
    colors: ['#D9831F', '#BF6B30'],
    legend: {
      position: 'bottom'
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#FFF']
      },
      formatter: function (val) {
        return val.toLocaleString('es-AR');
      }
    }
  };

  var chart = new ApexCharts(document.querySelector("#TipoVivienda"), options);
  chart.render();

var options = {
    chart: {
      type: 'bar',
      height: 350
    },
    series: [{
      name: "Porcentaje de viviendas colectivas",
      data: [0.13, 0.18, 0.05, 0.08, 0.59, 0.11, 0.17, 0.34]
    }],
    xaxis: {
      categories: [
        "Santa Cruz", "Corpen Aike", "Deseado", "Güer Aike",
        "Lago Argentino", "Lago Buenos Aires", "Magallanes", "Río Chico"
      ],
      labels: {
        formatter: function (val) {
          return val.toFixed(1).replace(".0", "") + "%";
        }
      },
      max: 0.6, // para ajustar visualmente (1% como máximo)
    },
    yaxis: {
      categories: [
        "Santa Cruz", "Corpen Aike", "Deseado", "Güer Aike",
        "Lago Argentino", "Lago Buenos Aires", "Magallanes", "Río Chico"
      ]
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '60%'
      }
    },
    tooltip: {
      x: {
        show: true
      },
      y: {
        formatter: function (val) {
          return val.toFixed(2) + "%";
        }
      }
    },
    colors: ['#C26A34'],
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#FFF']
      },
      formatter: function (val) {
        return val.toFixed(2).replace('.', ','); // estilo local, sin %
      }
    },
    legend: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#ViviendasColectivas"), options);
  chart.render();


  var options = {
    chart: {
      type: 'bar',
      stacked: true,
      height: 350
    },
    series: [
      {
        name: "Uso temporal (vacaciones, fin de semana, segunda residencia)",
        data: [4.0, 1.4, 3.4, 3.7, 7.5, 7.9, 1.7, 3.8]
      },
      {
        name: "Uso como oficina, consultorio o comercio", hidden: true,
        data: [19.1, 13.0, 26.1, 17.0, 10.5, 12.7, 23.6, 4.5]
      },
      {
        name: "En alquiler o venta", hidden: true,
        data: [13.1, 18.1, 11.2, 13.7, 16.9, 12.1, 8.8, 15.4]
      },
      {
        name: "En construcción", hidden: true,
        data: [32.3, 38.0, 30.0, 37.0, 22.7, 20.9, 41.9, 17.0]
      },
      {
        name: "Personas ausentes temporalmente", hidden: true,
        data: [13.8, 11.9, 14.9, 11.6, 18.2, 18.2, 14.5, 11.1]
      }
    ],
    xaxis: {
      categories: [
        "Santa Cruz", "Corpen Aike", "Deseado", "Güer Aike",
        "Lago Argentino", "Lago Buenos Aires", "Magallanes", "Río Chico"
      ],
      labels: {
        formatter: function (val) {
          return parseInt(val) + "%";
        }
      }
    },
    yaxis: {
      categories: [
        "Santa Cruz", "Corpen Aike", "Deseado", "Güer Aike",
        "Lago Argentino", "Lago Buenos Aires", "Magallanes", "Río Chico"
      ]
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toFixed(1) + "%";
        }
      }
    },
    colors: ['#00E396', '#008FFB', '#FEB019', '#FF4560', '#775DD0'],
    legend: {
      position: 'bottom'
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#FFF']
      },
      formatter: function (val) {
        return val.toFixed(1).replace('.0', '');
      }
    }
  };

  var chart = new ApexCharts(document.querySelector("#ViviendasNoHabitadas"), options);
  chart.render();
  
/*TRABAJO E INGRESOS*/

/* var popCanvas = $("#popChart");
var popCanvas = document.getElementById("popChart");
var popCanvas = document.getElementById("popChart").getContext("2d");

var barChart = new Chart(popCanvas, {
    type: 'bar',
    data: {
      labels: ["China", "India", "United States", "Indonesia", "Brazil", "Pakistan", "Nigeria", "Bangladesh", "Russia", "Japan"],
      datasets: [{
        label: 'Population',
        data: [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)'
        ]
      }]
    }
  });*/


var options = {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: 'straight'
  },
  /*title: {
    text: 'Product Trends by Month',
    align: 'left'
  },*/
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  var options = {
    series: [{
    name: 'Sitio Web',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'Redes Sociales',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
    chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    width: [0, 4]
  },
  /*fill: {
    type: 'gradient',
  },*/
  /*title: {
    text: 'Traffic Sources'
  },*/
  dataLabels: {
    enabled: true,
    enabledOnSeries: [0]
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'datetime'
  },
  yaxis: [{
    title: {
      text: 'Sitio Web',
    },
  
  }, {
    opposite: true,
    title: {
      text: 'Redes Sociales'
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#popChart"), options);
  chart.render();


var options = {
    series: [64, 32, 41],
    chart: {
    width: 210,
    height: 210,
    type: 'donut',
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270
    }
  },
  dataLabels: {
    enabled: true
  },
  /*fill: {
    type: 'gradient',
  },*/
  legend: {
    position: 'bottom',
    showForSingleSeries: true,
    customLegendItems: ['Ocupado', 'Desocupado','Inactivo'],
    /*formatter: function(val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex]
    }*/
  },
  /*legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Fin de año', 'Inicio de año'],
    markers: {
      fillColors: ['#00E396', '#775DD0']
    }
  }*/
  fill: {
    type: 'gradient',
  },
  /*title: {
    text: 'Gradient Donut with custom Start-angle'
  },*/
  responsive: [{
    breakpoint: 680,
    options: {
      chart: {
        width: 190
      },
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#pieChart"), options);
  chart.render();


  var options = {
    series: [
    {
      name: 'box',
      type: 'boxPlot',
      data: [
        {
          x: new Date('2017-01-01').getTime(),
          y: [54, 66, 69, 75, 88]
        },
        {
          x: new Date('2018-01-01').getTime(),
          y: [43, 65, 69, 76, 81]
        },
        {
          x: new Date('2019-01-01').getTime(),
          y: [31, 39, 45, 51, 59]
        },
        {
          x: new Date('2020-01-01').getTime(),
          y: [39, 46, 55, 65, 71]
        },
        {
          x: new Date('2021-01-01').getTime(),
          y: [29, 31, 35, 39, 44]
        }
      ]
    },
    {
      name: 'outliers',
      type: 'scatter',
      data: [
        {
          x: new Date('2017-01-01').getTime(),
          y: 32
        },
        {
          x: new Date('2018-01-01').getTime(),
          y: 25
        },
        {
          x: new Date('2019-01-01').getTime(),
          y: 64
        },
        {
          x: new Date('2020-01-01').getTime(),
          y: 27
        },
        {
          x: new Date('2020-01-01').getTime(),
          y: 78
        },
        {
          x: new Date('2021-01-01').getTime(),
          y: 15
        }
      ]
    }
  ],
    chart: {
    type: 'boxPlot',
    height: '100%',
  width: '100%'
  },
  colors: ['#008FFB', '#FEB019'],
  /*title: {
    text: 'BoxPlot - Scatter Chart',
    align: 'left'
  },*/
  xaxis: {
    type: 'datetime',
    tooltip: {
      formatter: function(val) {
        return new Date(val).getFullYear()
      }
    }
  },
  /*fill: {
    type: 'gradient',
  },*/
  tooltip: {
    shared: false,
    intersect: true
  }
  };

  var chart = new ApexCharts(document.querySelector("#boxChart"), options);
  chart.render();

/*TASA DE DESOCUPACION - SANTA CRUZ Y NACIONAL*/
  var options = {
    series: [
    {
      name: 'Santa Cruz',
      data: [
        {
          x: '2016',
          y: 3.8,
          goals: [
            {
              name: 'Nacional',
              value: 7.7,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2017',
          y: 6.6,
          goals: [
            {
              name: 'Nacional',
              value: 7.6,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2018',
          y: 5.2,
          goals: [
            {
              name: 'Nacional',
              value: 8.9,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2019',
          y: 9.1,
          goals: [
            {
              name: 'Nacional',
              value: 9.2,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2020',
          y: 2.9,
          goals: [
            {
              name: 'Nacional',
              value: 11.4,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2021',
          y: 5.0,
          goals: [
            {
              name: 'Nacional',
              value: 7.9,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2022',
          y: 5.1,
          goals: [
            {
              name: 'Nacional',
              value: 6.7,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        }
      ]
    }
  ],
    chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  colors: ['#00E396'],
  dataLabels: {
    formatter: function(val, opt) {
      const goals =
        opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
          .goals
  
      if (goals && goals.length) {
        return `${val} / ${goals[0].value}`
      }
      return val
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Santa Cruz', 'Total Nacional Urbano'],
    markers: {
      fillColors: ['#00E396', '#775DD0']
    }
  }
  
  };

  var chart = new ApexCharts(document.querySelector("#desocupadosChart"), options);
  chart.render();

  /*TASA DE DESOCUPACION - SANTA CRUZ*/
  var options = {
    series: [
    {
      name: 'Santa Cruz',
      data: [
        {
          x: '2016',
          y: 3.8,
        },
        {
          x: '2017',
          y: 6.6,
        },
        {
          x: '2018',
          y: 5.2,
        },
        {
          x: '2019',
          y: 9.1,
        },
        {
          x: '2020',
          y: 2.9,
        },
        {
          x: '2021',
          y: 5.0,
        },
        {
          x: '2022',
          y: 5.1,
        }
      ]
    }
  ],
    chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  colors: ['#00E396'],
  dataLabels: {
    formatter: function(val, opt) {
      const goals =
        opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
          .goals
  
      if (goals && goals.length) {
        return `${val} / ${goals[0].value}`
      }
      return val
    }
  },
  legend: {
    show: false,
    showForSingleSeries: true,
    customLegendItems: ['Santa Cruz'],
    markers: {
      fillColors: ['#00E396', '#775DD0']
    }
  }
  
  };

  var chart = new ApexCharts(document.querySelector("#desocupadosChart_SC"), options);
  chart.render();

/*TASA DE OCUPACION DEMANDANTE DE EMPLEO - SANTA CRUZ NACIONAL*/
  var options = {
    series: [
    {
      name: 'Santa Cruz',
      data: [
        {
          x: '2016',
          y: 7.7,
          goals: [
            {
              name: 'Nacional',
              value: 14.0,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2017',
          y: 6.7,
          goals: [
            {
              name: 'Nacional',
              value: 15.2,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2018',
          y: 12.9,
          goals: [
            {
              name: 'Nacional',
              value: 16.4,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2019',
          y: 12.4,
          goals: [
            {
              name: 'Nacional',
              value: 18.5,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2020',
          y: 4.8,
          goals: [
            {
              name: 'Nacional',
              value: 15.4,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2021',
          y: 14.5,
          goals: [
            {
              name: 'Nacional',
              value: 16.5,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2022',
          y: 15.0,
          goals: [
            {
              name: 'Nacional',
              value: 15.8,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        }
      ]
    }
  ],
    chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  colors: ['#00E396'],
  dataLabels: {
    formatter: function(val, opt) {
      const goals =
        opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
          .goals
  
      if (goals && goals.length) {
        return `${val} / ${goals[0].value}`
      }
      return val
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Santa Cruz', 'Total Nacional Urbano'],
    markers: {
      fillColors: ['#00E396', '#775DD0']
    }
  }
  
  };

  var chart = new ApexCharts(document.querySelector("#ocupados_demandantes_Chart"), options);
  chart.render();

/*TASA DE OCUPACION DEMANDANTE DE EMPLEO - SANTA CRUZ*/
var options = {
  series: [
  {
    name: 'Santa Cruz',
    data: [
      {
        x: '2016',
        y: 7.7,
      },
      {
        x: '2017',
        y: 6.7,
      },
      {
        x: '2018',
        y: 12.9,
      },
      {
        x: '2019',
        y: 12.4,
      },
      {
        x: '2020',
        y: 4.8,
      },
      {
        x: '2021',
        y: 14.5,
      },
      {
        x: '2022',
        y: 15.0,
      }
    ]
  }
],
  chart: {
  height: 350,
  type: 'bar'
},
plotOptions: {
  bar: {
    horizontal: true,
  }
},
colors: ['#00E396'],
dataLabels: {
  formatter: function(val, opt) {
    const goals =
      opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
        .goals

    if (goals && goals.length) {
      return `${val} / ${goals[0].value}`
    }
    return val
  }
},
legend: {
  show: false,
  showForSingleSeries: true,
  customLegendItems: ['Santa Cruz'],
  markers: {
    fillColors: ['#00E396', '#775DD0']
  }
}

};

var chart = new ApexCharts(document.querySelector("#ocupados_demandantes_Chart_SC"), options);
chart.render();

/*TASA DE EMPLEO - SANTA CRUZ NACIONAL*/
  var options = {
    series: [
    {
      name: 'Santa Cruz',
      data: [
        {
          x: '2016',
          y: 40.7,
          goals: [
            {
              name: 'Nacional',
              value: 40.8,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2017',
          y: 39.9,
          goals: [
            {
              name: 'Nacional',
              value: 41.2,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2018',
          y: 43.0,
          goals: [
            {
              name: 'Nacional',
              value: 41.4,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2019',
          y: 40.5,
          goals: [
            {
              name: 'Nacional',
              value: 41.8,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2020',
          y: 35.9,
          goals: [
            {
              name: 'Nacional',
              value: 37.3,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2021',
          y: 40.8,
          goals: [
            {
              name: 'Nacional',
              value: 42.0,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2022',
          y: 43.7,
          goals: [
            {
              name: 'Nacional',
              value: 43.3,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        }
      ]
    }
  ],
    chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: false,
    }
  },
  colors: ['#00E396'],
  dataLabels: {
    formatter: function(val, opt) {
      const goals =
        opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
          .goals
  
      if (goals && goals.length) {
        return `${val} / ${goals[0].value}`
      }
      return val
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Santa Cruz', 'Total Nacional Urbano'],
    markers: {
      fillColors: ['#00E396', '#775DD0']
    }
  }
  
  };

  var chart = new ApexCharts(document.querySelector("#empleo_Chart"), options);
  chart.render();

  /*SUBOCUPADOS DEMANDANTES-NO DEMANDANTES - SANTA CRUZ*/
  var options = {
    series: [{
    name: 'Subocupación demandante',
    data: [3.1, 3.5, 5.5, 6.6, 1.5, 6.0, 9.0]
  }, {
    name: 'Subocupación no demandante',
    data: [1.3, 1.9, 1.3, 3.2, 1.0, 2.5, 1.5]
  }],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: true,
      borderRadius: 0,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    },
  },
  xaxis: {
    categories: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'
    ],
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Subcupación demandante', 'Subocupación no demandante'],
  },
  /*legend: {
    position: 'bottom',
    offsetY: 40
  },*/
  fill: {
    opacity: 1
  }
  };

  var chart = new ApexCharts(document.querySelector("#ocupados_demandantes_no"), options);
  chart.render();

  /*TASA DE ACTIVIDAD SANTA CRUZ - NACIONAL*/
  var options = {
    series: [
    {
      name: 'Santa Cruz',
      data: [
        {
          x: '2016',
          y: 42.3,
          goals: [
            {
              name: 'Nacional',
              value: 44.2,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2017',
          y: 42.7,
          goals: [
            {
              name: 'Nacional',
              value: 44.6,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2018',
          y: 45.3,
          goals: [
            {
              name: 'Nacional',
              value: 45.4,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2019',
          y: 44.5,
          goals: [
            {
              name: 'Nacional',
              value: 46.1,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2020',
          y: 36.9,
          goals: [
            {
              name: 'Nacional',
              value: 42.1,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2021',
          y: 42.9,
          goals: [
            {
              name: 'Nacional',
              value: 45.6,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2022',
          y: 46.0,
          goals: [
            {
              name: 'Nacional',
              value: 46.4,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        }
      ]
    }
  ],
    chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: false,
    }
  },
  colors: ['#00E396'],
  dataLabels: {
    formatter: function(val, opt) {
      const goals =
        opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
          .goals
  
      if (goals && goals.length) {
        return `${val} / ${goals[0].value}`
      }
      return val
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Santa Cruz', 'Total Nacional Urbano'],
    markers: {
      fillColors: ['#00E396', '#775DD0']
    }
  }
  
  };

  var chart = new ApexCharts(document.querySelector("#actividad_Chart"), options);
  chart.render();

  /*TASA DE ACTIVIDAD Y TASA DE EMPLEO SANTA CRUZ*/
  var options = {
    series: [
    {
      name: 'Tasa de Actividad',
      data: [
        {
          x: '2016',
          y: 42.3,
          goals: [
            {
              name: 'Tasa de Empleo',
              value: 44.2,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2017',
          y: 42.7,
          goals: [
            {
              name: 'Tasa de Empleo',
              value: 44.6,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2018',
          y: 45.3,
          goals: [
            {
              name: 'Tasa de Empleo',
              value: 45.4,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2019',
          y: 44.5,
          goals: [
            {
              name: 'Tasa de Empleo',
              value: 46.1,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2020',
          y: 36.9,
          goals: [
            {
              name: 'Tasa de Empleo',
              value: 42.1,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2021',
          y: 42.9,
          goals: [
            {
              name: 'Tasa de Empleo',
              value: 45.6,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2022',
          y: 46.0,
          goals: [
            {
              name: 'Tasa de Empleo',
              value: 46.4,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        }
      ]
    }
  ],
    chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  colors: ['#00E396'],
  dataLabels: {
    formatter: function(val, opt) {
      const goals =
        opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
          .goals
  
      if (goals && goals.length) {
        return `${val} / ${goals[0].value}`
      }
      return val
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Tasa de Actividad', 'Tasa de Empleo'],
    markers: {
      fillColors: ['#00E396', '#775DD0']
    }
  }
  
  };

  var chart = new ApexCharts(document.querySelector("#actividad_empleo_Chart"), options);
  chart.render();

    /*PEA OCUPADOS-DESOCUPADOS- SANTA CRUZ*/
    var options = {
      series: [{
      name: 'Ocupados',
      data: [129, 130, 144, 140, 127, 148, 166]
    }, {
      name: 'Desocupados',
      data: [5, 9, 7, 14, 4, 8, 9]
    }],
      chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 0,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    xaxis: {
      categories: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'
      ],
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      customLegendItems: ['Ocupados', 'Desocupados'],
    },
    /*legend: {
      position: 'bottom',
      offsetY: 40
    },*/
    fill: {
      opacity: 1
    }
    };
  
    var chart = new ApexCharts(document.querySelector("#PEA_ocupados_desocupados"), options);
    chart.render();

  /*POBLACION OCUPADA DEMANDANTE DE EMPLEO- SANTA CRUZ*/
  var options = {
    series: [
    {
      name: 'Santa Cruz',
      data: [
        {
          x: '2016',
          y: 10.3,
        },
        {
          x: '2017',
          y: 9.4,
        },
        {
          x: '2018',
          y: 19.6,
        },
        {
          x: '2019',
          y: 19.0,
        },
        {
          x: '2020',
          y: 6.0,
        },
        {
          x: '2021',
          y: 23.0,
        },
        {
          x: '2022',
          y: 26.0,
        }
      ]
    }
  ],
    chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  colors: ['#00E396'],
  dataLabels: {
    formatter: function(val, opt) {
      const goals =
        opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
          .goals
  
      if (goals && goals.length) {
        return `${val} / ${goals[0].value}`
      }
      return val
    }
  },
  legend: {
    show: false,
    showForSingleSeries: true,
    customLegendItems: ['Santa Cruz'],
    markers: {
      fillColors: ['#00E396', '#775DD0']
    }
  }
  
  };

  var chart = new ApexCharts(document.querySelector("#poblacion_ocupados_demandante_SC"), options);
  chart.render();

    /*POBLACION SUBOCUPADA - SANTA CRUZ*/
    var options = {
      series: [
      {
        name: 'Santa Cruz',
        data: [
          {
            x: '2016',
            y: 6.0,
          },
          {
            x: '2017',
            y: 7.6,
          },
          {
            x: '2018',
            y: 10.3,
          },
          {
            x: '2019',
            y: 15.0,
          },
          {
            x: '2020',
            y: 3.0,
          },
          {
            x: '2021',
            y: 13.0,
          },
          {
            x: '2022',
            y: 18.0,
          }
        ]
      }
    ],
      chart: {
      height: 350,
      type: 'bar'
    },
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    colors: ['#00E396'],
    dataLabels: {
      formatter: function(val, opt) {
        const goals =
          opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
            .goals
    
        if (goals && goals.length) {
          return `${val} / ${goals[0].value}`
        }
        return val
      }
    },
    legend: {
      show: false,
      showForSingleSeries: true,
      customLegendItems: ['Santa Cruz'],
      markers: {
        fillColors: ['#00E396', '#775DD0']
      }
    }
    
    };
  
    var chart = new ApexCharts(document.querySelector("#poblacion_subocupada_SC"), options);
    chart.render();