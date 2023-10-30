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
        <div class="bg-gradient-to-b from-BACKGROUND_BLUE to-white"> 
       
<div class="h-96 w-100 bg-[#000] rounded-[50%] absolute "></div>

             <div className="flex flex-col h-screen justify-between items-center p-16 ">
        <div className="text-5xl font-bold text-white">Home</div>

        {/* 2x2 Grid of Buttons */}
        <div className="grid grid-cols-2 gap-24 mt-8">
            <ButtonWithLabel icon="📝" label="Notes" />
            <ButtonWithLabel icon="🏋️" label="Exercises" />
            <ButtonWithLabel icon="⚙️" label="Settings" />
            <ButtonWithLabel icon="🔔" label="Notifications" />
        </div>

        {/* Contact Therapist Button */}
        <button className="w-full py-12  mt-8 mb-4 bg-blue-500 text-3xl text-white rounded-full md:py-4 sm:py-4">
            Contact Therapist
        </button>
        </div>
    </div> 
    );
}

export default Home;
