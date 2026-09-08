import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { FaBriefcase } from 'react-icons/fa';
import aboutMeImage from '../assets/img/profile.png';
import Reveal from './Reveal';

const stats = [
    { value: '2+', label: 'Années de code' },
    { value: '4', label: 'Langues parlées' },
    { value: '6+', label: 'Technologies' },
    { value: '100%', label: 'Passion' },
];

const About: React.FC = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <Reveal className="about-content">
                    <div className="about-media">
                        <img src={aboutMeImage} alt="Portrait de Modupe Sounton" className="about-image" />
                        <div className="about-badge-float">
                            <span className="about-badge-icon">
                                <FaBriefcase />
                            </span>
                            <span>
                                <strong>Développeuse</strong>
                                junior @ SIMETRIIK
                            </span>
                        </div>
                    </div>

                    <div className="about-text">
                        <div className="section-header">
                            <span className="section-eyebrow">À propos</span>
                            <h2 className="section-title">
                                Créatrice passionnée, développeuse <em>polyvalente</em>
                            </h2>
                        </div>

                        <p className="text-body">
                            Je transforme des idées en réalités numériques avec ReactJS, Python, Rust,
                            Node.js et Flet. Ce qui me motive ? Cette sensation unique quand une vision
                            prend vie à l'écran.
                        </p>
                        <p className="text-body">
                            Développeuse multilingue (français, anglais, fon, notions de chinois),
                            j'apporte une approche créative nourrie par mes passions pour le dessin, la
                            musique et le bricolage. Chaque ligne de code est une occasion de
                            <strong> créer, innover et résoudre des problèmes avec élégance.</strong>
                        </p>

                        <div className="about-stats">
                            {stats.map((stat) => (
                                <div key={stat.label} className="about-stat">
                                    <div className="about-stat-value">{stat.value}</div>
                                    <div className="about-stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="about-actions">
                            <Link to="/#contact" className="btn btn-primary">
                                Me contacter
                                <FaArrowRight />
                            </Link>
                            <Link to="/#design" className="btn btn-ghost">
                                Voir mes projets
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default About;