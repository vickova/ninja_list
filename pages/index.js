import Head from 'next/head'
import Image from 'next/image';
import Navbar from '@/comps/Navbar';
import Footer from '@/comps/Footer';
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquid atque illo iste tempora, non aut. Praesentium, rem perferendis ratione est modi nostrum nihil totam ad maiores accusamus? Beatae, est!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur ad earum similique distinctio animi nobis cupiditate totam dolorum laboriosam illum, harum illo assumenda, corporis repellendus neque et. Quo, amet?</p>
      <Link href="/ninjas" className={styles.btn}>
      See Ninja Listing</Link>
    </div>
    </>
  )
}
