import React, { useState } from 'react';
import Day from './Day';

const Calender = ({}) => {

  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className="calender">
      {dayNames.map((dayName, index) => {
        return <Day name={dayName} dayIndex={index} />
      })}
    </div>
  );
};

export default Calender;