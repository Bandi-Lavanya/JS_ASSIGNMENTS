import React from 'react';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';

const ChartComponent = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [12, 19, 3],
        backgroundColor: ['red', 'blue', 'yellow'],
      },
    ],
  };

  return <Chart type="pie" data={data} />;
};

export default ChartComponent;
