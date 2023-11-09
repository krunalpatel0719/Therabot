import React from 'react';

function Eclipse(props) { 
 
  return (
    
    <div className={`h-48 sm:h-48 md:h-64 w-full rounded-half absolute -top-20 sm:-top-20 md:-top-24 rotate-180 scale-110 z-0 ${props.className}`}></div>
 
  );
}

export default Eclipse;
