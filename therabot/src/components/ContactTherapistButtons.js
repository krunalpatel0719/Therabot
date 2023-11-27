import React from 'react';

import {ArrowRightIcon} from '@heroicons/react/24/solid';

function ContactTherapistButtons({ className, icon, label}) {
  return (
    <div  className={`${className} w-full p-12 drop-shadow-md shadow-lg font-inter rounded-full relative`}>
      <button className="w-full flex justify-center items-center">
        <div className="absolute left-4">{icon}</div>
        <div className="flex flex-wrap justify-center text-sm sm:text-xl ">{label}</div>
        <div className="absolute right-4 "><ArrowRightIcon className = "h-6 w-6 sm:h-8 sm:w-8"/></div>
      </button>
    </div>
  ); 
}

export default ContactTherapistButtons;