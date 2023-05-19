import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'

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
            <Footer/>
   </div>
  )
}
