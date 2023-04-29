"use client"
import { useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  useEffect(() => {
    fetch("/api/test", {
      method: "GET",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
    , [])

  return (
    <>

      <div className={styles.main}>
        <Image src='/Logo.webp' alt='' height={200} width={400} />
        <a href="maps:daddr=4011 St Claude Ave New Orleans, LA 70117&saddr=Current%20Location" target="_blank">
          <h1>4011 St. Claude Ave, New Orleans, LA</h1>
          <p>Directions</p>
        </a>
        <a href='mailto:ArteirasGallery@gmail.com'>
          <h3>ArteirasGallery@gmail.com</h3>
        </a>
        <a href='tel:+1504-354-1663'>
          <h3>504-354-1663</h3>
        </a>
        <p>Welcome to Arteiras Gallery and Boutique, a vibrant creative space owned and operated by local women in the heart of New Orleans' Bywater neighborhood. Our gallery showcases the work of talented artists from diverse backgrounds, offering a unique and inspiring window into the city's rich cultural heritage. Our boutique is a treasure trove of handmade crafts, jewelry, and textiles, lovingly crafted by local artisans. We are proud to be a part of the New Orleans community, and we invite you to come and discover the beauty and creativity of Arteiras Gallery and Boutique.</p>
      </div>
      <video className={styles.video} autoPlay loop muted>
        <source src='art-gallery-vid.webm' type='video/mp4' />
        <source src='art-gallery-vid.mp4' type='video/mp4' />
      </video>
    </>
  )
}
