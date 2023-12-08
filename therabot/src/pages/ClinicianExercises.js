import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { IoSunny } from "react-icons/io5";
import { GiMeditation } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";
import Eclipse from '../components/Eclipse';

function Exercises() {
  return (
    <div className="bg-gradient-to-b from-EXERCISES_GRADIENT dark:from-amber-600 dark:to-black to-white">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen ">
        <Eclipse className="bg-EXERCISES_ECLIPSE dark:bg-amber-900 dark:opacity-90 opacity-20" />

        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
          <div className="relative text-4xl sm:text-5xl font-bold text-white z-20 pt-4 md:pt-8 ">
            <Link to="/client-example" className="absolute -left-12 sm:-left-24 bottom-1 sm:bottom-2 text-white ">
              <ArrowLeftIcon className="h-8 w-8" />
            </Link>
            Exercises
          </div>

          <div className="lg:scale-125 grid grid-cols-2 items-center ml-6 gap-x-44 sm:gap-x-48  lg:gap-x-24 md:pl-24 gap-y-16 mt-4">
          <div className="flex items-center ">
              <div className="w-24 h-24 bg-yellow-600 bg-opacity-90 rounded-full flex items-center justify-center">
              <FaRunning className='w-20 h-20'/>
              </div>
            </div>

            <div className="ml-6 flex items-center">0
              <button className=" w-64 h-24 -translate-x-40 flex items-center justify-center py-3 px-11 drop-shadow-md shadow-lg bg-BUTTON_GREY dark:bg-opacity-50 opacity-90 text-black  font-inter font-bold rounded-full">
              <p className='text-2xl'>Prescribe Cardio</p>
              </button>
            </div>

            <div className="flex items-center">
              <div className="w-24 h-24 bg-yellow-600 bg-opacity-90 rounded-full flex items-center justify-center">
              <GiMeditation className='w-20 h-20'/>
              </div>
            </div>

            <div className="ml-6 flex items-center">
              <button className="w-64 h-24 -translate-x-40 flex items-center justify-center py-3 px-10 drop-shadow-md shadow-lg bg-BUTTON_GREY dark:bg-opacity-50 opacity-90 text-black  font-inter font-bold rounded-full">
                <span className='text-2xl'>Prescribe Meditation</span>
              </button>
            </div>

            <div className="flex items-center">
              <div className="w-24 h-24 bg-yellow-600 bg-opacity-90 rounded-full flex items-center justify-center">
              <IoSunny className='w-20 h-20'/>
              </div>
            </div>

            <div className="ml-6  flex items-center">
              <button className="w-64 h-24 -translate-x-40 flex items-center justify-center py-3 px-12 drop-shadow-md shadow-lg bg-BUTTON_GREY dark:bg-opacity-50 opacity-90 text-black text-3xl font-inter font-bold rounded-full">
              <span className='text-2xl'>Prescribe Sun Time</span>
              </button>
            </div>
          </div>

          <Link to="/sensors" className="w-80 drop-shadow-md shadow-lg bg-BUTTON_GREY dark:bg-opacity-50 opacity-90 py-5 md:py-6 lg:py-8 mt-8 mb-12  text-4xl text-black font-inter font-bold rounded-full">
            <button className="w-full">
              Sensors
            </button>
          </Link>         

        </div>
      </div>
    </div>
  );
}

export default Exercises;
