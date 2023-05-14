"use client";
import React, { useEffect, useState, FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

import styles from "@/app/(site)/schedule/schedule.module.css";

import Event from "./Event";

const Events = (calendar: any) => {
  return (
    <div className={styles.borderBoxBg}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.swiper}
      >
        {Object.values(calendar)
          .slice(0, 6)
          ?.map((el: any, i: number) => (
            <SwiperSlide key={el + i} className={styles.cardBgBox}>
              <Event {...el} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Events;
