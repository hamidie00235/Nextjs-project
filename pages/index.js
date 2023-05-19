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
   <div>
    <Navbar/>
    <h1>Homepage</h1>
    <p>baskı testi yapacakken örnek 
            metinlere ihtiyaç duyduğumuzda kullanabileceğimiz 
            metinlerdir</p>
            <p>baskı testi yapacakken örnek 
            metinlere ihtiyaç duyduğumuzda kullanabileceğimiz 
            metinlerdir</p>
            <Link href="/ninjas" >
            <a>See Ninja List</a>
            </Link>
            <Footer/>
   </div>
  )
}
