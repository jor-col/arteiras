'use client'
import styles from './page.module.css'



export default function Contact() {





  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <h1>Arteiras Gallery & Boutique</h1>
        <h2>4011 St Claude Ave</h2>
        <h2>New Orleans, LA 70117</h2>
        <h3>ArteirasGallery@gmail.com</h3>
        <h3>504-354-1663</h3>
      </div>

      <form className={styles.form}>
        <label>Name:</label>
        <input type="text" id="name" name="name" />

        <label>Email:</label>
        <input type="email" id="email" name="email" />

        <label>Subject:</label>
        <input type="text" id="subject" name="subject" />

        <label>Message:</label>
        <textarea id={styles.msg} name="msg" rows={10}></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
