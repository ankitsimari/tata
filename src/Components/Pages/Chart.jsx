import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SplitChart = ({ first, second, total }) => {
  const chartRef = useRef(null);
  let myChart = useRef(null);
  let timeoutId = useRef(null);

  useEffect(() => {
    clearTimeout(timeoutId.current); 

    timeoutId.current = setTimeout(() => {
      const ctx = chartRef.current.getContext('2d');

      if (myChart.current) {
        myChart.current.destroy(); 
      }

      const a = 100; 

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
                    label += (context.parsed * 2).toFixed(2) + '%'; 
                  }

                  return label;
                },
              },
            },
          },
        },
      });
    }, 500); 
  }, [first, second, total]);

  return (
    <div className="px-5 mx-3">
      <canvas ref={chartRef} id="split-chart"></canvas>
    </div>
  );
};

export default SplitChart;
