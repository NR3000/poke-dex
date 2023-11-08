"use client"

import React from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { chart as chartjs } from 'chart.js/auto'

const data = {
    labels: ['A', 'B', 'C'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [1, 2, 3],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
        },
        {
            label: 'Dataset 2',
            data: [2, 1, 1],
            borderColor: '#FF6384',
            backgroundColor: '#FFB1C1',
        }
    ]
}

export default function page() {
    return (
        <div className="w-1/2 h-3/4">
            <Bar data={data} />
            <Line data={data} />
        </div>
    )
}
