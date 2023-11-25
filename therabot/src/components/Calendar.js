import React, { useState } from 'react';



function Calendar({ selectedDate, onDateChange }) {
  // Assuming you have a function to generate the days of the month
  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  function getDaysInMonth(date) {
    let result = [];
    let year = date.getFullYear();
    let month = date.getMonth();
    let firstDay = new Date(year, month, 1);
    let lastDay = new Date(year, month + 1, 0);
    
    // Get the first day of the week of the first day of the month
    let startDayOfWeek = firstDay.getDay();
    
    // Fill in days from previous month
    for (let i = 0; i < startDayOfWeek; i++) {
      result.push({ date: i - startDayOfWeek + 1, isSameMonth: false });
    }
    
    // Fill in days of the current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      result.push({ date: i, isSameMonth: true });
    }
    
    return result;
  }

  
  const daysInMonth = getDaysInMonth(selectedDate);
  const changeMonth = (num) => {
    const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + num, 1);
    onDateChange(newDate);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <button onClick={() => changeMonth(-1)}>{"<"}</button>
        <span>{selectedDate.toLocaleString('default', { month: 'long' })} {selectedDate.getFullYear()}</span>
        <button onClick={() => changeMonth(1)}>{">"}</button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center font-semibold">{day}</div>
        ))}
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className={`text-center p-2 rounded-full cursor-pointer ${day.isSameMonth ? 'bg-blue-200' : 'text-gray-400'}`}
            onClick={() => onDateChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day.date))}
          >
            {day.date}
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper function to generate days of the month

export default Calendar;