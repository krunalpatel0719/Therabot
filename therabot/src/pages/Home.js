import React from 'react';
import { Link } from 'react-router-dom';

import { BiSolidDog } from "react-icons/bi";
import {Cog8ToothIcon}  from '@heroicons/react/24/solid'
import {ClipboardDocumentListIcon} from '@heroicons/react/24/solid'
import {BellAlertIcon} from '@heroicons/react/24/solid'

import Eclipse from '../components/Eclipse'
import ButtonWithLabel from '../components/ButtonWithLabel'

function Home() {
  return (
    <div className="bg-gradient-to-b from-BACKGROUND_BLUE to-white">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen">

        <Eclipse className = "bg-ECLIPSE_BLUE opacity-50"/>
        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
          <div className="text-5xl font-bold text-white z-20 pt-4 md:pt-8 relative">Home</div>

          {/* 2x2 Grid of Buttons */}
          <div className="grid grid-cols-2 gap-32 mt-4 pr-16 pl-16 pt-16">
            <Link to="/notes">
             <ButtonWithLabel icon=<ClipboardDocumentListIcon className="w-36 h-36"/> label="Notes" />
            </Link>
            <Link to="/exercises">
              <ButtonWithLabel icon=<BiSolidDog className="w-36 h-36"/> label="Exercises" />
            </Link>
            <Link to="/settings">
             <ButtonWithLabel icon=<Cog8ToothIcon className="w-36 h-36"/>label="Settings" />
            </Link>
            <Link to="/notifications">
             <ButtonWithLabel icon=<BellAlertIcon className="w-36 h-36"/> label="Notifications" />
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

export default Home;
