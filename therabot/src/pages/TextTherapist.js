import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Eclipse from "../components/Eclipse";
import CircleIcon from "../components/CircleIcon";
import { UserIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

function TextTherapist({ messages, setMessages }) {
  const [message, setMessage] = useState("Type your message here");

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
        <Eclipse className="bg-blue-500 opacity-80 " />

        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
          <div className="flex justify-center items-center relative text-4xl sm:text-5xl font-bold text-white z-20 pt-4 md:pt-8 ">
            <div className="flex items-center mr-20">
              <Link
                to="/contact-therapist"
                className="absolute -left-8 sm:-left-20 md:-left-28 text-white"
              >
                <ArrowLeftIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              </Link>
              <CircleIcon
                className="scale-75 ml-2 w-14 h-14 sm:w-24 sm:h-24"
                icon=<UserIcon className=" w-10 h-10 sm:w-16 sm:h-16 mt-4 sm:mt-10" />
              />
              <div className="ml-2 text-center flex flex-col items-start sm:pt-2">
                <span className="text-2xl sm:text-5xl ">Dr. Therabot</span>
                <span className="text-xs sm:text-lg sm:mt-2">Online</span>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-auto mb-20 md:mb-28 mt-16 scrollbar-none ">
            <div className=" sm:mt-16 flex-1 p-4 space-y-4  md:space-y-2 overflow-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    message.sender === "user"
                      ? "justify-end ml-6 sm:ml-80 md:ml-96"
                      : "justify-start mr-4 sm:mr-80  md:mr-96"
                  }`}
                >
                  {message.sender === "therapist" && (
                    <CircleIcon
                      className="scale-75 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 "
                      icon=<UserIcon className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 mt-4 sm:mt-6 md:mt-8" />
                    />
                  )}
                  <div
                    className={`shadow-sm  drop-shadow-lg max-w-xs md:max-w-md lg:max-w-lg p-2  pl-3 ml-2 text-base rounded-2xl ${
                      message.sender === "user"
                        ? "pl-3 md:pl-4 pr-3 md:pr-4 mr-2 ml-0 md:py-4 bg-blue-500 text-white"
                        : "pl-3 pr-3 ml-2 md:pl-4 md:pr-4  md:py-4 bg-gray-100 "
                    }`}
                  >
                    <p className="whitespace-normal break-words  md:text-2xl">
                      {message.text}
                    </p>
                  </div>
                  {message.sender === "user" && (
                    <CircleIcon
                      className="scale-75 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24"
                      icon=<UserIcon className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 mt-4 sm:mt-6 md:mt-8" />
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 sm:w-screen flex justify-center">
            <div className="fixed inset-x-0 bottom-0 p-4 md:p-6 bg-white flex items-center rounded-t-3xl shadow">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    sendMessage();
                    event.preventDefault();
                  }
                }}
                placeholder="Type Your Message"
                className="md:text-xl flex-grow p-2 md:p-4 mr-4 rounded-full border-2 border-gray-300 outline-BACKGROUND_BLUE"
              />
              <button
                onClick={sendMessage}
                className="p-2 md:p-4 rounded-full bg-BACKGROUND_BLUE text-white shadow-lg flex-shrink-0"
              >
                <PaperAirplaneIcon className="h-6 w-6 md:h-8 md:w-8 transform -rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextTherapist;
