import React from 'react';
import { Link } from 'react-router-dom';

import { BiSolidDog } from "react-icons/bi";
import {Cog8ToothIcon}  from '@heroicons/react/24/solid'
import {ClipboardDocumentListIcon} from '@heroicons/react/24/solid'
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

          {/* 2x2 Grid of Buttons */}
          <div className="grid grid-cols-2 gap-x-48 gap-y-32 sm:gap-y-32 mt-4 pr-16 pl-16 pt-16 scale-75 sm:scale-100 dark:text-white ">
            <Link to="/notes">
             <ButtonWithLabel icon=<ClipboardDocumentListIcon className="w-36 h-36 dark:text-white "/> label="Notes" />
            </Link>
            <Link to="/exercises">
              <ButtonWithLabel icon=<BiSolidDog className="w-36 h-36 dark:text-white "/> label="Exercises" />
            </Link>
            <Link to="/settings">
             <ButtonWithLabel icon=<Cog8ToothIcon className="w-36 h-36 dark:text-white "/>label="Settings" />
            </Link>
            <Link to="/notifications">
             <ButtonWithLabel icon=<BellAlertIcon className="w-36 h-36 dark:text-white "/> label="Notifications" />
           </Link>
    
          </div>

          {/* Contact Therapist Button */}
          <Link to="/contact-therapist" className="scale-90 md:scale-100 w-full drop-shadow-md shadow-lg dark:bg-opacity-40 bg-BUTTON_GREY opacity-90  py-4 md:py-6 lg:py-8 sm:mt-8 mb-12  text-3xl text-black dark:text-white font-inter  font-bold rounded-full">
          <div >
            <button className="w-full h-full bg-transparent">
              Contact Therapist
            </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
<Link to="/contact-therapist" className="scale-90 md:scale-100 w-full drop-shadow-md shadow-lg py-4 md:py-6 lg:py-8 sm:mt-8 mb-12 text-3xl text-black dark:text-white font-inter  font-bold rounded-full">
  <div className="bg-BUTTON_GREY opacity-90 dark:bg-opacity-40 w-full h-full">
    <button className="w-full h-full bg-transparent">
      Contact Therapist
    </button>
  </div>
</Link>
export default ClientHome;
