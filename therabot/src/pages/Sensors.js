import React, { useState } from "react";
import { useDarkMode } from '../context/DarkModeContext'; // Adjust the path as necessary

import Eclipse from "../components/Eclipse";

import { Link } from "react-router-dom";
import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto'

function Sensors() {

const { darkMode } = useDarkMode();
const SensorDisc = ({ title, description, data }) => (
    <div className="flex justify-between items-center my-12 md:my-8">
      <div className={`flex flex-col ${darkMode ? 'text-white' : 'text-black'}`}>
        <p className="text-3xl md:text-3xl font-bold">{title}</p>
        <p className="text-sm md:text-sm opacity-90">{description}</p>
      </div>
      <div className="flex flex-col">
        <Line
          data={{
            ...data,
            datasets: [
              {
                ...data.datasets[0],
                backgroundColor: darkMode ? '#BF40BF' : '#BF40BF',
                borderColor: darkMode ? '#BF40BF' : '#BF40BF',
                pointBorderColor: '#BF40BF',
                pointHoverBackgroundColor: darkMode ? '#BF40BF' : 'rgba(75,192,192,1)',
                pointHoverBorderColor: darkMode ? '#BF40BF' : 'rgba(75,192,192,1)',
              },
            ],
          }}
          options={{
          scales: {
            x: {
              ticks: {
                color: darkMode ? 'white' : 'black',
              },
            },
            y: {
              ticks: {
                color: darkMode ? 'white' : 'black',
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              titleColor: darkMode ? 'white' : 'black',
              bodyColor: darkMode ? 'white' : 'black',
            },
          },
        }}
        />
      </div>
    </div>
  );

  const data1 = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Gas',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#BF40BF', 
        borderColor: '#702670',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(75,192,192,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [44, 50, 60, 55, 56, 55, 88]
      }
    ]
  };

  const data2 = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Air Pressure',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#702670',
        borderColor: '#702670',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [10, 15, 14, 12, 11, 14, 14]
      }
    ]
  };
  const data3 = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Temperature',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#702670',
        borderColor: '#702670',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 69, 70, 72, 70, 68, 69]
      }
    ]
  };
  const data4 = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Humidity',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#702670',
        borderColor: '#702670',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  return (
    <div className="bg-gradient-to-b from-SETTINGS_GRADIENT to-white dark:from-purple-600 dark:to-gray-900 min-h-screen">
      <div className="overflow-x-hidden relative justify-center items-center  w-screen ">
        <Eclipse className="bg-SETTINGS_ECLIPSE dark:bg-[#3f1f64] opacity-60" />
        <div className="flex flex-col items-center z-10 relative">
          <div className="flex justify-center items-center relative text-4xl sm:text-5xl font-bold text-white  z-20 pt-4 md:pt-8 ">
            <Link
              to="/clinician-exercises"
              className="absolute -left-12 sm:-left-20 md:-left-28 text-white"
            >
              <ArrowLeftIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
            </Link>
            <p className="text-5xl sm:text-5xl"> Sensors </p>
          </div>

          <div className="mt-24 w-full scale-90">
            <SensorDisc
              title="Gas Detection"
              description="Gas Has Exceeded Normal Range"
              data={data1}
            />
            <SensorDisc
              title="Air Pressure"
              description="Within Normal Range"
              data={data2}
            />
            <SensorDisc
              title="Temperature"
              description="Temperature is Below Normal Range"
              data={data3}
            />
            <SensorDisc
              title="Humidity"
              description="Within Normal Range"
              data={data4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sensors;
