import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactTherapist from './pages/ContactTherapist';
// For icons, we can use a library like react-icons. Here, I'll use placeholders.

const App = () => {
  return (
    <Router>
        <Routes>
        {/* <div class='bg-gradient-to-r from-indigo 500'> */}
          <Route path="/" element={<Home />} />
        {/* </div> */}
        {/* <div class='bg-gradient-to-r from-indigo 500'> */}
        <Route path="/contact-therapist"  element={<ContactTherapist/>} />
        {/* </div> */}
      
      </Routes>
    </Router>
  );
 
};


export default App;
