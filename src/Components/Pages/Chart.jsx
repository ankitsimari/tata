import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SplitChart = ({ first, second, total }) => {
  const chartRef = useRef(null);
  let myChart = useRef(null);
  let timeoutId = useRef(null);

  useEffect(() => {
    clearTimeout(timeoutId.current); // Clear the previous timer if it exists

    timeoutId.current = setTimeout(() => {
      const ctx = chartRef.current.getContext('2d');

      if (myChart.current) {
        myChart.current.destroy(); // Destroy previous chart instance if it exists
      }

      const a = 100; // fixed width for the chart

      myChart.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Red', 'Orange', 'Invisible'],
          datasets: [
            {
              label: '%',
              data: [first / 2, second / 2, 50],
              backgroundColor: ['#FF0096', 'gray', 'rgba(46, 204, 113, 0)'],
              borderColor: ['rgba(255, 255, 255 ,1)', 'rgba(255, 255, 255 ,1)', 'rgba(255, 255, 255 ,0)'],
              borderWidth: 5,
            },
          ],
        },
        options: {
          cutout: '70%',
          rotation: -90,
          clip: { left: 0, top: 0, right: 0, bottom: -0.5 * a },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  let label = context.label || '';

                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed) {
                    label += (context.parsed * 2).toFixed(2) + '%'; // Displaying double the actual percentage
                  }

                  return label;
                },
              },
            },
          },
        },
      });
    }, 500); // Debounce for 0.5 seconds
  }, [first, second, total]);

  return (
    <div className="px-5 mx-3">
      <canvas ref={chartRef} id="split-chart"></canvas>
    </div>
  );
};

export default SplitChart;
