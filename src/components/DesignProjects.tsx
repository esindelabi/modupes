import React from 'react';
import projectImage1 from '../assets/img/p1.png';
import projectImage2 from '../assets/img/p2.png';
import projectImage3 from '../assets/img/cert.png';
import projectImage4 from '../assets/img/p3.png';
interface Project {
   id: number;
    title: string;
    description: string;
    image: string;
    link: string; 
    isExternal: boolean;
}

const projects: Project[] = [
    { 
        id: 1, 
        title: "Projet E-commerce Fantaisie", 
        description: "Création d'une interface utilisateur élégante pour une boutique en ligne. Technologies: React, CSS.", 
        image: projectImage2, 
        link: "#",
        isExternal: true
    },
    { 
        id: 2, 
        title: "Épopée des rois", 
        description: "Projet en cours... Jeu video", 
        image: projectImage1, 
        link: "#",
        isExternal: true
    },

    {
        id: 3,
        title: "Certifications FreeCodeCamp",
        description: "Attestations de complétion des parcours de Web Design Responsif et Algorithmes JavaScript.",
        image: projectImage3, 
        link: "https://www.freecodecamp.org/mondukpe_sounton",
        isExternal: true
    },
     {
        id: 4,
        title: "TodoApp",
        description: "Une application pour gérer plus aisément vos tâches.",
        image: projectImage4, 
        link: "#",
        isExternal: true
    },
];


const DesignProjects: React.FC = () => {
    return (
        <section id="design" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Projets Web Design</h2>
                <div className="projects-grid">
                    
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            className="project-card"
                        >
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="project-image"
                            />
                            
                            <div className="project-overlay">
                                <div className="project-details">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    
                                    <a 
                                        href={project.link} 
                                        className="project-link"
                                        target={project.isExternal ? "_blank" : "_self"}
                                        rel={project.isExternal ? "noopener noreferrer" : undefined}
                                    >
                                        Voir le projet
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
    );
};

export default DesignProjects;