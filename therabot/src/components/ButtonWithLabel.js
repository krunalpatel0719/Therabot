import React from 'react';

function ButtonWithLabel({ icon, label }) {
  return (
    <div className="flex flex-col items-center">
        <div className="w-48 h-48 bg-BUTTON_GREY bg-opacity-90 dark:bg-opacity-40 rounded-3xl drop-shadow-lg shadow-lg flex items-center justify-center">
          <button className="w-full h-full flex items-center justify-center">
            {icon}
          </button>
        </div>
        <div className="mt-2 text-2xl font-bold text-black dark:text-white font-inter">{label}</div>
    </div> 
  );
}

export default ButtonWithLabel;