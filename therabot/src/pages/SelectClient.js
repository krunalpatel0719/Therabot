import React from 'react';
import { Link } from 'react-router-dom';
import {ArrowLeftIcon} from '@heroicons/react/24/solid';

import Eclipse from '../components/Eclipse'

function SelectClient() {
  return (
    <div className="bg-gradient-to-b from-NOTIFICATIONS_GRADIENT dark:from-[#669271] to-white dark:to-[#0b3f25]">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen">

        <Eclipse className = "bg-NOTIFICATIONS_ECLIPSE dark:bg-[#246144] dark:opacity-60 opacity-20 "/>
        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
        <div className="text-5xl font-bold text-white z-20 pt-4 md:pt-8 relative"><Link to="/clinician-home" className="absolute -left-12 sm:-left-24 bottom-1 sm:bottom-2 text-white "><ArrowLeftIcon className = "h-8 w-8"/></Link>Select Client</div>

            {/* List of Buttons */}
            <div className="h-full w-96 mt-64 overflow-y-auto scrollbar-none flex flex-col space-y-10 mb-10 -translate-y-10">
                <Link to="/client-example" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY dark:bg-opacity-70 opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    John Smith 
                    </button>
                </Link>
                <Link to="/client-example" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY dark:bg-opacity-70 opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    Lebron James
                    </button>
                </Link>
                <Link to="/client-example" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY dark:bg-opacity-70 opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    Luka Doncic
                    </button>
                </Link>
                <Link to="/client-example" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY dark:bg-opacity-70 opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    Steph Curry
                    </button>
                </Link>
                <Link to="/client-example" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY dark:bg-opacity-70 opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    Nikola Jokic
                    </button>
                </Link>
                <Link to="/client-example" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY dark:bg-opacity-70 opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    Joel Embiid
                    </button>
                </Link>
                <Link to="/client-example" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY dark:bg-opacity-70 opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    Moses Moody
                    </button>
                </Link>
                <Link to="/client-example" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY dark:bg-opacity-70 opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    Bobby Portis
                    </button>
                </Link>
            </div>


        
        </div>
      </div>
    </div>
  );
}

export default SelectClient;
