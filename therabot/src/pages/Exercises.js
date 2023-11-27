import React from 'react';
import { Link } from 'react-router-dom';

import Eclipse from '../components/Eclipse'


import {ArrowLeftIcon} from '@heroicons/react/24/solid';


function Exercises() {
  return (
    <div className="bg-gradient-to-b from-EXERCISES_GRADIENT to-white ">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen ">
        <Eclipse className = "bg-EXERCISES_ECLIPSE opacity-20 "/>
        
        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
        <div className="flex justify-center items-center relative text-4xl sm:text-5xl font-bold text-white z-20 pt-4 md:pt-8 ">
            <Link
              to="/client-home"
              className="absolute -left-12 sm:-left-20 md:-left-28 text-white"
            >
              <ArrowLeftIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
            </Link>
            <p className=" sm:text-5xl"> Exercises </p>
          </div>
      
         
        </div>
      </div>
    </div>
  );
}

export default Exercises;