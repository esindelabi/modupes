import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="header-section">
            <div className="container header-grid-container">
               
                <div className="header-image-wrapper">
                    <img 
                        src="/src/assets/img/profil-nobg.png" 
                        alt="Modupe Sounton Profil" 
                        className="header-profile-image" 
                    />
                </div>
                
                <div className="header-content">
                    <h1 className="header-title">Modupe Sounton</h1>
                    <p className="header-subtitle">Frontend Developer</p>
                    <p className="header-description">
                        Donner vie à des expériences web uniques.
                    </p>
                    <Link 
                        to="/#contact" 
                        className="header-button"
                    >
                        Me contacter
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;