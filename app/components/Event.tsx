"use client";

import React from "react";
import moment from "moment";

import styles from "@/app/(site)/schedule/schedule.module.css";

const Event = (el: any) => {
  return (
    <div className={styles.card}>
      <h1>{el.event}</h1>
      {/* <span>{el.event}</span> */}
      <h2>Date</h2>
      <span>{moment(el.start).format("MMM D YYYY")}</span>
      <span>{`${moment(el.start).format("h:mm a")} - ${moment(el.end).format(
        "h:mm a"
      )}`}</span>
      <h2>Location</h2>
      <a
        href={
          el.location
            ? `http://maps.google.com/maps?q=${el.location
                .split(" ")
                .join("+")}`
            : `http://maps.google.com/maps?q=4011+St.+Claude+Ave,+New+Orleans,+LA`
        }
        target="blank"
        rel="noopener noreferrer"
      >
        {el.location ? el.location : "Arteiras Gallery"}
      </a>
      {el.description && (
        <>
          {el.description.split(/\s+/g).map((word: any, index: number) => {
            if (/\bhttps?:\/\/\S+\b/.test(word)) {
              // If the word is a URL, create a link element
              return (
                <a
                  key={index + word}
                  href={word}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Event Details
                </a>
              );
            } else {
              return <></>;
            }
          })}
        </>
      )}
    </div>
  );
};

export default Event;
