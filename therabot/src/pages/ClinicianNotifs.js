import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Eclipse from '../components/Eclipse'
import {ArrowLeftIcon} from '@heroicons/react/24/solid';
import MessageWithTime from '../components/MessageWithTime';

function Notifications({notifications}) {
 
  notifications.sort((a, b) => new Date(b.time) - new Date(a.time));
  return (

    <div className="bg-gradient-to-b from-NOTIFICATIONS_GRADIENT dark:from-[#669271] to-white dark:to-[#0b3f25] ">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen ">
        <Eclipse className = "bg-NOTIFICATIONS_ECLIPSE dark:bg-[#246144] opacity-20 dark:opacity-60"/>
        
        <div className="flex flex-col h-screen justify-start items-center  z-10 relative">
        <div className="flex justify-center items-center relative text-4xl sm:text-5xl font-bold text-white z-20 pt-4 md:pt-8 ">
            <Link
              to="/clinician-home"
              className="absolute -left-12 sm:-left-20 md:-left-28 text-white"
            >
              <ArrowLeftIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
            </Link>
            <p className=" sm:text-5xl"> Notifications </p>
          </div>
          <div className=" mt-24 sm:mt-32 flex flex-col  space-y-8 overflow-y-auto scrollbar-none scale-90 sm:scale-100 sm:pl-4">
         
          {notifications.map((notification, index) => (
            <MessageWithTime key={index} icon={notification.icon} message1={notification.message1} message2={notification.message2} time={notification.time}/>
          ))}
      
      </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;