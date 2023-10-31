import React from 'react';

const ButtonWithLabel = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center">
      <button className="w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center">
        {icon}
      </button>
      <div className="mt-2">{label}</div>
    </div>
  );
};

function Home() {
  return (
    <div className="bg-gradient-to-b from-BACKGROUND_BLUE to-white">
      <div className="overflow-x-hidden relative flex justify-center items-center h-screen w-screen">

        <div className="h-48 sm:h-48 md:h-64   w-full bg-blue-500 rounded-half absolute -top-20 sm:-top-20 md:-top-24  rotate-180 scale-110 z-0"></div>

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
