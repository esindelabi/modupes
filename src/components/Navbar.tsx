import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaMoon, FaSun, FaXmark } from 'react-icons/fa6';
import { useTheme } from '../theme';

const navItems = [
    { name: 'Accueil', to: '/#', id: '' },
    { name: 'À propos', to: '/#about', id: 'about' },
    { name: 'Compétences', to: '/#skills', id: 'skills' },
    { name: 'Design', to: '/#design', id: 'design' },
    { name: 'Carnet', to: '/carnet', id: 'carnet' },
    { name: 'Contact', to: '/#contact', id: 'contact' },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const { theme, toggleTheme } = useTheme();
    const { pathname } = useLocation();

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 24);

            const probe = window.scrollY + window.innerHeight * 0.35;
            let current = '';
            for (const item of navItems) {
                if (!item.id) continue;
                const el = document.getElementById(item.id);
                if (!el) continue;
                const top = el.getBoundingClientRect().top + window.scrollY;
                if (top <= probe) current = item.id;
            }
            setActiveSection(current);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const isActive = (item: (typeof navItems)[number]) =>
        item.id === 'carnet' ? pathname.startsWith('/carnet') : activeSection === item.id;

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <nav className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-header">
                    <Link to="/#" className="navbar-logo-link" onClick={() => setIsOpen(false)}>
                        <img src="/logo.png" alt="Logo Modupe Sounton" className="navbar-logo-img" />
                    </Link>

                    <div className="navbar-menu-desktop">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                className={`navbar-link ${isActive(item) ? 'is-active' : ''}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="navbar-actions">
                        <button
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
                            title={theme === 'light' ? 'Mode sombre' : 'Mode clair'}
                        >
                            {theme === 'light' ? <FaMoon /> : <FaSun />}
                        </button>

                        <button className="navbar-toggle-btn" onClick={() => setIsOpen((open) => !open)} aria-label="Ouvrir le menu">
                            {isOpen ? <FaXmark /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`navbar-menu-mobile ${isOpen ? 'is-open' : ''}`}>
                <div className="navbar-mobile-content">
                    <div className="navbar-mobile-inner">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                onClick={() => setIsOpen(false)}
                                className={`navbar-mobile-link ${isActive(item) ? 'is-active' : ''}`}
                            >
                                {item.name}
                                <span>0{index + 1}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;