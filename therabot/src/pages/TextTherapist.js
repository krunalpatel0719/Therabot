import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Eclipse from '../components/Eclipse'
import CircleIcon from '../components/CircleIcon';
import {UserIcon} from '@heroicons/react/24/outline';
import {ArrowLeftIcon} from '@heroicons/react/24/solid';
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";



function TextTherapist() {
    const [message, setMessage] = useState("Type your message here");  
    const [messages, setMessages] = useState([
        { text: "Hey User! How are you doing?", sender: "therapist" },
        { text: "I'm doing great, thanks for asking! ", sender: "user" },
        // ... more messages
      ]);
      const [newMessage, setNewMessage] = useState("");
    
      const sendMessage = () => {
        if (newMessage.trim()) {
          setMessages([...messages, { text: newMessage, sender: "user" }]);
          setNewMessage("");
        }
      };
  return (
    <div className="bg-gradient-to-b from-BACKGROUND_BLUE to-white ">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen ">
        <Eclipse className = "bg-blue-500 opacity-80 "/>
        
        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
        <div className="relative text-4xl sm:text-5xl font-bold text-white z-20 pt-4 md:pt-8">
  <div className="flex items-center mr-20">
    <Link to="/contact-therapist" className="text-white "><ArrowLeftIcon className = "h-8 w-8"/></Link>
    <CircleIcon className = 'scale-75 ml-2 w-14 h-14 sm:w-24 sm:h-24' icon=<UserIcon className = ' w-10 h-10 sm:w-16 sm:h-16 mt-4 sm:mt-10'/> />
    <div className="ml-2 text-center flex flex-col items-start sm:pt-2">
    <span className="text-2xl sm:text-5xl ">Dr. Therabot</span>
    <span className="text-xs sm:text-lg sm:mt-2">Online</span>
  </div>
   
  </div>
</div>
       

<div className="scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gray-500 scrollbar-track-gray-200 mt-12 sm:mt-16 flex-1 p-4 space-y-6 overflow-auto">
  {messages.map((message, index) => (
    <div key={index} className={`flex items-center ${message.sender === "user" ? "justify-end ml-4" : "justify-start mr-4"}`}>
      {message.sender === "therapist" && <CircleIcon className='scale-75 w-14 h-14 sm:w-24 sm:h-24' icon=<UserIcon className='w-10 h-10 sm:w-16 sm:h-16 mt-4 sm:mt-10'/> />}
      <div className={`max-w-xs md:max-w-md lg:max-w-lg p-2  pl-3 ml-2 text-base rounded-2xl ${message.sender === "user" ? "pl-2 pr-3 mr-2 ml-0 bg-blue-500 text-white" : "bg-gray-100"}`}>
        <p className="whitespace-normal break-words">{message.text}</p>
      </div>
      {message.sender === "user" && <CircleIcon className='scale-75 w-14 h-14 sm:w-24 sm:h-24' icon=<UserIcon className='w-10 h-10 sm:w-16 sm:h-16 mt-4 sm:mt-10'/> />}
    </div>
  ))}
</div>
          <div className="absolute bottom-0  w-screen flex justify-center scale-75 sm:scale-100">
            <div className="mb-8 w-96 h-16 bg-BACKGROUND_BLUE opacity-30 z-10 rounded-xl shadow-lg">
             
            </div>
            <div className="mb-8 w-96 h-16 text-black z-20 rounded-xl shadow-lg flex items-center justify-between px-6 absolute">
              <input
                className="font-inter opacity-70 bg-inherit w-3/4 focus:outline-none z-20"
                placeholder={message}
               
              />
              <button
                className=" h-10 w-10 bg-BACKGROUND_BLUE rounded-xl z-10"
                
              >
                <PaperAirplaneIcon className="-rotate-45 text-white h-6 w-6 mx-auto my-2 z-10" />
              </button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default TextTherapist;