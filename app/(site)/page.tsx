"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { FiMap, FiPhoneCall, FiMail, FiInstagram } from 'react-icons/fi'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <div className={styles.main}>
        <Image src="/Logo.webp" alt="" height={200} width={400} />
        <div className={styles.info}>
          <div className={styles.info_item}>
            <a
              href="maps:daddr=4011 St Claude Ave New Orleans, LA 70117&saddr=Current%20Location"
              target="_blank"
            >
              <FiMap className={styles.imgs} />
            </a>
            <h3>4011 St. Claude Ave, New Orleans, LA</h3>
          </div>
          <div className={styles.info_item}>
            <a href="mailto:ArteirasGallery@gmail.com">
              <FiMail className={styles.imgs} />
            </a>
            <h3>ArteirasGallery@gmail.com</h3>
          </div>
          <div className={styles.info_item}>
            <a href="tel:+1504-354-1663">
              <FiPhoneCall className={styles.imgs} />
            </a>
            <h3>504-354-1663</h3>
          </div>
          <div className={styles.info_item}>
            <a href="tel:+1504-354-1663">
              <FiInstagram className={styles.imgs} />
            </a>
            <h3>@arteirasgallery</h3>
          </div>
        </div>
        <p>
          Welcome to Arteiras Gallery and Boutique, a vibrant creative space
          owned and operated by local woman in the heart of New Orleans'
          Bywater neighborhood. Our gallery showcases the work of talented
          artists from diverse backgrounds, offering a unique and inspiring
          window into the city's rich cultural heritage. Our boutique is a
          treasure trove of handmade crafts, jewelry, and textiles, lovingly
          crafted by local artisans. We are proud to be a part of the New
          Orleans community, and we invite you to come and discover the beauty
          and creativity of Arteiras Gallery and Boutique.
        </p>
        {/* <DropboxImages /> */}
      </div>
      <video className={styles.video} autoPlay loop muted>
        <source src="art-gallery-vid.webm" type="video/mp4" />
        <source src="art-gallery-vid.mp4" type="video/mp4" />
      </video>
    </>
  );
}
