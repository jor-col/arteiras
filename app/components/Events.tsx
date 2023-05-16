"use client";
import React, { useEffect, useState, FC } from "react";
import moment from "moment";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

import styles from "@/app/(site)/schedule/schedule.module.css";

import Event from "./Event";

export type Calendar = {
  description: string;
  end: string;
  event: string;
  location: string;
  start: string;
};

const Events = (calendar: Calendar[]) => {
  const [today, setToday] = useState<Date>({} as Date);
  const [month, setMonth] = useState<string>("");
  const [filteredCalendar, setfilteredCalendar] = useState<Calendar[]>(
    [] as Calendar[]
  );
  console.log(calendar);
  console.log("Date:", today);
  console.log("Month:", month);
  console.log("Filtered Calendar:", filteredCalendar);
  useEffect(() => {
    // setToday(moment().format("D"));
    setToday(new Date());
    setMonth(moment().format("MMMM"));
  }, []);

  useEffect(() => {
    console.log("calendar has changed");
    setfilteredCalendar(
      Object.values(calendar).filter((date: any) => {
        return date.start >= today;
      }) as Calendar[]
    );
  }, [calendar, today]);

  return (
    <div className={styles.borderBoxBg}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.swiper}
      >
        {filteredCalendar.slice(0, 6)?.map((el: any, i: number) => (
          <SwiperSlide key={el + i} className={styles.cardBgBox}>
            <Event {...el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Events;
