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
    enabled: false // ❌ no mostrar etiquetas sobre las barras
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
          type: 'line',
          data: [24, 17, 20, 20, 25]
        }, {
          name: 'Deseado',
          type: 'line',
          data: [9, 9, 14, 16, 27]
        }, {
          name: 'Güer Aike',
          type: 'line',
          data: [8, 10, 16, 22, 37]
        }, {
          name: 'Lago Argentino',
          type: 'line',
          data: [24, 15, 17, 18, 23]
        }, {
          name: 'Lago Buenos Aires',
          type: 'line',
          data: [16, 16, 19, 22, 25]
        }, {
          name: 'Magallanes',
          type: 'line',
          data: [28, 31, 31, 23, 27]
        }, {
          name: 'Rio Chico',
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
        // yaxis: {
        //   title: {
        //     text: 'Cantidad de personas por cada 100',
        //   }
        // },
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
    { name: 'Corpen Aike', type: 'line', data: [24, 17, 20, 20, 25] },
    { name: 'Deseado', type: 'line', data: [9, 9, 14, 16, 27] },
    { name: 'Güer Aike', type: 'line', data: [8, 10, 16, 22, 37] },
    { name: 'Lago Argentino', type: 'line', data: [24, 15, 17, 18, 23] },
    { name: 'Lago Buenos Aires', type: 'line', data: [16, 16, 19, 22, 25] },
    { name: 'Magallanes', type: 'line', data: [28, 31, 31, 23, 27] },
    { name: 'Rio Chico', type: 'line', data: [22, 16, 23, 18, 24] }
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
    show: false // ✅ esto oculta la barra
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
chart.render().then(() => {
   const seriesToHide = [
    'Corpen Aike',
    'Deseado',
    'Güer Aike',
    'Lago Argentino',
    'Lago Buenos Aires',
    'Magallanes',
    'Rio Chico'
  ];
  seriesToHide.forEach(name => chart.highlightSeries(name));
});

const info = document.getElementById('info-leyenda');

  // 🔁 Función para reiniciar animación
  const aplicarAnimacion = () => {
    if (info) {
      info.classList.remove('info-destacada'); // 1. Quita clase
      void info.offsetWidth;                   // 2. Fuerza reflow (clave)
      info.classList.add('info-destacada');    // 3. Vuelve a aplicar clase
    }
  };

  aplicarAnimacion(); // 🔥 Primera animación al cargar

  // ⏱ Segunda animación si no interactúan en 10 segundos
  const animacionTardia = setTimeout(() => {
    if (info && info.style.display !== 'none') {
      aplicarAnimacion();
    }
  }, 10000);

  // 🧹 Cancelar si se interactúa
  chart.addEventListener('legendClick', () => {
    if (info) info.style.display = 'none';
    clearTimeout(animacionTardia);
  });

  // 🧹 Cancelar si se cierra manualmente
  const cerrarManual = document.querySelector('.btn-close');
  if (cerrarManual) {
    cerrarManual.addEventListener('click', () => {
      if (info) info.style.display = 'none';
      clearTimeout(animacionTardia);
    });
  }
/*DEMOGRAFIA*/

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