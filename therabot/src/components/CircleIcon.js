import React from 'react';

function CircleIcon({className, icon}) {
  return (
    <div className="flex flex-col items-center">
        <button className={`${className} bg-BUTTON_GREY opacity-90 rounded-full drop-shadow-lg shadow-lg flex items-center justify-center`}>
        {icon}
        </button>
        
    </div> 
  );
}

export default CircleIcon;
