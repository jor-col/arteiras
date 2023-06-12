"use client";
import React, { useState } from "react";
import Calendar from "./Calendar";


const CalendarButton = () => {
  const [showCal, setShowCal] = useState<boolean>(false);

  return (
    <>
      <button style={{ margin: "1rem" }} onClick={() => setShowCal(!showCal)}>
        View Calendar
      </button>
      {showCal ? <Calendar /> : <></>}
    </>
  );
};

export default CalendarButton;
