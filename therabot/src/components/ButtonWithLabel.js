import React from 'react';

function ButtonWithLabel({ icon, label }) {
  return (
    <div className="flex flex-col items-center">
        <button className="w-48 h-48 bg-BUTTON_GREY opacity-90 rounded-3xl drop-shadow-lg shadow-lg flex items-center justify-center">
        {icon}
        </button>
        <div className="mt-2 text-2xl font-bold text-black font-inter">{label}</div>
    </div> 
  );
}

export default ButtonWithLabel;
