// "use client";

import CalendarButton from "../../components/CalendarButton";
import moment from "moment";
import ical from "ical.js";
import styles from "./schedule.module.css";

import "dotenv/config";
import Link from "next/link";

const { GOOGLE_CAL_API, ARTEIRAS_CAL_ID } = process.env;

export default async function Schedule() {
  const regex = /(?:\S+\s+)?(\S{3,5}:\/\/\S+)\s*/g;
  const httpRegex = /((?:https?:\/\/)\S+)/g;
  const fbRegex = /\bfb:\/\/\S+\b/g;
  let eventUrl, fbUrl;
  let calendar: any;
  let url =
    "https://calendar.google.com/calendar/ical/arteirasgallery%40gmail.com/public/basic.ics";
  // let events;
  let matchRegex = /\S*:\/\/\S*/;

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
        // console.log("ICAL EVENT", event.component.jCal.description);
        // console.log("VEVENT", vevent.jCal.description);
        // console.log("EVENT", event.component);
        // console.log("VEVENT", vevent.jCal);
        return {
          event: event.summary,
          start: event.startDate.toJSDate().toString(),
          end: event.endDate.toJSDate().toString(),
          location: event.location,
          description: event.description,
        };
      });
      // console.log("Events:", calendar); // Log the events to the console
    })
    .catch((err) => console.error("Error:", err));

  return (
    <>
      <h1>
        <b>
          <u>Schedule</u>
        </b>
      </h1>
      {/* <div className={styles.borderBoxBg}> */}
      <div className={styles.borderBoxGlass}>
        <div className={styles.borderBox}>
          {calendar &&
            calendar.slice(0, 6)?.map((el: any, i: number) => (
              <div key={el + i} className={styles.cardBgBox}>
                <div className={styles.cardBg}>
                  <div className={styles.card}>
                    <h1>Event</h1>
                    <span>{el.event}</span>
                    <h2>Start</h2>
                    <span>
                      {moment(el.start).format("MMM Do YYYY, h:mm a")}
                    </span>
                    <h2>End</h2>
                    <span>{moment(el.end).format("MMM Do YYYY, h:mm a")}</span>
                    <h2>Location</h2>
                    <span>
                      {el.location ? el.location : "Arteiras Gallery"}
                    </span>
                    {el.description && (
                      <>
                        <h2>Description</h2>
                        {el.description
                          .split(/\s+/g)
                          .map((word: any, index: number) => {
                            if (/\bhttps?:\/\/\S+\b/.test(word)) {
                              // If the word is a URL, create a link element
                              return (
                                <a
                                  key={index}
                                  href={word}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {word}
                                </a>
                              );
                            } else {
                              return <></>;
                            }
                          })}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* </div> */}
      <CalendarButton />
    </>
  );
}

{
  /* <-- renders entire google calendar, limited styling options --> */
}
{
  /* <div style={{ width: "1300px", height: "790px" }}>
<iframe
  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=YXJ0ZWlyYXNnYWxsZXJ5QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679"
  style={{
    border: "solid 1px #777",
    width: "1300px",
    height: "790px",
  }}
></iframe>
</div> */
}

// <-- default fetch API call for calendar -->
// let options = {
//   method: "GET",
//   headers: {
//     Accept: "*/*",
//     "User-Agent": "Thunder Client (https://www.thunderclient.com)",
//   },
// };

// fetch(url, options)
//   .then((res: any) => res.text())
//   .then((json: any) => console.log(json))
//   .catch((err: any) => console.error("error:" + err));

{
  /* <button
        onClick={() => {
          <div style={{ width: "1300px", height: "790px" }}>
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=YXJ0ZWlyYXNnYWxsZXJ5QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679"
              style={{
                border: "solid 1px #777",
                width: "1300px",
                height: "790px",
              }}
            ></iframe>
          </div>;
        }}
      >
        View Calendar
      </button> */
}
