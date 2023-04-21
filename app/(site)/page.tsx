import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.main}>
      <Image src='/Logo.webp' alt='' height={200} width={400} />
      <h1>4011 St. Claude Ave, New Orleans, LA</h1>
      <p>Arteiras Gallery and Boutique is a local, woman owned creative space located in the Bywater neighborhood in New Orleans</p>
    </div>
  )
}
