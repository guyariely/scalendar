import React, { useState } from 'react';

const Day = ({ name, dayIndex }) => {

  const isActiveDay = () => {
    return new Date().getDay() == (dayIndex + 1)
  }

  return (
    <div className="day">
      <h1 className={isActiveDay() ? "dayNameActive" : "dayName"}>
        {name}
      </h1>
      <div className="dayBackground"></div>
    </div>
  );
};

export default Day;