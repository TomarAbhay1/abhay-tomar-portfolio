import React from 'react'
import Forms from './Forms';
import ToDoList from './ToDoList';
import styles from '../style/Projects.module.css';
import { Link } from "react-router-dom";


export default function Projects() {
   const projectData = [
    {
      title: "To-Do List",
      description: "A simple app to manage daily tasks.",
      path: "/todo"
    },
    {
      title: "Contact Form",
      description: "Form with validation using JavaScript.",
      path: "/forms"
    }
  ];

  return (
    <div>
      <div className={styles.ContentDiv}>
        <h1 className={styles.heading}>My Projects</h1>

        <div className={styles.projects}>
          {projectData.map((project, index) => (
           <div className={styles.card} key={index}>
             <h2>{project.title}</h2>
             <p>{project.description}</p>
             <div className={styles.btnContainer}>
               <Link to={project.path}>
                <button>Live Demo</button>
              </Link>
             </div>
           </div>
            ))}
        </div>
      </div>

    </div>
  )
}
