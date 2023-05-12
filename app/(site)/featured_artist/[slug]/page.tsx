"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getArtBySlug, getAllSlugs } from "@/sanity/sanity-utils";
import Link from "next/link";
import styles from "../artist.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";


export default function FeatArtist() {
  const [artist, setArtist] = useState<any>()
  const [slugMonth, setSlugMonth] = useState<any>()
  const [slugs, setSlugs] = useState<any>()
  const [selSlugs, setSelSlug] = useState<any>()


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
        setArtist(all[0].featured_artists)
      })
      .catch(err => console.log(err))
    getAllSlugs()
      .then(allSlugs => {
        const slugArr = allSlugs
          .map((e: any) => e.slug.current)
          .sort((a: any, b: any) => Number(b.split('-')[1] + b.split('-')[0]) - Number(a.split('-')[1] + a.split('-')[0]))
        setSlugs(slugArr)
        setSlugMonth(slugArr[0].split('-')[0])
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <>
      {slugMonth && <h1 className={styles.month}>{month[slugMonth]}</h1>}
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

      {slugs &&
        <div className={styles.selector}>
          <select onChange={(e: any) => setSelSlug(e.target.value)}>
            {slugs.map((e: any) => <option key={e} value={e}>{month[(e.split('-')[0])]} {e.split('-')[1]}</option>)}
          </select>
          <Link href={`/featured_artist/${selSlugs}`}>
            <button>Go</button>
          </Link>
        </div>
      }
    </>
  )
}
