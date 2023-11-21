import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import Eclipse from '../components/Eclipse'
import {ArrowLeftIcon} from '@heroicons/react/24/solid';
import {PaperAirplaneIcon} from '@heroicons/react/24/outline';
import { BsSticky } from "react-icons/bs";
import MessageWithTime from '../components/MessageWithTime';


function Notes({messages}) {

 
  
  console.log(messages);
  return (
    <div className="bg-gradient-to-b from-NOTES_GRADIENT to-white ">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen ">
        <Eclipse className = "bg-NOTES_ECLIPSE opacity-20 "/>
        
        <div className="flex flex-col h-screen justify-start items-center  z-10 relative">
          <div className="relative text-4xl sm:text-5xl font-bold text-white z-20 pt-4 md:pt-8 ">
            <Link to="/client-home" className="absolute -left-12 sm:-left-24 bottom-1 sm:bottom-2 text-white "><ArrowLeftIcon className = "h-8 w-8"/></Link>
            Notes 
          </div>
                  {messages.map((message, index) => (
          <div key={index} className="text-sm opacity-70">{message}</div>
        ))}
          <div className="mt-24 sm:mt-32 flex flex-col space-y-8 scale-75 sm:scale-100">
  <MessageWithTime icon = <BsSticky className ='w-16 h-16'/> message1 = 'Note #1' message2 ='Note content' time='1:30 AM'/>
  <MessageWithTime icon = <BsSticky className ='w-16 h-16'/>  message1 = 'Appointments' message2 ='You have an appointment at 6 PM today.' time='4:30 AM'/>
  <MessageWithTime icon = <BsSticky className ='w-16 h-16'/>  message1 = 'Appointments' message2 ='Your appointment at 5 PM has been cancelled.' time='4:25 AM'/>
  <MessageWithTime  icon = <BsSticky className ='w-16 h-16'/> message1 = 'Reminders' message2 ='Therabot session today at 2 PM.' time='1:30 AM'/>
  {/* Other MessageWithTime components */}
</div> 
          <div className='absolute bottom-0  w-full flex justify-center scale-75 sm:scale-100'>
          <Link to="/new_note"  className=' flex justify-center scale-75 sm:scale-100'>
            <div className="mb-8 w-48 h-16 bg-NOTES_GRADIENT opacity-30 z-10 rounded-xl shadow-lg"></div>
           
              
            <button className="mb-8 w-48 h-16 text-black z-20 rounded-xl shadow-lg flex items-center justify-between px-6 absolute">
              <p className = 'font-inter opacity-70 z-20'> New Note </p>
              <div className = ' h-10 w-10 bg-NOTES_BUTTON rounded-xl z-10'> 
                <PaperAirplaneIcon className="-rotate-45 text-white h-6 w-6 mx-auto my-2 z-10" />
              </div>
            </button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Notes;