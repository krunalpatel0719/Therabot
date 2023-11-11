import React from 'react';
import { Link } from 'react-router-dom';

import Eclipse from '../components/Eclipse'

function ClientHome() {
  return (
    <div className="bg-gradient-to-b from-BACKGROUND_BLUE to-white">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen">

        <Eclipse className = "bg-ECLIPSE_BLUE opacity-50"/>
        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
          <div className="text-5xl font-bold text-white z-20 pt-4 md:pt-8 relative">Home</div>


            {/* 2x2 Grid of Buttons */}
            <div className="h-full w-96 mt-64 overflow-y-auto flex flex-col space-y-10 mb-10">
                <Link to="/client-example" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    Name 
                    </button>
                </Link>
                <Link to="/client-example" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    Name
                    </button>
                </Link>
                <Link to="/client-example" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    Name
                    </button>
                </Link>
                <Link to="/client-example" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    Name
                    </button>
                </Link>
                <Link to="/client-example" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    Name
                    </button>
                </Link>
                <Link to="/client-example" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    Name
                    </button>
                </Link>
                <Link to="/client-example" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    Name
                    </button>
                </Link>
                <Link to="/" className="w-full drop-shadow-md shadow-lg bg-BUTTON_GREY opacity-90 py-6 md:py-6 lg:py-8 text-3xl text-black font-inter font-bold rounded-full">
                    <button className="w-full">
                    Name
                    </button>
                </Link>
            </div>


        
        </div>
      </div>
    </div>
  );
}

export default ClientHome;
