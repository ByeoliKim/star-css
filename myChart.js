let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['sample1', 'sample2', 'sample3','sample4', 'sample5', 'sample6'],
        datasets: [{
            label: '라벨명뜨겠징',
            data: [1200, 1900, 3000,1200, 1900, 3000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(0, 80, 235, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(0, 80, 235, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        // scales: {
        //     y: {
        //         beginAtZero: true
        //     }
        // }
        responsive: true
    }
});