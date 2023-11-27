import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Eclipse from "../components/Eclipse";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";

import {CalendarIcon} from '@heroicons/react/24/solid';
import { format } from 'date-fns';

import Calendar from "../components/Calendar";

import TimeSelector from "../components/TimeSelector";
function ScheduleAppointment({setNotifications}) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [selectedTime, setSelectedTime] = useState("8 AM");
  const handleSchedule = () => {
  
    const currentTimestamp = new Date();
    setNotifications(prevNotifications => [...prevNotifications, {
      icon: <CalendarIcon className ='w-16 h-16'/>, message1: 'Appointments', message2: `You have an appointment scheduled for ${selectedDate.toDateString()} at ${selectedTime}`, time: format(new Date(currentTimestamp), 'p')
      
   }]);
   console.log(format(new Date(currentTimestamp), 'p'))
   console.log(format(new Date(currentTimestamp), 'a'))
  };


 
  const times = Array.from({ length: 5 }, (_, i) => `${8 + i} AM`).concat(
    Array.from({ length: 5 }, (_, i) => `${1 + i} PM`)
  );
  return (
    <div className="bg-gradient-to-b from-BACKGROUND_BLUE dark:from-[#1b64c4] to-white dark:to-gray-800 min-h-screen">
      <div className="overflow-x-hidden relative flex justify-center items-center  w-screen ">
      <Eclipse className = "bg-blue-500 dark:bg-sky-900 opacity-70 "/>
      
       
        
        <div className="flex flex-col  h-auto  justify-start items-center  z-10 relative">
          <div className=" flex justify-center items-center relative text-4xl sm:text-5xl font-bold text-white z-20 pt-4 md:pt-8 ">
            <Link
              to="/contact-therapist"
              className="absolute -left-12 sm:-left-20 md:-left-28 text-white"
            >
              <ArrowLeftIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
            </Link>
            <p className="text-2xl sm:text-5xl"> Schedule Appointment </p>
          </div>

          <div className="flex flex-col justify-center items-center mt-20 mb-8 md:mt-32 lg:mb-16  lg:mt-40">
            <div className=" rounded-2xl border-2 border-black dark:border-white drop-shadow-xl shadow-xl bg-white dark:bg-gray-700 p-4 ">
              <Calendar
                selectedDate={selectedDate}
                onDateChange={setSelectedDate}
              />
            </div>
          </div>
          <div className=" lg:text-3xl mb-4 px-4 pb-4 pt-2 lg:py-6 lg:px-6  dark:text-white  bg-white dark:bg-gray-700 border-2 dark:border-white border-black rounded-2xl shadow-lg flex flex-col justify-center items-center">
            <h2 className=" font-semibold mb-4 lg:mb-6  border-b-black dark:border-b-white border-b-2 w-full text-center pb-2 lg:pb-6 ">
              Select Time
            </h2>
            <div className="scrollbar-none h-28 lg:h-40 overflow-y-auto lg:text-2xl ">
              <TimeSelector
                availableTimes={times}
                selectedTime={selectedTime}
                onTimeChange={setSelectedTime}
              />
            </div>
          </div>
          {/* Schedule Button */}
          <div className="fixed bottom-0 lg:bottom-4 left-0 right-0 mx-4 my-4 ">
            <button
              className="scale-90 w-full px-24 sm:px-324 p-4 bg-blue-500 dark:bg-sky-700 text-white rounded-full font-semibold text-xl sm:text-3xl lg:text-4xl"
              onClick={handleSchedule}
            >
              Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleAppointment;
