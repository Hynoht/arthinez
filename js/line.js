const CHART = document.getElementById('chartline');
const dat = {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Oût", "Septembre", "Octobre", "Novembre", "Décembre"],
    datasets: [
        {
            label: "Un exemple",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75, 192, 192, 0.4)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoveRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            data: [79, 59, 80, 25, 56, 30, 40, 89, 56, 48, 35, 70],
        }, {
            label: "Un deuxième exemple",
            fill: true,
            lineTension: 0.5,
            backgroundColor: "rgba(75, 75, 192, 0.4)",
            borderColor: "rgba(75, 72, 192, 1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,72,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoveRadius: 5,
            pointHoverBackgroundColor: "rgba(75,72,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            data: [56, 78, 12, 56, 25, 55, 40, 47, 32, 78, 22, 18],
        }
    ]
};

let lineChart = new Chart(CHART, {
    type: 'line',
    data: dat,
});