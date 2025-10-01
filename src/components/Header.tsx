import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="header-section">
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
        </header>
    );
};

export default Header;