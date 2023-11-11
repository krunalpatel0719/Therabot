import React from 'react';
import { Link } from 'react-router-dom';

import Eclipse from '../components/Eclipse'

function ClientLogin() {
  return (
    <div className="bg-gradient-to-b from-BACKGROUND_BLUE to-white">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen">

        <Eclipse className = "bg-ECLIPSE_BLUE opacity-50"/>
        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
          <div className="text-5xl font-bold text-white z-20 pt-4 md:pt-8 relative">Login</div>


          {/* Login as Client Button */}
          <div class="container mx-auto px-40px my-80 flex flex-col items-center">
            <div class="space-y-4">
            <input type="text" class="w-full px-4 py-4 border border-black rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter Username: " />
            <input type="text" class="w-full px-4 py-4 border border-black rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter Password: " />
            </div>
            <Link to="/" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-4 md:py-6 lg:py-8 mt-8 mb-12 mx-24  text-3xl text-black font-inter  font-bold rounded-full">
              <button className="w-full">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientLogin;
