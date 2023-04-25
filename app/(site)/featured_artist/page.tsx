"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getArt, getAllSlugs } from "@/sanity/sanity-utils";
import Link from "next/link";
import styles from "./artist.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";


export default function FeatArtist() {
  const [selMonth, setSelMonth] = useState<any>()
  const [selYear, setSelYear] = useState<any>()
  const [mostRecent, setMostRecent] = useState<any>()
  const [slugMonth, setSlugMonth] = useState<any>()
  const [slugYear, setSlugYear] = useState<any>()

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

  useEffect(() => {
    getArt().then(all => setMostRecent(all)).catch(err => console.log(err))
    getAllSlugs().then(allSlugs => {
      const slugArr = allSlugs.map((e: any) => e.slug.current)

      const year = slugArr.map((e: any) => e.split('-')[1]).filter((val: any, ind: any, arr: any) => arr.indexOf(val) === ind)
      setSlugYear(year)
      const month = slugArr.map((e: any) => e.split('-')[0]).filter((val: any, ind: any, arr: any) => arr.indexOf(val) === ind)
      setSlugMonth(month)

      setSelMonth(month[0])
      setSelYear(year[0])
    });
  }, [])


  return (
    <>
      {slugMonth && <h1 className={styles.month}>{month[Number(slugMonth[0])]}</h1>}

      {mostRecent &&
        mostRecent?.featured_artists.map((e: any, i: number) => (
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
              <div className={styles.infoContent}>
                <p>{e.description}</p>
                <a href={e.artist_url}>{e.artist_url}</a>
              </div>
            </div>
          </div>
        ))
      }

      {slugMonth &&
        <div>
          <select onChange={(e: any) => setSelMonth(e.target.value)}>
            {slugMonth.map((e: any) => <option key={e} value={e}>{month[Number(e)]}</option>)}
          </select>
          <select onChange={(e: any) => setSelYear(e.target.value)}>
            {slugYear.map((e: any) => <option key={e} value={e}>{e}</option>)}
          </select>
          <Link href={`/featured_artist/${selMonth}-${selYear}`}>
            <button>Go</button>
          </Link>
        </div>
      }

    </>
  );
}
