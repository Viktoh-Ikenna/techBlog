import React, { useRef } from "react";
import "./stats.css";
import { Line } from 'react-chartjs-2';
import testUtils from "react-dom/test-utils";

export const Stats = () => {
  const ref = useRef();
  const data = canvas => {
    const ctx = canvas.getContext('2d');
    const g = ctx.createLinearGradient(0,0,100,0);
    
    return {
      labels: ['jan','feb','march','april','may','june','july'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
}

const options = ()=>{
  return{
    scales: {
        y: {
            beginAtZero: true
        }
    }
}
}
  return (
    <div style={{width:"100%",height:"30%"}}><Line ref={ref} data={data} width={100}
    height={50} options={options} /></div>

  );
};
