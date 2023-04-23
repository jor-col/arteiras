"use client";
import { useState } from "react";
import Image from "next/image";
import { getArt } from "@/sanity/sanity-utils";
import Link from "next/link";
import styles from "./artist.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

export default async function FeatArtist() {
  const mostRecent: any = await getArt();

  const month: any = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  return (
    <>
      <h1>{month[Number(mostRecent.slug.split("-")[0])]}</h1>
      {mostRecent.featured_artists.map((e: any, i: number) => (
        <div className={styles.artist} key={`${i + e.artist}`}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className={styles.swiper}
          >
            {e.images.map((image: any) => (
              <SwiperSlide key={image.asset.url} className={styles.swiperSlide}>
                <Image src={image.asset.url} alt="" width={100} height={100} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.info}>
            <div className={styles.infoHead}>
              <h2>{e.artist}</h2>
              <h3>{e.caption}</h3>
            </div>
            <div className={styles.infoContent}></div>
            <p>{e.description}</p>
            <a href={e.artist_url}>{e.artist_url}</a>
          </div>
        </div>
      ))}
      <div>
        <p>Previous Months</p>
        <Link href="featured_artist/04-2023">This</Link>
      </div>
    </>
  );
}
