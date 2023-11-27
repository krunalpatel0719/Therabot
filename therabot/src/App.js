import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from './context/DarkModeContext';
import ClientHome from "./pages/ClientHome";
import ContactTherapist from "./pages/ContactTherapist";
import TextTherapist from "./pages/TextTherapist";
import Feedback from "./pages/Feedback";
import ScheduleAppointment from "./pages/ScheduleAppointment";
import Notifications from "./pages/Notifications";
import Notes from "./pages/Notes";
import NewNote from "./pages/NewNote";
import Settings from "./pages/Settings";
import Exercises from "./pages/Exercises";
import LoginAs from "./pages/LoginAs";
import ClientLogin from "./pages/ClientLogin";
import ClinicianLogin from "./pages/ClinicianLogin";
import ClinicianHome from "./pages/ClinicianHome";
import SelectClient from "./pages/SelectClient";
import ClientExapmle from "./pages/ClientExample";
import ClinicianAppt from "./pages/ClinicianAppt";
import ClinicianExercises from "./pages/ClinicianExercises";


import {CalendarIcon} from '@heroicons/react/24/solid';
import {BellAlertIcon} from '@heroicons/react/24/solid';
import {EnvelopeIcon} from '@heroicons/react/24/solid';


// For icons, we can use a library like react-icons. Here, I'll use placeholders.

const App = () => {
  const [notes, setNotes] = useState([]);
  const [messages, setMessages] = useState([
    { text: "Hey User! How are you doing?", sender: "therapist" },
    // { text: "I'm doing great, thanks for asking! ", sender: "user" }
    // ... more messages
  ]);
  const [notifications, setNotifications] = useState([
    { icon: <EnvelopeIcon className ='w-16 h-16'/>, message1: 'Messages', message2: 'Therabot sent a new message.',  time: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'America/New_York' })},
  
    { icon: <CalendarIcon className ='w-16 h-16'/>, message1: 'Appointments', message2: 'You have an appointment at 6 PM today.', time: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'America/New_York' })},
    { icon: <CalendarIcon className ='w-16 h-16'/>, message1: 'Appointments', message2: 'Your appointment at 5 PM has been cancelled.', time: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'America/New_York' })},
    { icon: <BellAlertIcon className ='w-16 h-16'/>, message1: 'Reminders', message2: 'Therabot session today at 2 PM.',  time: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'America/New_York' })}
    // ... other notifications ...
  ]);
  return (
    <DarkModeProvider>
    <Router>
      <Routes>
        {/* for now, the client home page is the base route,
         but need to change to allow separate clinician home
         and make LoginAs the base*/}
        <Route path="/" element={<LoginAs />} />

        <Route path="/client-home" element={<ClientHome />} />
        <Route path="/contact-therapist" element={<ContactTherapist />} />
        <Route path="/notifications" element={<Notifications notifications={notifications}/>} />
        <Route path="/settings" element={<Settings />} />

        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route
          path="/new_note/:noteId"
          element={<NewNote setNotes={setNotes} notes={notes} />}
        />
        <Route
          path="/new_note"
          element={<NewNote setNotes={setNotes} notes={notes} />}
        />

        {/* <Route path="/new_note" element={<NewNote setNotes={setNotes} notes={notes}/>} />
        <Route path="/new_note/:noteId" component={NewNote} /> */}
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/contact-therapist" element={<ContactTherapist />} />
        <Route
          path="/text-therapist"
          element={
            <TextTherapist messages={messages} setMessages={setMessages} />
          }
        />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/schedule-appointment" 
         element={<ScheduleAppointment  setNotifications={setNotifications}/>} 
        />
        <Route path="/login-as" element={<LoginAs />} />
        <Route path="/login-client" element={<ClientLogin />} />
        <Route path="/login-clinician" element={<ClinicianLogin />} />
        <Route path="/clinician-home" element={<ClinicianHome />} />
        <Route path="/select-client" element={<SelectClient />} />
        <Route path="/client-example" element={<ClientExapmle />} />
        <Route path="/clinician-appointment" element={<ClinicianAppt />} />
        <Route path="/clinician-exercises" element={<ClinicianExercises />} />

        {/* </div> */}
      </Routes>
    </Router>
    </DarkModeProvider>
  );
};

export default App;
