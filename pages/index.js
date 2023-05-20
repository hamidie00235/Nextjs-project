import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  <Head>
  <title>Ninja list | Home</title>
  <meta name="keywords" content="ninjas"/>
  </Head>
   <div>

    <h1 className={styles.title}>Homepage</h1>
    <p className={styles.text} > baskı testi yapacakken örnek 
            metinlere ihtiyaç duyduğumuzda kullanabileceğimiz 
            metinlerdir</p>
            <p className={styles.text}  >baskı testi yapacakken örnek 
            metinlere ihtiyaç duyduğumuzda kullanabileceğimiz 
            metinlerdir</p>
            <Link href="/ninjas" className={styles.btn} >
            See Ninja List
            </Link>
           
   </div>
   </>
  );
}
