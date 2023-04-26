'use client'
import styles from './page.module.css'
import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [subject, setSubject] = useState<string>()
  const [msg, setMsg] = useState<string>()


  const handleSubmit = () => {
    if (name && email && msg) {
      axios.post('/api/email', { body: { name, email, subject, msg } })
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }


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
        <input onChange={e => setName(e.target.value)} type="text" id="name" name="name" />

        <label>Email:</label>
        <input onChange={e => setEmail(e.target.value)} type="email" id="email" name="email" />

        <label>Subject:</label>
        <input onChange={e => setSubject(e.target.value)} type="text" id="subject" name="subject" />

        <label>Message:</label>
        <textarea onChange={e => setMsg(e.target.value)} id={styles.msg} name="msg" rows={10}></textarea>

        <button onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div>
  )
}
