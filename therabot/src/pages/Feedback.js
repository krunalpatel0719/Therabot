import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Eclipse from "../components/Eclipse";
import CircleIcon from "../components/CircleIcon";
import { UserIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

function Feedback() {
  const [messages, setMessages] = useState([
    { text: "You're doing really well! I'm glad you are being consistent with the exercises.", time: "Oct 20 2023 3:40 PM"},
    { text: "I changed your prescription based on our recent session let me know if you need anything earlier before our next appointment.", time: "Oct 19 2023 2:40 PM"},
    // { text: "I'm doing great, thanks for asking! ", sender: "user" }
    // ... more messages
  ]);
  return (
    <div className="bg-gradient-to-b from-BACKGROUND_BLUE to-white ">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen ">
        <Eclipse className="bg-blue-500 opacity-80 " />

        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
          <div className="relative text-4xl sm:text-5xl font-bold text-white z-20 pt-4 md:pt-8 ">
            <Link
              to="/contact-therapist"
              className="absolute -left-12 sm:-left-24 bottom-1 sm:bottom-2 text-white "
            >
              <ArrowLeftIcon className="h-8 w-8" />
            </Link>
            Feedback
          </div>
          <div className="flex-1 overflow-auto mb-20 md:mb-28 mt-16 scrollbar-none">
            <div className="sm:mt-16 flex-1 p-2 space-y-4 md:space-y-10 overflow-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start mb-4"
                >
                  <div className="shadow-xl drop-shadow-lg max-w-xs md:max-w-xl lg:max-w-2xl p-2 pl-3 ml-2 text-base rounded-2xl bg-white border-gray-700 border">
                    <p className="whitespace-pre-wrap break-words font-semibold md:text-lg">
                      {message.text}
                    </p>
                    <p className="text-right text-xs md:text-sm text-gray-600 pt-2">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
