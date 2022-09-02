import React from 'react'
import { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { projectsNames } from './data';

export default function Application() {
const [projects, setProjects]= useState(projectsNames)
const[index, setIndex] = useState(0)


useEffect(() => {
    const lastIndex = projects.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, projects]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

return(
  <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Projects
        </h2>
      </div>
      <div className="section-center">
        {projects.map((project, projectIndex) => {
          const { id, image, name, description, url, github } = project;

          let position = 'nextSlide';
          if (projectIndex === index) {
            position = 'activeSlide';
          }
          if (
            projectIndex === index - 1 ||
            (index === 0 && projectIndex === projects.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="project-img" />
              <h4>{name}</h4>
              {/* <p className="title">{title}</p> */}
              <p className="text">{description}</p>
              {/* <FaQuoteRight className="icon" /> */}
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
)
}
