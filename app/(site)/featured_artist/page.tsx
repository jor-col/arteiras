'use client'
import Image from "next/image";
import { getArt } from "@/sanity/sanity-utils";
import Link from "next/link";
import styles from './artist.module.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

export default async function FeatArtist() {

  const mostRecent: any = await getArt()

  return (
    <>
      <h1>{mostRecent.slug}</h1>
      <h1>{mostRecent.month}</h1>
      {mostRecent.featured_artists.map((e: any, i: number) => (
        <div className={styles.artist} key={`${i + e.artist}`}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="swiper"
          >
            {e.images.map((image: any) =>
              <SwiperSlide key={image.asset.url} className="swiper-slide">
                <Image src={image.asset.url} alt='' width={100} height={100} />

              </SwiperSlide>
            )}
          </Swiper>
          <div className={styles.info}>
            <h2>{e.artist}</h2>
            <h3>{e.caption}</h3>
            <p>{e.description}</p>
            <a href={e.artist_url}>{e.artist_url}</a>
          </div>

        </div>
      ))}
      <div>
        <p>Previous Months</p>
        <Link href='featured_artist/04-2023'>This</Link>
      </div>

    </>
  )
}
