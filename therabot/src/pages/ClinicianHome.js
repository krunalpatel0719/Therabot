import React from 'react';
import { Link } from 'react-router-dom';

import {Cog8ToothIcon}  from '@heroicons/react/24/solid'
import {BellAlertIcon} from '@heroicons/react/24/solid'

import Eclipse from '../components/Eclipse'
import ButtonWithLabel from '../components/ButtonWithLabel'

function ClientHome() {
  return (
    <div className="bg-gradient-to-b from-BACKGROUND_BLUE dark:from-DARK_BACKGROUND_BLUE dark:to-black to-white">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen">

        <Eclipse className = "bg-ECLIPSE_BLUE dark:bg-DARK_ECLIPSE_BLUE opacity-50"/>
        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
          <div className="text-5xl font-bold text-white z-20 pt-4 md:pt-8 relative">Home</div>

          <Link to="/select-client" className="w-5/6 translate-y-60 dark:bg-opacity-50 drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 mt-8 mb-12   text-3xl text-black font-inter  font-bold rounded-full">
            <button className="w-full">
              Select Client
            </button>
          </Link>
            {/* 2x2 Grid of Buttons */}
            <div className="grid grid-cols-2 translate-y-24 sm:gap-32 gap-48 mb-24 pr-16 pl-16 pt-64 my-50 scale-75 sm:scale-100">
                <Link to="/clinician-settings">
                <ButtonWithLabel icon=<Cog8ToothIcon className="w-36 h-36"/>label="Settings" />
                </Link>
                <Link to="/clinician-notifications">
                <ButtonWithLabel icon=<BellAlertIcon className="w-36 h-36"/> label="Notifications"/>
            </Link>
        
            </div>
        
        </div>
      </div>
    </div>
  );
}

export default ClientHome;
