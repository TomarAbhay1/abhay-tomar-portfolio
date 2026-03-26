import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/Home.module.css";

export default function Home() {
  return (
    <section className={styles.ContentBody}>
    
      {/* Left Content */}
      <div className={styles.bodyContainer1}>

        <h3 className={styles.one}>
          Welcome to my portfolio
        </h3>

        <h1 className={styles.two}>
          Hello, My Name is Abhay Tomar
        </h1>

        <p className={styles.three}>
          Frontend Developer specializing in React and modern web technologies.
        </p>

        <div className={styles.four}>
          <a
            href="/Resume-Abhay-Singh-Tomar.pdf"
            download
            className={styles.downloadBtn}
          >
            ⬇ Download CV
          </a>

          <Link to="/projects" className={styles.F2}>
            See My Work
          </Link>
        </div>

      </div>

      {/* Right Content */}
      <div className={styles.bodyContainer2}>

        <img
          className={styles.pic}
          src="/images/profile.jpg"
          alt="Portrait of Abhay Tomar"
        />

        <div className={styles.socialLinksDiv}>

          <a
            href="https://github.com/TomarAbhay1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/abhay-tomar-633a7624a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://www.instagram.com/abhaytomar114/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            href="https://x.com/abhayto14394974"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>

        </div>

      </div>

    </section>
  );
}