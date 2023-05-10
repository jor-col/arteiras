"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getArtBySlug, getAllSlugs } from "@/sanity/sanity-utils";
import Link from "next/link";
import styles from "./artist.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";


export default function FeatArtist() {
  const [slug, setSlug] = useState<any>()
  const [selMonth, setSelMonth] = useState<any>()
  const [selYear, setSelYear] = useState<any>()
  const [artist, setArtist] = useState<any>()
  const [slugMonth, setSlugMonth] = useState<any>()
  const [slugYear, setSlugYear] = useState<any>()
  
  const month: any = {
    '01': "January",
    '02': "February",
    '03': "March",
    '04': "April",
    '05': "May",
    '06': "June",
    '07': "July",
    '08': "August",
    '09': "September",
    '10': "October",
    '11': "November",
    '12': "December",
  };
  
  useEffect(() => {
    const fullSlug: any = window.location.pathname.split('/').at(-1)
    getArtBySlug(fullSlug)
      .then(all => {
        console.log(all)
        setSlug(fullSlug.split('-')[0])
        setArtist(all[0].featured_artists)
      })
      .catch(err => console.log(err))
    getAllSlugs()
      .then(allSlugs => {
        const slugArr = allSlugs.map((e: any) => e.slug.current)
        const year = slugArr.map((e: any) => e.split('-')[1]).filter((val: any, ind: any, arr: any) => arr.indexOf(val) === ind)
        setSlugYear(year)
        setSelYear(year[0])
        const month = slugArr.map((e: any) => e.split('-')[0]).filter((val: any, ind: any, arr: any) => arr.indexOf(val) === ind).sort((a: any, b: any) => a - b)
        setSlugMonth(month)
        setSelMonth(month[0])
      })
      .catch(err => console.log(err))
  }, [slug])
  
  return (
    <>
      {slugMonth && <h1 className={styles.month}>{month[slug]}</h1>}
      {artist &&
        artist?.map((e: any, i: number) => (
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
                <h1>{e.artist}</h1>
                <h2>{e.caption}</h2>
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
        <div className={styles.selector}>
          <select name="month" id='year' onChange={(e: any) => setSelMonth(e.target.value)}>
            {slugMonth.map((e: any) => <option key={e} value={e}>{month[e]}</option>)}
          </select>
          <select name='year' id='year' onChange={(e: any) => setSelYear(e.target.value)}>
            {slugYear.map((e: any) => <option key={e} value={e}>{e}</option>)}
          </select>
          <Link href={`/featured_artist/${selMonth}-${selYear}`}>
            <button>Go</button>
          </Link>
        </div>
      }
    </>
  )
}
