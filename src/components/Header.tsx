import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="hero">
            <div className="hero-content">
                <span className="hero-badge">
                    <span className="hero-badge-dot" />
                    Disponible pour de nouvelles opportunités
                </span>

                <h1 className="hero-title">
                    Modupe <em>Sounton</em>
                </h1>

                <p className="hero-role">Fullstack Developer</p>

                <p className="hero-description">
                    Donnez vie à des expériences web uniques, où le code rencontre l'élégance
                    du design.
                </p>

                <div className="hero-actions">
                    <Link to="/#contact" className="btn btn-primary">
                        Me contacter
                    </Link>
                    <Link to="/#design" className="btn btn-ghost-light">
                        Voir mes projets
                    </Link>
                </div>
            </div>

            <a href="#about" className="hero-scroll" aria-label="Défiler vers la section À propos">
                Découvrir
                <span className="hero-scroll-bar" />
            </a>
        </header>
    );
};

export default Header;