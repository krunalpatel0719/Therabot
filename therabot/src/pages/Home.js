import React from 'react';

import Eclipse from '../components/Eclipse'
import ButtonWithLabel from '../components/ButtonWithLabel'

function Home() {
  return (
    <div className="bg-gradient-to-b from-BACKGROUND_BLUE to-white">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen">

        <Eclipse/>
        <div className="flex flex-col h-screen justify-between items-center  z-10 relative">
          <div className="text-5xl font-bold text-white z-20 pt-4 md:pt-8 relative">Home</div>

          {/* 2x2 Grid of Buttons */}
          <div className="grid grid-cols-2 gap-24 mt-4 pr-16 pl-16 pt-16">
            <ButtonWithLabel icon="📝" label="Notes" />
            <ButtonWithLabel icon="🏋️" label="Exercises" />
            <ButtonWithLabel icon="⚙️" label="Settings" />
            <ButtonWithLabel icon="🔔" label="Notifications" />
          </div>

          {/* Contact Therapist Button */}
          <button className="w-full py-4 md:py-6 lg:py-8 mt-8 mb-12 bg-blue-500 text-3xl text-white rounded-full">
            Contact Therapist
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
