import Image from "next/image";
import { Raleway } from 'next/font/google';
import Navbar from "./components/Navbar/Navbar";
import Scroller from './components/Scroller/Scroller';
import styles from "./page.module.css";

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['700'],
});

export default function Home() {
  return (
    <div className={raleway.className}>
      <Navbar />
      <div id={styles.banner}>
        <Image
          id={styles.bannerImage}
          src='/beetle-side-view.jpg'
          alt='orange beetle side view'
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <main id={styles.main}>
        <div className={styles.section}>
          <h1 className={styles.heading}>Welcome To <span style={{textDecoration: 'underline'}}>The Beetle Shop</span></h1>
          <p>The #1 place for both used and restored classic Beetles. Come pay us a visit and find your dream car.</p>
        </div>
      <Scroller />
      </main>
    </div>
  );
}
