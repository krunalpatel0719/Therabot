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
    <div className="bg-gradient-to-b from-BACKGROUND_BLUE to-white">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen">

        <Eclipse className = "bg-ECLIPSE_BLUE opacity-50"/>
        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
          <div className="text-5xl font-bold text-white z-20 pt-4 md:pt-8 relative">John Smith</div>

          {/* 2x2 Grid of Buttons */}
          {/* get new icons */}
          <div className="grid grid-cols-2 gap-32 mt-4 pr-16 pl-16 pt-16">
            <Link to="">
             <ButtonWithLabel icon=<ClipboardDocumentListIcon className="w-36 h-36"/> label="Notes" />
            </Link>
            <Link to="" className='text-center'>
              <ButtonWithLabel icon=<BiSolidDog className="w-36 h-36"/> label="Exercises & Sensors" />
            </Link>
            <Link to="">
             <ButtonWithLabel icon=<Cog8ToothIcon className="w-36 h-36"/>label="Progress" />
            </Link>
            <Link to="">
             <ButtonWithLabel icon=<BellAlertIcon className="w-36 h-36"/> label="Appointments" />
           </Link>
    
          </div>

          {/* Contact Therapist Button */}
          <Link to="/contact-therapist" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-4 md:py-6 lg:py-8 mt-8 mb-12  text-3xl text-black font-inter  font-bold rounded-full">
            <button className="w-full">
              Contact Therapist
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ClientHome;
