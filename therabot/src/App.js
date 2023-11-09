import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactTherapist from './pages/ContactTherapist';
import Notifications from './pages/Notifications';
import Notes from './pages/Notes';
import Settings from './pages/Settings';
import Exercises from './pages/Exercises';
// For icons, we can use a library like react-icons. Here, I'll use placeholders.

const App = () => {
  return (
    <Router>
        <Routes>
       
          <Route path="/" element={<Home />} />
 
        <Route path="/contact-therapist"  element={<ContactTherapist/>} />
        <Route path="/notifications"  element={<Notifications/>} />
        <Route path="/settings"  element={<Settings/>} />
        <Route path="/notes"  element={<Notes/>} />
        <Route path="/exercises"  element={<Exercises/>} />
       
        {/* </div> */}
      
      </Routes>
    </Router>
  );
 
};


export default App;
