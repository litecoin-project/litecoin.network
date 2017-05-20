const CHART = document.getElementById("LineChart");
console.log(CHART);

let LineChart = new Chart(CHART, {
	type:'line',
	data: {
    labels: ["January", "February", "March", "April", "May", "June", ],
		datasets: [
			{
				label: "Market Price ($USD)",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(250, 176, 143, 1)",
				borderColor: "rgba(250, 176, 143, 1)",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "rgba(250, 176, 143, 1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 3,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(255, 111, 117, 1)",
				pointHoverBorderColor: "#fff",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [4, 4, 4, 16, 56, 100],
				spanGaps: false,
			}
		]
	}
});

const BARCHART = document.getElementById("BarChart");
console.log(BARCHART);

let BarChart = new Chart(BARCHART, {
	type:'bar',
	data: {
    labels: ["January", "February", "March", "April", "May", "June", ],
		datasets: [
			{
				label: "Litecoin Price ($USD)",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(255, 111, 117, 0.8)",
				borderColor: "#fff",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor:  [ 
					"rgba(255, 243, 183, 0.8)", 
					"rgba(249, 204, 132, 0.8)", 
					"rgba(250, 176, 143, 0.8)", 
					"rgba(240, 158, 145, 0.8)", 
					"rgba(243, 129, 112, 0.8)", 
					"rgba(255, 111, 117, 0.8)",
					"rgba(211, 102, 101, 0.8)",
					"rgba(180, 100, 123, 0.8)",
					"rgba(229, 150, 214, 0.8)",
					"rgba(192, 129, 223, 0.8)",
					"rgba(234, 146, 165, 0.8)",
					"rgba(255, 144, 168, 0.8)"			
				],
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [4, 4, 4, 16, 56, 100],
				spanGaps: false,
			}
		]
	}
});

const PIECHART = document.getElementById("PieChart");
console.log(BARCHART);

let PieChart = new Chart(PIECHART, {
	type:'pie',
	data: {
    labels: ["January", "February", "March", "April", "May", "June", ],
		datasets: [
			{
				label: "Litecoin Price ($USD)",
				fill: false,
				lineTension: 0.1,
				backgroundColor:  [ 
					"rgba(255, 243, 183, 0.8)", 
					"rgba(249, 204, 132, 0.8)", 
					"rgba(250, 176, 143, 0.8)", 
					"rgba(240, 158, 145, 0.8)", 
					"rgba(243, 129, 112, 0.8)", 
					"rgba(255, 111, 117, 0.8)",
					"rgba(211, 102, 101, 0.8)",
					"rgba(180, 100, 123, 0.8)",
					"rgba(229, 150, 214, 0.8)",
					"rgba(192, 129, 223, 0.8)",
					"rgba(234, 146, 165, 0.8)",
					"rgba(255, 144, 168, 0.8)"			
				],
				borderColor: "rgba(161, 78, 104, 1)",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [4, 4, 4, 16, 56, 100],
				spanGaps: false,
			}
		]
	}
});

const RADARCHART = document.getElementById("RadarChart");
console.log(RADARCHART);

let RadarChart = new Chart(RADARCHART, {
	type:'radar',
	data: {
    labels: ["January", "February", "March", "April", "May", "June", ],
		datasets: [
			{
				label: "Litecoin Price ($USD)",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(255, 111, 117, 0.8)",
				borderColor: "rgba(255, 111, 117, 0.8)",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "rgba(161, 78, 104, 1)",
				pointBackgroundColor: "rgba(161, 78, 104, 0.8)",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: [ 
					"rgba(255, 243, 183, 0.8)", 
					"rgba(249, 204, 132, 0.8)", 
					"rgba(250, 176, 143, 0.8)", 
					"rgba(240, 158, 145, 0.8)", 
					"rgba(243, 129, 112, 0.8)", 
					"rgba(255, 111, 117, 0.8)",
					"rgba(211, 102, 101, 0.8)",
					"rgba(180, 100, 123, 0.8)",
					"rgba(229, 150, 214, 0.8)",
					"rgba(192, 129, 223, 0.8)",
					"rgba(234, 146, 165, 0.8)",
					"rgba(255, 144, 168, 0.8)"			
				],
				pointHoverBorderColor: "rgba(161, 78, 104,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [4, 4, 4, 16, 56, 100],
				spanGaps: false,
			}
		]
	}
});

const POLARCHART = document.getElementById("PolarChart");
console.log(POLARCHART);

let PolarChart = new Chart(POLARCHART, {
	type:'polarArea',
	data: {
    labels: ["January", "February", "March", "April", "May", "June", ],
		datasets: [
			{
				label: "Litecoin Price ($USD)",
				fill: false,
				lineTension: 0.1,
				backgroundColor: [ 
					"rgba(255, 243, 183, 0.8)", 
					"rgba(249, 204, 132, 0.8)", 
					"rgba(250, 176, 143, 0.8)", 
					"rgba(240, 158, 145, 0.8)", 
					"rgba(243, 129, 112, 0.8)", 
					"rgba(255, 111, 117, 0.8)",
					"rgba(211, 102, 101, 0.8)",
					"rgba(180, 100, 123, 0.8)",
					"rgba(229, 150, 214, 0.8)",
					"rgba(192, 129, 223, 0.8)",
					"rgba(234, 146, 165, 0.8)",
					"rgba(255, 144, 168, 0.8)"			
				],
				borderColor: "rgba(161, 78, 104,1)",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [4, 4, 4, 16, 56, 100],
				spanGaps: false,
			}
		]
	}
});

const DOUGHNUTCHART = document.getElementById("DoughnutChart");
console.log(DOUGHNUTCHART);

let DoughnutChart = new Chart(DOUGHNUTCHART, {
	type:'doughnut',
	data: {
    labels: ["January", "February", "March", "April", "May", "June", ],
		datasets: [
			{
				label: "Litecoin Price ($USD)",
				fill: false,
				lineTension: 0.1,
				backgroundColor: [ 
					"rgba(255, 243, 183, 0.8)", 
					"rgba(249, 204, 132, 0.8)", 
					"rgba(250, 176, 143, 0.8)", 
					"rgba(240, 158, 145, 0.8)", 
					"rgba(243, 129, 112, 0.8)", 
					"rgba(255, 111, 117, 0.8)",
					"rgba(211, 102, 101, 0.8)",
					"rgba(180, 100, 123, 0.8)",
					"rgba(229, 150, 214, 0.8)",
					"rgba(192, 129, 223, 0.8)",
					"rgba(234, 146, 165, 0.8)",
					"rgba(255, 144, 168, 0.8)"			
				],
				borderColor: "rgba(161, 78, 104,1)",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [4, 4, 4, 16, 56, 100],
				spanGaps: false,
			}
		]
	}
});

const BUBBLECHART = document.getElementById("BubbleChart");
console.log(BUBBLECHART);

let BubbleChart = new Chart(BUBBLECHART, {
	type:'bubble',
	data: {
    labels: ["January", "February", "March", "April", "May", "June", ],
		datasets: [
			{
				label: "Litecoin Price ($USD)",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(255, 111, 117, 0.8)",
				borderColor: "#fff",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [4, 4, 4, 16, 56, 100],
				spanGaps: false,
			}
		]
	}
});
