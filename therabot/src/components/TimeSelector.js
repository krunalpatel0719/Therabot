import React from 'react';

const TimeSelector = ({ availableTimes, selectedTime, onTimeChange }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 ">
      {availableTimes.map(time => (
        <button
          key={time}
          className={`p-2 lg:p-4 m-1 rounded-lg border hover:bg-blue-100 ${selectedTime === time ? 'hover:bg-blue-500 bg-blue-500 text-white' : 'border-black'}`}
          onClick={() => onTimeChange(time)}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default TimeSelector;