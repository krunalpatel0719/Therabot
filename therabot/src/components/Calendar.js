import React, { useState } from 'react';

import {ChevronLeftIcon } from "@heroicons/react/24/solid";

import {ChevronRightIcon } from "@heroicons/react/24/solid";


function getDaysInMonth(date) {
  let result = [];
  let year = date.getFullYear();
  let month = date.getMonth();
  let firstDay = new Date(year, month, 1);
  let lastDay = new Date(year, month + 1, 0);

  // Adjust for the calendar where the week starts on Monday
  let startDayOfWeek = firstDay.getDay();
  startDayOfWeek = (startDayOfWeek === 0 ? 7 : startDayOfWeek); // Convert Sunday from 0 to 7

  // Calculate the previous month's days to show at the start of the current calendar
  let previousMonth = new Date(year, month, 0); // Last day of the previous month
  let daysInPreviousMonth = previousMonth.getDate(); // Total days in the previous month

  // Add days from the previous month to fill the first week
  for (let i = startDayOfWeek; i > 1; i--) {
    result.push({ date: daysInPreviousMonth - i + 2, isSameMonth: false });
  }

  // Add days of the current month
  for (let i = 1; i <= lastDay.getDate(); i++) {
    result.push({ date: i, isSameMonth: true });
  }

  return result;
}

function isSelectedDay(day, selectedDate) {
  // Make sure the day object and the selectedDate are from the same month and year
  if (day.isSameMonth) {
    const selectedDay = selectedDate.getDate();
    const selectedMonth = selectedDate.getMonth();
    const selectedYear = selectedDate.getFullYear();

    const dayDate = new Date(selectedYear, selectedMonth, day.date);
    return selectedDay === dayDate.getDate() &&
           selectedMonth === dayDate.getMonth() &&
           selectedYear === dayDate.getFullYear();
  }
  return false;
}


function Calendar({ selectedDate, onDateChange }) {
  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const daysInMonth = getDaysInMonth(selectedDate);

  const changeMonth = (num) => {
    const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + num, 1);
    onDateChange(newDate);
  };

  return (
    <div className="pb-2 max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
      <div className="flex justify-between items-center pb-6 font-inter">
        
        <button className='text-3xl sm:text-5xl' onClick={() => changeMonth(-1)}> <ChevronLeftIcon className = 'h-8 w-8'/> </button>
        <span className='text-2xl sm:text-3xl font-bold '>{selectedDate.toLocaleString('default', { month: 'long' })} {selectedDate.getFullYear()}</span>
        <button className='text-3xl sm:text-5xl' onClick={() => changeMonth(1)}> <ChevronRightIcon className = 'h-8 w-8'/> </button>
      </div>
      <div className="grid grid-cols-7 gap-1 font-inter">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center font-semibold text-lg lg:text-2xl pb-2">{day}</div>
        ))}
       {daysInMonth.map((day, index) => (
        <button
          key={index}
          className={`text-center sm:text-xl lg:text-2xl font-semibold p-2 sm:p-4 lg:p-5 cursor-pointer flex items-center justify-center ${isSelectedDay(day, selectedDate) ? 'bg-blue-500 text-white' : day.isSameMonth ? 'bg-gray-200' : 'cursor-default'}`}
          onClick={day.isSameMonth ? () => onDateChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day.date)) : undefined}
          >
          {day.date}
        </button>
      ))}
      </div>
    </div>
  );
}


// Helper function to generate days of the month

export default Calendar;