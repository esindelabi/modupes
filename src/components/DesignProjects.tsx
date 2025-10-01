import React from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}

const projects: Project[] = [
    { 
        id: 1, 
        title: "Projet E-commerce Fantaisie", 
        description: "Création d'une interface utilisateur élégante pour une boutique en ligne. Technologies: React, CSS.", 
        image: "/src/assets/img/p2.jpg", 
        link: "#" 
    },
    { 
        id: 2, 
        title: "Refonte de Blog Minimaliste", 
        description: "Optimisation de l'expérience utilisateur et refonte graphique complète d'un blog. Technologies: Vite, TypeScript.", 
        image: "/src/assets/img/p1.jpg", 
        link: "#" 
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
                                    <a href={project.link} className="project-link">
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