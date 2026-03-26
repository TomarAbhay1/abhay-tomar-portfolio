import React from 'react'
import styles from "../style/About.module.css"

export default function About() {
  return (
    <div>
      <div className={styles.content}>
            <div className={styles.A}>
                <h1 className={styles.heading}>Hi i'm Abhay Singh Tomar</h1>
                <p className={styles.desc}>A Web Developer Passionate about creating clean and responsive websites</p>
            </div>
            <div className={styles.A}>
                <h1 className={styles.heading}>My background</h1>
                <p className={styles.desc}>I am from Gwalior. I have a BSc from Jiwaji University, Gwalior and an MCA from IPS Academy Indore. I love building Projects with ReactJS. I have also completed a fronted Development (ReactJS) course from CodeBetter, Indore.</p>
            </div>
            <div className={styles.A}>
                <h1 className={styles.heading}>Skills</h1>
                <p className={styles.desc}>Git, GitHub, VS Code, npm, Chrome DevTools, REST API, MS word, MS Excel, MS Powerpoint, C, HTML5, CSS3, JSON, XML, Responsive Design (Flexbox, CSS Grid, MediaQuery, Bootstrap, Tailwind CSS), JavaScript(Event Handling, Object-Oriented Programming (OOP), ES6+ JavaScript, API Integration, Asynchronous JavaScript (Promises / Fetch),Basic Data Structures (Arrays, Objects)), ReactJS(JSX, Conditional Rendering, React Hooks, Form Handling, React Hook Form, API fetching, State Management, ), MySQL( CRUD operations, Join operatoins), MongoDB(Creating collections and documents, CRUD operations, Using MongoDB queries, Working with JSON-based data, Basic aggregation). </p>
            </div>
            <div className={styles.four}><a href="./Resume Abhay Singh Tomar.pdf" className={styles.downloadBtn}> ⬇ Download CV</a></div>
        </div>
    </div>
  )
}
