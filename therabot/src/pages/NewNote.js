import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

import Eclipse from "../components/Eclipse";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { BsSticky } from "react-icons/bs";
import { PencilIcon } from "@heroicons/react/24/solid";
import MessageWithTime from "../components/MessageWithTime";

function NewNote({setNotes, notes}) {

  const { noteId } = useParams(); // Declare noteId here
  const navigate = useNavigate();

  const [currentNoteId, setCurrentNoteId] = useState(noteId);
  const [message, setMessage] = useState("Type your message here");  
  const [messages, set_Messages] = useState([]);
  const [tempEditedMessage, setTempEditedMessage] = useState("");
  const [editingMessage, setEditingMessage] = useState(null);
  const [editedMessage, setEditedMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const initialTitleNumber = notes.length + 1;
  const [title, setTitle] = useState(`Note ${initialTitleNumber}`);
  useEffect(() => {
    if (currentNoteId) {
      const noteToEdit = notes.find(note => note.id === currentNoteId);
      if (noteToEdit) {
        setTitle(noteToEdit.title);
        set_Messages(noteToEdit.messages);
      }
    } else {
      setTitle(`Note ${notes.length + 1}`);
      set_Messages([]);
    }
  }, [currentNoteId, notes]);
 
  const handleTitleClick = () => {
    setIsEditingTitle(true);
  };

  

  const handleTitleBlur = () => {
    setIsEditingTitle(false);
  };

  const handleTitleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsEditingTitle(false);
    }
  };

  function updateNoteTitle(id, newTitle) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, title: newTitle };
        } else {
          return note;
        }
      });
    });
  }
  
  const handleTitleChange = (e) => {
    const newTitle = e.target.innerText;
    setTitle(newTitle);
  
    if (currentNoteId) {
      // Update the title in the notes array for the existing note
      setNotes(prevNotes => {
        return prevNotes.map(note => 
          note.id === currentNoteId ? { ...note, title: newTitle } : note
        );
      });
    }
    // No need to update the notes array for a new note
    // The new title will be included when the note is eventually created
  };
 
  const handleSend = () => {
    if (message.trim() !== "") {
      const newMessages = [...messages, message];
      set_Messages(newMessages);
      
      setNotes(prevNotes => {
        if (currentNoteId) {
          // Update the existing note
          return prevNotes.map(note =>
            note.id === currentNoteId ? { ...note, messages: newMessages } : note
          );
        } else {
          // Add a new note
          const newNoteId = uuidv4();
          setCurrentNoteId(newNoteId); // Update the currentNoteId
          const currentTimestamp = new Date();
          return [...prevNotes, { id: newNoteId, title, messages: newMessages, timestamp: currentTimestamp }];
        }
      });

      setMessage(""); // Clear the message input field after sending
    }
  };
  const handleEdit = (index) => {
    setEditingMessage(index);
    setEditedMessage(messages[index]);
    setTempEditedMessage(messages[index]); // Set the temporary edited message
    setIsEditing(true);
  };

  const handleChangeEditedMessage = (e) => {
    setTempEditedMessage(e.target.value);
  };

  const handleDoneEditing = () => {
    handleUpdate(tempEditedMessage);
    setTempEditedMessage(""); // Reset the temporary edited message
  };

      // setEditedMessage(newMessage);
      const handleUpdate = (newMessage) => {
        const updatedMessages = messages.map((msg, index) =>
          index === editingMessage ? newMessage : msg
        );
      
        set_Messages(updatedMessages);
        setNotes(prevNotes => prevNotes.map(note => 
          note.title === title ? { ...note, messages: updatedMessages } : note
        ));
      
        setIsEditing(false);
        setEditingMessage(null);
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
    onBlur={handleTitleChange}
    
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.target.blur();
      }
    }}
  >
  {title}
    
  </div>
</div>
      <div 
        className="scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gray-500 scrollbar-track-gray-200 mt-24 sm:mt-32 flex flex-col space-y-8 scale-75 sm:scale-100 bg-gray-100 min-w-[500px] sm:min-w-[640px] w-auto sm:max-h-[46rem] rounded-xl overflow-y-auto p-4" 
        style={{ minHeight: '500px' }}
      > {messages.map((msg, index) => (
              <div
                key={index}
                className="mb-2 flex justify-between items-center"
              >
                <div className="pr-2 overflow-auto font-inter font-medium text-xl">{msg}</div>
                <PencilIcon
                  className="ml-4 h-5 w-5 text-gray-500 cursor-pointer"
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
            value={tempEditedMessage}
            onChange={handleChangeEditedMessage}
          />
          <button
            className="cursor-pointer"
            onClick={handleDoneEditing}
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
