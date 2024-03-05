const ctx = document.getElementById('myChart').getContext('2d');
let dates = [];
let weights = [];
let targetWeights = []; // Declared as an array
let myChart;

document.addEventListener('DOMContentLoaded', function() {
  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
          label: 'Body Weight',
          data: weights,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        },
        {
          label: 'Target Weight',
          data: targetWeights, // Use the targetWeights array here
          backgroundColor: 'rgba(154, 62, 135, 0.2)',
          borderColor: 'rgba(154, 62, 135, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});

function addData() {
  const date = document.getElementById('date').value;
  const weight = document.getElementById('weight').value;
  const targetWeight = document.getElementById('targetWeight').value;
  
  dates.push(date);
  weights.push(weight);
  targetWeights.push(targetWeight); // Push targetWeight value to targetWeights array
  
  myChart.update();
}
