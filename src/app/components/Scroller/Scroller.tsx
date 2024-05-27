'use client'
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from "./scroller.module.css";

const Scroller = () => {
  
  const scroller = useRef<HTMLDivElement>(null);
  const scrollerInner = useRef<HTMLUListElement>(null);

  useEffect(() => {

    function addAnimation() {
      if (scroller.current !== null) scroller.current.setAttribute('data-animated', "true");
    }

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
    if (scrollerInner.current !== null) {
      const scrollerInnerContent = Array.from(scrollerInner.current.children);
      scrollerInnerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        scrollerInner.current.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <div className={styles.scroller} ref={scroller}>
      <ul className={styles.scroller__inner} ref={scrollerInner}>
        <li>
          <Image
            src='/annie-spratt-2skAoB8Rjzk-unsplash.jpg'
            alt='beetle interior'
            fill={true}
            style={{objectFit: 'cover'}}
            ></Image>
        </li>
        <li>
          <Image
            src='/annie-spratt-BPnEPgxY5SA-unsplash.jpg'
            alt='beetle interior'
            fill={true}
            style={{objectFit: 'cover'}}
            ></Image>
        </li>
        <li>
          <Image
            src='/fernando-venancio-da-silva-skTKCC0-Sy4-unsplash.jpg'
            alt='beetle interior'
            fill={true}
            style={{objectFit: 'cover'}}
            ></Image>
        </li>
        <li>
          <Image
            src='/tom-arrowsmith-7HNftpNvqho-unsplash.jpg'
            alt='beetle interior'
            fill={true}
            style={{objectFit: 'cover'}}
            ></Image>
        </li>
        <li>
          <Image
            src='/vasilios-muselimis-EocaKkccbxM-unsplash.jpg'
            alt='beetle interior'
            fill={true}
            style={{objectFit: 'cover'}}
            ></Image>
        </li>
        <li>
          <Image
            src='/wes-hicks-mDASgFtuMRQ-unsplash.jpg'
            alt='beetle interior'
            fill={true}
            style={{objectFit: 'cover'}}
            ></Image>
        </li>
      </ul>
    </div>
  )
}

export default Scroller;