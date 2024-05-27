import Image from "next/image";
import { Raleway } from 'next/font/google';
import Scroller from './components/Scroller/Scroller';
import styles from "./page.module.css";

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['700'],
});

export default function Home() {
  return (
    <div className={raleway.className}>
      <div id={styles.banner}>
        <Image
          id={styles.bannerImage}
          src='/beetle-side-view.jpg'
          alt='orange beetle side view'
          fill={true}
          style={{ objectFit: 'contain' }}
        />
        <span id={styles.bannerTitle}>The Beetle Shop</span>
      </div>
      <main id={styles.main}>
        <div className={styles.section}>
          <h1 className={styles.heading}>Welcome To <span style={{textDecoration: 'underline'}}>The Beetle Shop</span></h1>
          <p>The #1 place for both used and restored classic Beetles. Come pay us a visit and find your dream car.</p>
        </div>
        <div className={`${styles.section} ${styles.alignRight}`}>
          <h1 className={styles.heading}>B.Y.O.B. <span style={{fontSize: '0.5em', fontStyle: 'italic'}}>(Bring Your Own Beetle)</span></h1>
          <p>Bring in your own car and we will walk you through any and all adjustments you want to make: from a fresh lick of paint to a full restoration, we've got you covered.</p>
        </div>
      <Scroller />
      </main>
    </div>
  );
}
