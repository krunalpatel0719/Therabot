import React from 'react';
import { Link } from 'react-router-dom';

import Eclipse from '../components/Eclipse'
import CircleIcon from '../components/CircleIcon';
import {UserIcon} from '@heroicons/react/24/outline';
import {ArrowLeftIcon} from '@heroicons/react/24/solid';
import {ChatBubbleBottomCenterIcon} from '@heroicons/react/24/outline';
import {ClipboardIcon} from '@heroicons/react/24/outline';
import {CalendarIcon} from '@heroicons/react/24/outline';
import {PhoneIcon} from '@heroicons/react/24/outline';
import ContactTherapistButtons from '../components/ContactTherapistButtons'

function ContactTherapist() {
  return (
    <div className="bg-gradient-to-b from-BACKGROUND_BLUE dark:from-[#1b64c4] to-white dark:to-gray-800 ">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen ">
        <Eclipse className = "bg-blue-500 dark:bg-sky-900 opacity-70 "/>
        
        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
        <div className="flex justify-center items-center relative text-4xl sm:text-5xl font-bold text-white z-20 pt-4 md:pt-8 ">
            <Link
              to="/client-home"
              className="absolute -left-12 sm:-left-20 md:-left-28 text-white"
            >
              <ArrowLeftIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
            </Link>
            <p className="text-2xl sm:text-5xl"> Contact Therapist </p>
          </div>
          <div className = "mb-36 mt-24  sm:mb-24 flex flex-col items-center dark:text-white ">
           <CircleIcon className = 'w-36 h-36 sm:w-48 sm:h-48' icon=<UserIcon className = 'w-24 h-24 sm:w-36 sm:h-36 mt-14 sm:mt-16'/> />
            <h2 className = 'pt-4 text-xl font-bold'> Dr. Therapist </h2>
            
          </div>
        
          <div className="flex flex-col space-y-12 mb-48 w-full ">
            <Link to="/text-therapist" className=""> 
              <ContactTherapistButtons className = 'inline-block bg-CONTACT_THERAPIST_BUTTON_BLUE dark:bg-[#2966b4] text-black dark:text-white text-2xl  font-semibold pt-2 pb-2 sm:pt-4 sm:pb-4' icon =<ChatBubbleBottomCenterIcon className = 'w-6 h-6 sm:h-8 sm:w-8'/> label='Text Therapist'/>
            </Link>
            <ContactTherapistButtons className = 'bg-CONTACT_THERAPIST_BUTTON_BLUE dark:bg-[#2966b4] text-black dark:text-white  first-line:text-2xl  font-semibold pt-2 pb-2 sm:pt-4 sm:pb-4' icon =<PhoneIcon className = 'w-6 h-6 sm:h-8 sm:w-8'/> label='Call Therapist'/>
            <Link to="/schedule-appointment" className=""> 
              <ContactTherapistButtons className = 'bg-CONTACT_THERAPIST_BUTTON_BLUE dark:bg-[#2966b4] text-black  dark:text-white  text-2xl  font-semibold pt-2 pb-2 sm:pt-4 sm:pb-4' icon =<CalendarIcon className = 'w-6 h-6 sm:h-8 sm:w-8'/> label='Schedule Appointment'/>
            </Link>
            <Link to="/feedback" className=""> 
              <ContactTherapistButtons className = 'bg-CONTACT_THERAPIST_BUTTON_BLUE dark:bg-[#2966b4] text-black dark:text-white  text-2xl font-semibold pt-2 pb-2 sm:pt-4 sm:pb-4' icon =<ClipboardIcon className = 'w-6 h-6 sm:h-8 sm:w-8'/> label='View Feedback'/>
            </Link>
           
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default ContactTherapist;