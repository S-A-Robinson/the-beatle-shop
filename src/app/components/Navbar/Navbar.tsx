'use client';
import { useState } from 'react';
import styles from './navbar.module.css';

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 180) setIsScrolled(true);
    else setIsScrolled(false);
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.header__bg : ''}`}>
      <nav>

      </nav>
      <span className={`${styles.title} ${isScrolled ? styles.title_scrolled : ''}`}>The Beetle Shop</span>
  </header>
  )
}

export default Navbar;