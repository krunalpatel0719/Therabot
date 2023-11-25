import React from 'react';
import CircleIcon from './CircleIcon'

function MessageWithTime({className, icon, message1, message2, time}) {
  return (
    <div className = 'drop-shadow-xl scale-90 sm:scale-100 relative'> 
      <div className="flex items-start space-x-4 font-inter">
        <CircleIcon className ='mt-1 h-24 w-24' icon={icon}/>
        <div className="flex flex-col justify-center text-black pl-6 pt-4 flex-grow">
          <p className="text-2xl sm:text-3xl font-bold">{message1}</p>
          <p className="mt-2 text-sm font-bold flex-wrap">{message2}</p>
        </div>
        <div className="mt-5 pl-12 text-sm text-gray-500 whitespace-nowrap">
          {time}
        </div>
      </div> 
      <hr class="h-px mt-8  bg-black border-0 opacity-40 w-full"></hr> 
    </div> 
  );
}

export default MessageWithTime;