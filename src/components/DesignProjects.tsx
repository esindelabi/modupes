import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import projectImage1 from '../assets/img/p1.png';
import projectImage2 from '../assets/img/p2.png';
import projectImage3 from '../assets/img/cert.png';
import projectImage4 from '../assets/img/p3.png';
import Reveal from './Reveal';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    isExternal: boolean;
    tag: string;
    techs: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: 'E-commerce Fantaisie',
        description: "Création d'une interface utilisateur élégante pour une boutique en ligne.",
        image: projectImage2,
        link: '#',
        isExternal: true,
        tag: 'UI/UX',
        techs: ['React', 'CSS'],
    },
    {
        id: 2,
        title: 'Épopée des rois',
        description: 'Jeu vidéo en cours de développement, une aventure épique en pixel art.',
        image: projectImage1,
        link: '#',
        isExternal: true,
        tag: 'En cours',
        techs: ['Jeu vidéo'],
    },
    {
        id: 3,
        title: 'Certifications FreeCodeCamp',
        description: 'Attestations de complétion des parcours Web Design Responsif et Algorithmes JavaScript.',
        image: projectImage3,
        link: 'https://www.freecodecamp.org/mondukpe_sounton',
        isExternal: true,
        tag: 'Certifications',
        techs: ['FreeCodeCamp'],
    },
    {
        id: 4,
        title: 'TodoApp',
        description: 'Une application pour gérer plus aisément vos tâches quotidiennes.',
        image: projectImage4,
        link: '#',
        isExternal: true,
        tag: 'Application',
        techs: ['React'],
    },
];

const DesignProjects: React.FC = () => {
    return (
        <section id="design" className="section projects-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Design & Créations</span>
                    <h2 className="section-title">
                        Projets <em>web design</em>
                    </h2>
                    <p className="section-subtitle">
                        Une sélection de réalisations où le visuel et le code se rencontrent.
                    </p>
                </div>

                <Reveal className="projects-grid">
                    {projects.map((project, index) => (
                        <Reveal key={project.id} delay={index * 100} className="project-card">
                            <div className="project-media">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <span className="project-badge">{project.tag}</span>

                                <div className="project-body">
                                    <h3 className="project-title">{project.title}</h3>
                                    <div className="project-tags">
                                        {project.techs.map((tech) => (
                                            <span key={tech} className="project-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="project-description">{project.description}</p>
                                    <a
                                        href={project.link}
                                        className="project-link"
                                        target={project.isExternal ? '_blank' : '_self'}
                                        rel={project.isExternal ? 'noopener noreferrer' : undefined}
                                        aria-label={`Voir le projet ${project.title}`}
                                    >
                                        Voir le projet
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </Reveal>
            </div>
        </section>
    );
};

export default DesignProjects;