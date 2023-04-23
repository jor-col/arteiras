// "use client";

import CalendarButton from "../../components/CalendarButton";
import ical from "ical.js";

export default async function Schedule() {
  const httpRegex = /\b(?:https?:\/\/)\S+\b/g;
  const fbRegex = /\bfb:\/\/\S+\b/g;
  let eventUrl, fbUrl;
  let calendar: any;
  let url =
    "https://calendar.google.com/calendar/ical/arteirasgallery%40gmail.com/public/basic.ics";

  await fetch(url)
    .then((res) => res.text()) // Fetch the response as plain text
    .then((text) => {
      const jcalData = ical.parse(text); // Parse the iCalendar data using ical.js
      const vcalendar = new ical.Component(jcalData);
      const vevents = vcalendar.getAllSubcomponents("vevent"); // Extract the VEVENT subcomponents
      calendar = vevents.map((vevent: any) => {
        const event = new ical.Event(vevent);
        // console.log("ICAL EVENT", event.component.jCal.description);
        // console.log("VEVENT", vevent.jCal.description);
        console.log("EVENT", event.component);
        console.log("VEVENT", vevent.jCal);
        return {
          Event: event.summary,
          start: event.startDate.toJSDate().toString(),
          end: event.endDate.toJSDate().toString(),
          location: event.location,
          description: event.description,
        };
      });
      console.log("Events:", calendar); // Log the events to the console
    })
    .catch((err) => console.error("Error:", err));

  return (
    <>
      <h1>Schedule</h1>
      <>
        {calendar &&
          calendar.slice(0, 6)?.map((el: any, i: number) =>
            Object.entries(el)?.map((info: any, i: number) => {
              return i % 2 === 0 ? (
                <div>
                  <span>
                    <b>{`${String(info.slice(",")[0])}: `}</b>
                  </span>
                  <span>
                    <i>
                      {String(info).match(httpRegex) ||
                      String(info).match(fbRegex) ? (
                        <a
                          href={String(info)
                            /* .split("https://") */
                            /* .join("") */
                            .match(httpRegex)
                            ?.join("")}
                        >{`${String(info.slice(",")[1])}`}</a>
                      ) : (
                        `${String(info.slice(",")[1])}`
                      )}
                    </i>
                  </span>
                </div>
              ) : (
                <div>
                  <span>
                    <b>{`${String(info.slice(",")[0])}: `}</b>
                  </span>
                  <span>
                    <i>{`${String(info.slice(",")[1])}`}</i>
                  </span>
                </div>
              );
            })
          )}
      </>
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
