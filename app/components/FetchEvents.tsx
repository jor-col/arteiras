import React from "react";

interface FetchEventsProps {
  calendar: any[];
}

export default function FetchEvents(props: FetchEventsProps) {
  const { calendar } = props;
  return (
    <>
      {calendar &&
        calendar.slice(0, 3)?.map((el: any, i: number) =>
          Object.entries(el)?.map((info: any, i: number) => {
            return i % 2 === 0 ? <b>{String(info)}</b> : <i>{String(info)}</i>;
          })
        )}
    </>
  );
}
