import Image from "next/image"
import styles from './page.module.css'
import { SiEtsy } from 'react-icons/si'
import { BsInstagram } from 'react-icons/bs'


export default function About() {
  return (
    <div className={styles.content}>
      <Image src='/mecca.jpg' alt='mecca' width={400} height={400} />
      <div className={styles.info}>
        <h1>Mecca</h1>
        <p>Mecca is a talented painter and tattooist, and separately owns her own tattoo shop in the heart of the New Orleans CBD. Her shop, Hell or High Water Tattoo, was recently voted the #1 shop in New Orleans by BestofNewOrleans.com! At Arteiras, her paintings and prints are on display and for sale. Find her and her tattoo shop at the links below.</p>

        <a className={styles.item} href="https://www.etsy.com/shop/MechaMeccaArt" target="_blank">
          <SiEtsy /> <p>Mecca's Etsy</p>
        </a>

        <a className={styles.item} href="https://www.instagram.com/mecha_mecca/" target="_blank">
          <BsInstagram /> <p>Mecca's Tattoos</p>
        </a>

        <a className={styles.item} href="https://www.instagram.com/hellorhighwaternola/" target="_blank">
          <BsInstagram /> <p>Hell or High Water Tattoos</p>
        </a>

      </div>

    </div>
  )
}
