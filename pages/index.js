import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Hero from '../components/Hero';
import AboutCard1 from '../components/about-card';
import AboutCard2 from '../components/about-card2';
import GalleryCard from '../components/GalleryCard';
import { getAllActivities } from "../constants/event-data";


export default function Home() {

const activities= getAllActivities()
      
  return (
    <div className={styles.container}>
      <Head>
        <title>Ecell ZHCET</title>
        <meta name="description" content="Entrepreneurship Development Cell, ZHCET Aligarh Muslim University" />
        <link rel="icon" href="/assets/edc-logo-trans.png" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Hero />
      <div className={styles.about_container}>
        <div className={styles.title}>
          <h1>About Us</h1>
        </div>
        <div className={styles.about}>
          <AboutCard1 />
          <AboutCard2 />
        </div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.title}>
          <h1>Our Activities</h1>
        </div>
        <div className={styles.grid}>
          <div className={styles.wrapper}>

              <GalleryCard  title="Workshops" src='/images/workshop.jpg'/>
              <GalleryCard  title="Lecture Series" src='/images/lectureseries.jpg'/>
              <GalleryCard  title="Invited Talk" src='/images/invitedtalk.png'/>
              <GalleryCard  title="Ideathon" src='/images/webinar.jpg'/>
              <GalleryCard  title="Webinars" src='/images/5.jpg'/>
              <GalleryCard  title="Team Building Activities" src='/images/6.jpg'/>

          </div>

        </div>
      </div>

    </div>
  )
}
