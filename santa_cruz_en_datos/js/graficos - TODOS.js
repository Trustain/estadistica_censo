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
    height: 300
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
              strokeWidth: 2,
              strokeDashArray: 2,
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
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
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
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
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
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
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
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
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

  var chart = new ApexCharts(document.querySelector("#demoChart"), options);
  chart.render();
