import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { IoSunny } from "react-icons/io5";
import { GiMeditation } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";
import Eclipse from '../components/Eclipse';
import MessageWithTime from '../components/MessageWithTime';


function Exercises({exercises}) {
  exercises.sort((a, b) => new Date(b.time) - new Date(a.time));
  return (
    <div className="bg-gradient-to-b from-EXERCISES_GRADIENT dark:from-amber-600 dark:to-black to-white">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen ">
        <Eclipse className="bg-EXERCISES_ECLIPSE dark:bg-amber-900 dark:opacity-90 opacity-20" />

        <div className="flex flex-col h-screen  items-center  z-10 relative">
          <div className="relative text-4xl sm:text-5xl font-bold text-white z-20 pt-4 md:pt-8 ">
            <Link to="/client-home" className="absolute -left-12 sm:-left-24 bottom-1 sm:bottom-2 text-white ">
              <ArrowLeftIcon className="h-8 w-8" />
            </Link>
            Exercises
          </div>
          
           
          <div className="mt-24 md:mt-36 mb-8 md:mb-12 text-3xl font-bold text-center">Prescribed Exercises</div>

<div className="md:mb-12 lg:mb-48 flex flex-col space-y-8 overflow-y-auto scrollbar-none scale-90 sm:scale-100 sm:pl-4">
  {exercises.map((notification, index) => (
    <MessageWithTime key={index} icon={notification.icon} message1={notification.message1} message2={notification.message2} time={notification.time}/>
  ))}
</div>
          <div className="flex flex-col items-center justify-center  pt-4 pb-4 lg:scale-125 ">
            <div className="mb-8 text-3xl font-bold">Preset Exercises</div>
            <div className="grid grid-cols-2 gap-4 md:gap-14 lg:gap-24">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-yellow-600 bg-opacity-90 rounded-full flex items-center justify-center">
                  <FaRunning className='w-20 h-20'/>
                </div>
                <button className="w-36 h-12 mt-4 flex items-center justify-center py-2 drop-shadow-md shadow-lg bg-BUTTON_GREY dark:bg-opacity-50 opacity-90 text-black text-xl font-inter font-bold rounded-full">
                <p className = 'text-sm'> Start Cardio </p>
                </button>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-yellow-600 bg-opacity-90 rounded-full flex items-center justify-center">
                  <GiMeditation className='w-20 h-20'/>
                </div>
                <button className="w-36 h-12 mt-4 flex items-center justify-center py-2 drop-shadow-md shadow-lg bg-BUTTON_GREY dark:bg-opacity-50 opacity-90 text-black text-xl font-inter font-bold rounded-full">
                <p className = 'text-sm'> Start Meditation </p>
                </button>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-yellow-600 bg-opacity-90 rounded-full flex items-center justify-center">
                  <IoSunny className='w-20 h-20'/>
                </div>
                <button className="w-36 h-12 mt-4 flex items-center justify-center py-2 drop-shadow-md shadow-lg bg-BUTTON_GREY dark:bg-opacity-50 opacity-90 text-black text-xl font-inter font-bold rounded-full">
                   <p className = 'text-sm'> Start Sun Exposure </p>
                </button>
              </div>
            </div>
          </div>
   

        </div>
      </div>
    </div>
  );
}

export default Exercises;
