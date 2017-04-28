const CHART = document.getElementById("LineChart");
console.log(CHART);

let LineChart = new Chart(CHART, {
	type:'line',
	data: {
    labels: ["January", "February", "March", "April", "May", "June", ],
		datasets: [
			{
				label: "Litecoin Price ($USD)",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
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
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
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
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
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
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
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
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
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
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
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
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
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




