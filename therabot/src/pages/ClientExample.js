import React from 'react';
import { Link } from 'react-router-dom';

import { BiSolidDog } from "react-icons/bi";
import {ChartBarIcon}  from '@heroicons/react/24/solid'
import {ClipboardDocumentListIcon} from '@heroicons/react/24/solid'
import {CalendarDaysIcon} from '@heroicons/react/24/solid'
import {ArrowLeftIcon} from '@heroicons/react/24/solid';

import Eclipse from '../components/Eclipse'
import ButtonWithLabel from '../components/ButtonWithLabel'

function ClientHome() {
  return (
    <div className="bg-gradient-to-b from-BACKGROUND_BLUE dark:from-DARK_BACKGROUND_BLUE dark:to-black to-white">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen">

        <Eclipse className = "bg-ECLIPSE_BLUE dark:bg-DARK_ECLIPSE_BLUE opacity-50"/>
        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
        <div className="text-5xl font-bold text-white z-20 pt-4 md:pt-8 relative">John Smith<div className="relative text-4xl sm:text-5xl font-bold text-white z-20 pt-4 md:pt-8 ">
            <Link to="/select-client" className="absolute -left-12 sm:-left-24 -translate-y-4 bottom-1 sm:bottom-2 text-white "><ArrowLeftIcon className = "h-8 w-8"/></Link> 
          </div>
          </div>
          {/* 2x2 Grid of Buttons */}
          {/* get new icons */}
          <div className="grid grid-cols-2 gap-16 mt-4 pr-16 pl-16 pt-16">
            <Link to="/clinician-notes">
             <ButtonWithLabel icon=<ClipboardDocumentListIcon className="w-36 h-36"/> label="Notes" />
            </Link>
            <Link to="/clinician-exercises" className='text-center'>
              <ButtonWithLabel icon=<BiSolidDog className="w-36 h-36"/> label="Exercises & Sensors" />
            </Link>
            <Link to="/clinician-progress">
             <ButtonWithLabel icon=<ChartBarIcon className="w-36 h-36"/>label="Progress" /> {/* change icons */}
            </Link>
            <Link to="/clinician-appointment">
             <ButtonWithLabel icon=<CalendarDaysIcon className="w-36 h-36"/> label="Appointments" />
           </Link>
    
          </div>
          

          {/* Contact Therapist Button */}
          <Link to="/message-client" className="w-96 drop-shadow-md shadow-lg bg-BUTTON_GREY dark:bg-opacity-50 opacity-90 py-8 md:py-6 lg:py-8 mt-8 mb-12  text-3xl text-black font-inter  font-bold rounded-full">
            <button className="w-full">
              Message John
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ClientHome;
