import React from 'react';
import { Link } from 'react-router-dom';
import aboutMeImage from '../assets/img/profile.png'; 


const About: React.FC = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-content">
                    <div className="about-image-wrapper">
                        <img 
                        src={aboutMeImage} 
                        alt="Portrait" 
                        className="about-image" 
                        />
                    </div>
                    <div className="about-text">
                        <h2 className="section-title">À propos</h2>
                        <p className="text-body">
                            Créatrice passionnée, développeur polyvalent.
                            Je transforme des idées en réalités numériques avec ReactJS, 
                            Python, Rust, Node.js et Flet. Ce qui me motive ? Cette sensation 
                            unique quand une vision prend vie à l'écran.
                        </p>
                        <p className="text-body">
                            Développeur multilingue (français, anglais, fon, notions de chinois), 
                            j'apporte une approche créative nourrie par mes passions pour le dessin, 
                            la musique et le bricolage. Chaque ligne de code est pour moi une occasion de créer, 
                            d'innover et de résoudre des problèmes avec élégance. 
                        </p>
                        <p className='text-body'>Développeur junior chez Sikateq.</p>
                        <Link 
                            to="/#contact" 
                            className="about-button"
                        >
                        Me contacter
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;