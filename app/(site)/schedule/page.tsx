// "use client";

import CalendarButton from "@/app/components/CalendarButton";
import Events from "@/app/components/Events";

import ical from "ical.js";

import "dotenv/config";



export default async function Schedule() {  
  let calendar: any;
  let url =
    "https://calendar.google.com/calendar/ical/arteirasgallery%40gmail.com/public/basic.ics";
  // let events;
  

  await fetch(url)
    .then((res) => {
      // let events = JSON.stringify(res);
      return res.text();
    }) // Fetch the response as plain text
    .then((text) => {
      const jcalData = ical.parse(text); // Parse the iCalendar data using ical.js
      const vcalendar = new ical.Component(jcalData);
      const vevents = vcalendar.getAllSubcomponents("vevent"); // Extract the VEVENT subcomponents
      calendar = vevents.map((vevent: any) => {
        const event = new ical.Event(vevent);
        return {
          event: event.summary,
          start: new Date(event.startDate.toJSDate().toString()),
          end: new Date(event.endDate.toJSDate().toString()),
          location: event.location,
          description: event.description,
        };
      });
    })
    .catch((err) => console.error("Error:", err));

  return (
    <>
      {calendar && <Events {...calendar.reverse()} />}
      <CalendarButton />
    </>
  );
}
