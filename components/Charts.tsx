'use client';

import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export function PieChart({ data }: { data: { name: string; value: number; color: string }[] }) {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [{
      data: data.map(item => item.value),
      backgroundColor: data.map(item => item.color),
      borderWidth: 0,
    }]
  };

  return <Pie data={chartData} />;
}

export function BarChart({ data }: { data: { name: string; value: number; fees?: number }[] }) {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Position Value',
        data: data.map(item => item.value),
        backgroundColor: '#3B82F6',
      },
      {
        label: 'Fees Earned',
        data: data.map(item => item.fees || 0),
        backgroundColor: '#8B5CF6',
      }
    ]
  };

  return <Bar data={chartData} />;
}