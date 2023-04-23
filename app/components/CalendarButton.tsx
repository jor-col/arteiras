"use client";
import React, { useState, useEffect, Suspense } from "react";
import { ImSpinner2 } from "react-icons/im";
import Calendar from "./Calendar";
import Loading from "./Loading";

const CalendarButton = () => {
  const [showCal, setShowCal] = useState<boolean>(false);

  return (
    <>
      <h1>Calendar Button</h1>
      <button onClick={() => setShowCal(!showCal)}>View Calendar</button>
      {showCal ? <Calendar /> : <></>}
    </>
  );
};

export default CalendarButton;
