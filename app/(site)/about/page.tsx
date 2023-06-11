import Image from "next/image";
import styles from "./page.module.css";
import { SiEtsy } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

export default function About() {
  return (
    <div className={styles.content}>
      <Image src="/mecca.jpg" alt="mecca" width={400} height={400} />
      <div className={styles.info}>
        <h1>Mecca</h1>
        <p>
          Mecca is an accomplished artist based in New Orleans, known for her
          exceptional skills in both painting and tattooing. She is the proud
          owner of Hell or High Water Tattoo, a highly regarded tattoo shop
          located in the bustling Central Business District. Recently, her shop
          was voted as the best tattoo shop in the city by BestofNewOrleans.com,
          a recognition that speaks to her outstanding artistic abilities and
          dedication to her craft. Mecca&apos;s paintings and prints are on
          display and available for purchase at Arteiras, a local gallery that
          showcases her unique style and creative flair. Her artwork is a
          captivating blend of color, texture, and emotion, and her tattoos are
          renowned for their intricate designs and exceptional quality.
          Mecca&apos;s work is highly sought after and respected, and she has
          become one of the most influential artists in New Orleans&apos;
          vibrant and diverse arts scene. To learn more about Mecca and her
          exceptional artwork, links to her tattoo shop and Arteiras gallery are
          provided below.
        </p>
        <a
          className={styles.item}
          href="https://www.etsy.com/shop/MechaMeccaArt"
          target="_blank"
        >
          <SiEtsy /> <p>Mecca&apos;s Etsy</p>
        </a>
        <a
          className={styles.item}
          href="https://www.instagram.com/mecha_mecca/"
          target="_blank"
        >
          <BsInstagram /> <p>Mecca&apos;s Tattoos</p>
        </a>
        <a
          className={styles.item}
          href="https://www.instagram.com/hellorhighwaternola/"
          target="_blank"
        >
          <BsInstagram /> <p>Hell or High Water Tattoos</p>
        </a>
      </div>
    </div>
  );
}
