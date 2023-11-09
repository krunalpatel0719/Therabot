import React from 'react';
import { Link } from 'react-router-dom';
import {ArrowRightIcon} from '@heroicons/react/24/solid';

function ContactTherapistButtons({ className, icon, label}) {
  return (
    <Link to="/contact-therapist" className={`${className} w-full drop-shadow-md shadow-lg font-inter rounded-full relative`}>
      <button className="w-full flex justify-center items-center">
        <div className="absolute left-4">{icon}</div>
        <div className="flex flex-wrap justify-center text-base sm:text-xl">{label}</div>
        <div className="absolute right-4"><ArrowRightIcon className = "h-8 w-8"/></div>
      </button>
    </Link>
  );
}

export default ContactTherapistButtons;