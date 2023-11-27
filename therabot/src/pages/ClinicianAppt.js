import React from 'react';
import { Link } from 'react-router-dom';
import {ArrowLeftIcon} from '@heroicons/react/24/solid';

import Eclipse from '../components/Eclipse'

function Appointments() {
  return (
    <div className="bg-gradient-to-b from-BACKGROUND_BLUE to-white">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen">

        <Eclipse className = "bg-ECLIPSE_BLUE opacity-50"/>
        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
        <div className="text-5xl font-bold text-white z-20 pt-4 md:pt-8 relative"><Link to="/client-example" className="absolute -left-12 sm:-left-24 bottom-1 sm:bottom-2 text-white "><ArrowLeftIcon className = "h-8 w-8"/></Link>Select Appointment</div>


        
          <div className='text-3xl font-bold text-black md:pt-8 translate-y-36 -translate-x-2'>
            Upcoming Appointments:
          </div>

            <Link to="" className="w-96 translate-y-40 drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
            <button className="w-full">
                December 7, 2023 
            </button>
            </Link>
       

            {/* Previous Appointments */}
            <div className="text-3xl font-bold text-black mt-4 pt-4 md:pt-8 relative transform: translate-y-48 transform: -translate-x-4">Previous Appointments:</div>
            <div className="h-96 w-96 mt-64 overflow-y-auto flex flex-col space-y-10 mb-10 -translate-y-12">
                <Link to="/appointment-notes" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    October 31, 2023 
                    </button>
                </Link>
                <Link to="" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    September 8, 2023
                    </button>
                </Link>
                <Link to="" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    August 31, 2023
                    </button>
                </Link>
                <Link to="" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    July 18, 2023
                    </button>
                </Link>
                <Link to="" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    June 13, 2023
                    </button>
                </Link>
                <Link to="" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    May 15, 2023
                    </button>
                </Link>
                <Link to="" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    April 1, 2023
                    </button>
                </Link>
                <Link to="" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    February 5, 2023
                    </button>
                </Link>
            </div>


        
        </div>
      </div>
    </div>
  );
}

export default Appointments;
