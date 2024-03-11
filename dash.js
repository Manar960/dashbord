const chartData = {
    data: [20, 15, 17],
  };
  
  const myChart = document.querySelector(".my-chart");
  const doughnutColors = ["#6f83ff", "#ff8bb9", "#ffb0d0"]; 
  const largestDataIndex = chartData.data.indexOf(Math.max(...chartData.data));

  new Chart(myChart, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: chartData.data,
          backgroundColor: doughnutColors, 
          borderWidth: chartData.data.map((value, index) =>
          index === largestDataIndex ? 0 : 3),
        },
      ],
    },
    options: {
      aspectRatio: 1.8,
      borderWidth: 50,
      borderRadius: 8,
      hoverBorderWidth: 0,
      cutout: 65,
      plugins: {
        legend: {
          display: false,
        },
      },
      
    },
  });

  
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }