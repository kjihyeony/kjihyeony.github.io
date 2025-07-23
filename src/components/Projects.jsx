import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      id: 1,
      title: "프로젝트 1",
      description: "첫 번째 프로젝트입니다. React와 Node.js를 사용하여 개발했습니다.",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "프로젝트 2", 
      description: "두 번째 프로젝트입니다. Vue.js와 Express를 사용하여 개발했습니다.",
      tech: ["Vue.js", "Express", "PostgreSQL"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "프로젝트 3",
      description: "세 번째 프로젝트입니다. Angular와 Django를 사용하여 개발했습니다.",
      tech: ["Angular", "Django", "MySQL"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "프로젝트 4",
      description: "네 번째 프로젝트입니다. Next.js와 FastAPI를 사용하여 개발했습니다.",
      tech: ["Next.js", "FastAPI", "Redis"],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 5,
      title: "프로젝트 5",
      description: "다섯 번째 프로젝트입니다. Svelte와 Flask를 사용하여 개발했습니다.",
      tech: ["Svelte", "Flask", "SQLite"],
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      id: 6,
      title: "프로젝트 6",
      description: "여섯 번째 프로젝트입니다. Nuxt.js와 Spring Boot를 사용하여 개발했습니다.",
      tech: ["Nuxt.js", "Spring Boot", "H2"],
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        {
          opacity: 0,
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="projects" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card"
              ref={el => cardsRef.current[index] = el}
            >
              <div className="project-image">
                <div 
                  className="project-thumbnail"
                  style={{ background: project.gradient }}
                ></div>
                <div className="project-overlay">
                  <a href="#" className="project-link">View Project</a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 