import React from 'react';
import CircleIcon from './CircleIcon'

function MessageWithTime({className, icon, message1, message2, time}) {
  return (
    <div className="flex items-start space-x-4 font-inter">
      <CircleIcon className ='h-24 w-24' icon={icon}/>
      <div className="flex flex-col justify-center text-black pl-6 pt-4">
        <p className="text-3xl font-bold">{message1}</p>
        <p className="text-sm font-bold">{message2}</p>
      </div>
      <div className="ml-auto text-gray-500 pt-6">
        {time}
      </div>
    </div> 
  );
}

export default MessageWithTime;