import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { format, addMinutes } from 'date-fns';
import Eclipse from '../components/Eclipse'
import {ArrowLeftIcon} from '@heroicons/react/24/solid';
import {PaperAirplaneIcon} from '@heroicons/react/24/outline';
import { BsSticky } from "react-icons/bs";
import MessageWithTime from '../components/MessageWithTime';


function Notes({notes}) {

  const getFormattedTime = (index) => {
    const baseTime = new Date();
    baseTime.setHours(13, 0, 0); // Set base time to 1:00 PM
    const newTime = addMinutes(baseTime, index);
    return format(newTime, 'p');
  };
  notes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  return (
    <div className="bg-gradient-to-b from-NOTES_GRADIENT dark:from-[#38ca9a] to-white dark:to-gray-700">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen ">
        <Eclipse className = "bg-NOTES_ECLIPSE dark:opacity-60 opacity-20  "/>
        
        <div className="flex flex-col h-screen justify-start items-center  z-10 relative">
        <div className="flex justify-center items-center relative text-4xl sm:text-5xl font-bold text-white z-20 pt-4 md:pt-8 ">
            <Link
              to="/client-example"
              className="absolute -left-12 sm:-left-20 md:-left-28 text-white"
            >
              <ArrowLeftIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
            </Link>
            <p className="sm:text-5xl"> Notes </p>
          </div>
        
       <div className="scrollbar-none  mt-16 sm:mt-32 flex flex-col space-y-8 scale-75 sm:scale-100 overflow-auto max-h-[calc(100vh-175px)] sm:max-h-[calc(100vh-350px)]">
       {notes.map((note, index) => (
 <div className='pr-8 ml-4' key={note.id || `note-${index} `}>
    <Link className = 'w-auto' to={`/new_note2/${note.id}`}>
     
      <MessageWithTime
        icon={<BsSticky className='w-16 h-16 ' />}
        message1={note.title}
        message2={note.messages[0]}
        time={format(new Date(note.timestamp), 'p')}
      />
   
    </Link>
  </div>
))}

      </div>
          <div className='absolute bottom-0  w-full flex justify-center scale-100 sm:scale-100'>
          <Link to="/new_note2"  className=' flex justify-center scale-75 sm:scale-100'>
            <div className="mb-8 w-96 h-16 bg-NOTES_GRADIENT dark:bg-emerald-400 opacity-30 z-10 rounded-xl shadow-lg"></div>
           
              
            <button className="mb-8 w-96 h-16 text-black dark:text-white z-20 rounded-xl shadow-lg flex items-center justify-between px-6 absolute">
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