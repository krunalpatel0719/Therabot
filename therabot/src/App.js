import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactTherapist from './pages/ContactTherapist';
import LoginAs from './pages/LoginAs';
import ClientLogin from './pages/ClientLogin';
import ClinicianLogin from './pages/ClinicianLogin';
// For icons, we can use a library like react-icons. Here, I'll use placeholders.

const App = () => {
  return (
    <Router>
        <Routes>
        {/* <div class='bg-gradient-to-r from-indigo 500'> */}
          <Route path="/" element={<Home />} />
        {/* </div> */}
        {/* <div class='bg-gradient-to-r from-indigo 500'> */}
        <Route path="/contact-therapist"  element={<ContactTherapist />} />
        {/* </div> */}
        {/* <div class='bg-gradient-to-r from-indigo 500'> */}
        <Route path="/login-as"  element={<LoginAs />} />
        {/* </div> */}
        {/* <div class='bg-gradient-to-r from-indigo 500'> */}
        <Route path="/login-client"  element={<ClientLogin />} />
        {/* </div> */}     
        {/* <div class='bg-gradient-to-r from-indigo 500'> */}
        <Route path="/login-clinician"  element={<ClinicianLogin />} />
        {/* </div> */}   
      </Routes>
    </Router>
  );
 
};


export default App;
