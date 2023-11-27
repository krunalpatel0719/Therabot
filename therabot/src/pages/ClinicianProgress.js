import React from 'react';
import { Link } from 'react-router-dom';

import {ArrowLeftIcon} from '@heroicons/react/24/solid';


import Eclipse from '../components/Eclipse'

function Progress() {
  return (
    <div className="bg-gradient-to-b from-SETTINGS_GRADIENT to-white ">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen ">
        <Eclipse className = "bg-SETTINGS_ECLIPSE opacity-20 "/>
        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
          <div className="text-5xl font-bold text-white z-20 pt-4 md:pt-8 relative">John Smith Progress<div className="relative text-4xl sm:text-5xl font-bold text-white z-20 pt-4 md:pt-8 ">
            <Link to="/client-example" className="absolute -left-12 sm:-left-24 -translate-y-4 bottom-1 sm:bottom-2 text-white "><ArrowLeftIcon className = "h-8 w-8"/></Link> 
          </div>
          </div>

          {/* 2x2 Grid of Buttons */}
          {/* get new icons */}
          <div className="grid grid-cols-2 gap-24 mt-4 pr-16 pl-16 pt-16 -translate-y-52">
          <div className="flex flex-col items-center relative">
            <div className="w-40 h-40 bg-blue-500 rounded-full opacity-95 relative overflow-hidden">
              <div className="pie-slice"></div>
            </div>
            <p className="text-3xl text-black font-inter mt-4 font-bold">Sleep</p>
            <p className= "text-3x1 text-black font-inter mt-4">6/8 hours</p>
          </div>
          <div className="flex flex-col items-center relative">
            <div className="w-40 h-40 bg-blue-500 rounded-full opacity-95 relative overflow-hidden">
              <div className="pie-slice2"></div>
            </div>
            <p className="text-3xl text-black font-inter mt-4 font-bold">Mediation</p>
            <p className= "text-3x1 text-black font-inter mt-4">15/20 mins</p>
          </div>
          <div className="flex flex-col items-center relative">
            <div className="w-40 h-40 bg-blue-500 rounded-full opacity-95 relative overflow-hidden">
              <div className="pie-slice3"></div>
            </div>
            <p className="text-3xl text-black font-inter mt-4 font-bold">Cardio</p>
            <p className= "text-3x1 text-black font-inter mt-4">40 mins / 1 hr</p>
          </div>
          <div className="flex flex-col items-center relative">
            <div className="w-40 h-40 bg-blue-500 rounded-full opacity-95 relative overflow-hidden">
              <div className="pie-slice4"></div>
            </div>
            <p className="text-3xl text-black font-inter mt-4 font-bold">Breathing</p>
            <p className= "text-3x1 text-black font-inter mt-4">20/30 mins</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
