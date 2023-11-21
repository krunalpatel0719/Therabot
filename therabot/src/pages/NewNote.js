import React, { useState } from "react";

import { Link } from "react-router-dom";

import Eclipse from "../components/Eclipse";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { BsSticky } from "react-icons/bs";
import { PencilIcon } from "@heroicons/react/24/solid";
import MessageWithTime from "../components/MessageWithTime";

function NewNote({setMessages}) {
  const [message, setMessage] = useState("Type your message here");
  const [messages, set_Messages] = useState([]);
  const [editingMessage, setEditingMessage] = useState(null);
  const [editedMessage, setEditedMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [title, setTitle] = useState('New Note');
  const handleTitleClick = () => {
    setIsEditingTitle(true);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditingTitle(false);
  };

  const handleTitleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsEditingTitle(false);
    }
  };
  const handleSend = () => {
    if (message.trim() !== "") {
      set_Messages((messages) => [...messages, message]);
      setMessages((messages) => [...messages, message]);
    }
  };
  const handleEdit = (index) => {
    setEditingMessage(index);
    setEditedMessage(messages[index]);
    setIsEditing(true);
  };

  const handleUpdate = (newMessage) => {
    setEditedMessage(newMessage);
  };
  return (
    <div className="bg-gradient-to-b from-NOTES_GRADIENT to-white ">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen ">
        <Eclipse className="bg-NOTES_ECLIPSE opacity-20 " />

        <div className="flex flex-col h-screen justify-start items-center  z-10 relative">
        <div className="relative text-4xl sm:text-5xl font-bold text-white z-20 pt-4 md:pt-8 ">
  <Link
    to={{
      pathname: "/notes", 
      state: { messages: messages },
    }}
    className="absolute -left-12 sm:-left-24 bottom-1 sm:bottom-2 text-white "
  >
    <ArrowLeftIcon className="h-8 w-8" />
  </Link>
  <div
    contentEditable={true}
    suppressContentEditableWarning={true}
    onBlur={(e) => setTitle(e.target.innerText)}
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.target.blur();
      }
    }}
  >
    {title}
  </div>
</div>m 
          <div className="mt-24 sm:mt-32 flex flex-col space-y-8 scale-75 sm:scale-100 bg-white min-w-64 w-auto max-h-[46rem] rounded-xl overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className="mb-2 flex justify-between items-center"
              >
                <div className="pr-2 overflow-auto">{msg}</div>
                <PencilIcon
                  className="h-5 w-5 text-gray-500 cursor-pointer"
                  onClick={() => handleEdit(index)}
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-0  w-screen flex justify-center scale-75 sm:scale-100">
            <div className="mb-8 w-96 h-16 bg-NOTES_GRADIENT opacity-30 z-10 rounded-xl shadow-lg">
              {" "}
            </div>
            <div className="mb-8 w-96 h-16 text-black z-20 rounded-xl shadow-lg flex items-center justify-between px-6 absolute">
              <input
                className="font-inter opacity-70 bg-inherit w-3/4 focus:outline-none z-20"
                placeholder={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    handleSend();
                    event.preventDefault(); 
                  }
                }}
              />
              <button
                className=" h-10 w-10 bg-NOTES_BUTTON rounded-xl z-10"
                onClick={handleSend}
              >
                <PaperAirplaneIcon className="-rotate-45 text-white h-6 w-6 mx-auto my-2 z-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isEditing && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded">
            <input
              value={editedMessage}
              onChange={(e) => handleUpdate(e.target.value)}
            />
            <button
              className="cursor-pointer"
              onClick={() => {
                const newMessages = [...messages];
                newMessages[editingMessage] = editedMessage;

                set_Messages(newMessages);

                setIsEditing(false);
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewNote;
