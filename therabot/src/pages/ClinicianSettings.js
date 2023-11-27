import React from 'react';
import { Link } from 'react-router-dom';
import {ArrowLeftIcon} from '@heroicons/react/24/solid';

import Eclipse from '../components/Eclipse'

function ClinicianSettings() {
  return (
    <div className="bg-gradient-to-b from-BACKGROUND_BLUE to-white">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen">

      <Eclipse className = "bg-ECLIPSE_BLUE opacity-50"/>
        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
        <div className="text-5xl font-bold text-white z-20 pt-4 md:pt-8 relative"><Link to="/clinician-home" className="absolute -left-12 sm:-left-24 bottom-1 sm:bottom-2 text-white "><ArrowLeftIcon className = "h-8 w-8"/></Link>Settings</div>

          <div className='flex flex-col pt-4 justify-center items-left h-screen -translate-x-16 -translate-y-32'>
          <label class="relative inline-flex items-center cursor-pointer pt-5 border-b border-black pb-12">
            <input type="checkbox" value="" class="sr-only peer"/>
            <div class="w-11 h-6 mx-3 translate-y-3 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-3xl font-inter font-bold text-gray-900 dark:text-gray-300 translate-y-3">Dark Mode</span>
            </label>

            <label class="relative inline-flex items-center cursor-pointer pt-5 border-b border-black pb-12">
            <input type="checkbox" value="" class="sr-only peer"/>
            <div class="w-11 h-6 mx-3 translate-y-3 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-3xl font-inter font-bold text-gray-900 dark:text-gray-300 translate-y-3">Notifications</span>
            </label>

            <label class="relative inline-flex items-center cursor-pointer pt-5 border-b border-black pb-12 w-96">
            <input type="checkbox" value="" class="sr-only peer"/>
            <div class="w-11 h-6 mx-3 translate-y-3 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-3xl font-inter font-bold text-gray-900 dark:text-gray-300 translate-y-3">Robot Bluetooth</span>
            </label>
            
        </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicianSettings;
