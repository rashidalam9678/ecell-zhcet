import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ecell ZHCET</title>
        <meta name="description" content="Entrepreneurship Development Cell, ZHCET" />
        <link rel="icon" href="/assets/edc-logo-trans.png" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

      </Head>
      
    </div>
  )
}
