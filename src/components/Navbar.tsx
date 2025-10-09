import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { name: 'Accueil', hash: '/#' }, 
        { name: 'À propos', hash: '/#about' },
        { name: 'Compétences', hash: '/#skills' },
        { name: 'Design', hash: '/#design' },
        { name: 'Contact', hash: '/#contact' },
    ];



    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="navbar-header">
                    <Link to="/#" className="navbar-logo-link">
                        <img 
                            src="/logo.png" 
                            alt="Logo Modupe Sounton" 
                            className="navbar-logo-img" 
                        />
                    </Link>

                    <div className="navbar-menu-desktop">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.hash}
                                className="navbar-link"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <button className="navbar-toggle-btn" onClick={toggleMenu}>
                        <i className="fas fa-bars navbar-icon"></i>
                    </button>
                </div>
            </div>

            <div id="mobile-menu" className={`navbar-menu-mobile ${isOpen ? 'is-open' : ''}`}>
                <div className="navbar-mobile-content">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.hash}
                            onClick={toggleMenu}
                            className="navbar-mobile-link"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;