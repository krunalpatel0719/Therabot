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
        <div className="text-5xl font-bold text-white z-20 pt-4 md:pt-8 relative"><Link to="/clinician-appointment" className="absolute -left-12 sm:-left-24 bottom-1 sm:bottom-2 text-white "><ArrowLeftIcon className = "h-8 w-8"/></Link>October 31 Notes</div>



          <div className='text-3xl -translate-y-72 -translate-x-40 font-bold text-black md:pt-8 '>
            Note 1:
          </div>
            <button className="w-full -translate-y-12 drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-3xl">
                Placeholder 
            </button>





        </div>
      </div>
    </div>
  );
}

export default Appointments;