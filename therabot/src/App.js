import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactTherapist from './pages/ContactTherapist';
import Notifications from './pages/Notifications';
import Notes from './pages/Notes';
import Settings from './pages/Settings';
import Exercises from './pages/Exercises';
import LoginAs from './pages/LoginAs';
import ClientLogin from './pages/ClientLogin';
import ClinicianLogin from './pages/ClinicianLogin';  
// For icons, we can use a library like react-icons. Here, I'll use placeholders.

const App = () => {
  return (
    <Router>
        <Routes>
        {/* for now, the client home page is the base route,
         but need to change to allow separate clinician home
         and make LoginAs the base*/}
          <Route path="/" element={<Home />} />
 
        <Route path="/contact-therapist"  element={<ContactTherapist/>} />
        <Route path="/notifications"  element={<Notifications/>} />
        <Route path="/settings"  element={<Settings/>} />
        <Route path="/notes"  element={<Notes/>} />
        <Route path="/exercises"  element={<Exercises/>} />
        <Route path="/contact-therapist"  element={<ContactTherapist />} />
        <Route path="/login-as"  element={<LoginAs />} />
        <Route path="/login-client"  element={<ClientLogin />} />
        <Route path="/login-clinician"  element={<ClinicianLogin />} />
       
        {/* </div> */}
      
      </Routes>
    </Router>
  );
 
};


export default App;
