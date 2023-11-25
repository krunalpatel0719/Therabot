import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Eclipse from "../components/Eclipse";
import CircleIcon from "../components/CircleIcon";
import { UserIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Calendar from "../components/Calendar";
function ScheduleAppointment() {
const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("8:00 AM");
  return (
    <div className="bg-gradient-to-b from-BACKGROUND_BLUE to-white ">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen ">
        <Eclipse className="bg-blue-500 opacity-80 " />

        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
          <div className="relative text-4xl sm:text-5xl font-bold text-white z-20 pt-4 md:pt-8 ">
            <Link
              to="/contact-therapist"
              className="absolute -left-12 sm:-left-24  mt-1 sm:bottom-2 text-white "
            >
              <ArrowLeftIcon className="h-8 w-8" />
            </Link>
            <p className = 'text-2xl sm:text-5xl'> Schedule Appointment </p>
          </div>
          <div className="rounded-lg shadow-lg bg-white  mb-24 p-4">
          <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default ScheduleAppointment;
