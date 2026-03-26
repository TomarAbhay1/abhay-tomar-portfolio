import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "../style/Navbar.module.css";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        <Link className={styles.link} to="/">Abhay Tomar</Link>
      </div>

      <div 
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <nav>
        <ul className={`${styles.navList} ${menuOpen ? styles.active : ""}`}>
          <li><Link className={styles.navLink} to="/">Home</Link></li>
          <li><Link className={styles.navLink} to="/about">About</Link></li>
          <li><Link className={styles.navLink} to="/projects">Projects</Link></li>
          <li><Link className={styles.navLink} to="/contact">Contact</Link></li>
        </ul>
      </nav>

    </header>
  )
}