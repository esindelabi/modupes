import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaQuora } from 'react-icons/fa6';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useTheme } from '../theme';

const Footer: React.FC = () => {
    const [showTop, setShowTop] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 500);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section brand">
                        <img src="/logo.png" alt="Logo Modupe Sounton" className="footer-brand-img" />
                        <p>
                            Développeuse fullstack et designer passionnée, je donne vie à des
                            expériences web uniques où le code rencontre l'élégance du design.
                        </p>
                    </div>

                    <div className="footer-section contact">
                        <h4>Contact</h4>
                        <ul className="footer-list">
                            <li>
                                <a href="mailto:esindelabi@gmail.com">
                                    <FaEnvelope />
                                    esindelabi@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+2290143855447">
                                    <FaPhone />
                                    +229 01 438 55 447
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section social">
                        <h4>Réseaux sociaux</h4>
                        <p>
                            Suivez mon travail et mes nouvelles créations sur les réseaux.
                        </p>
                        <div className="social-links-footer">
                            <a href="https://x.com/esindelabi" aria-label="Twitter/X" className="social-icon-footer">
                                <FaTwitter />
                            </a>
                            <a href="https://github.com/esindelabi" aria-label="GitHub" className="social-icon-footer">
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sikateq-465465381"
                                aria-label="LinkedIn"
                                className="social-icon-footer"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://www.quora.com/profile/Sikateq"
                                aria-label="Quora"
                                className="social-icon-footer"
                            >
                                <FaQuora />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} <strong>Modupe Sounton</strong>. Tous droits réservés.
                    </p>
                    <p>{theme === 'dark' ? 'Fait avec passion, en mode nuit.' : 'Fait avec passion et un peu d\'or.'}</p>
                </div>
            </div>

            <Link to="/#" className={`back-to-top ${showTop ? 'is-visible' : ''}`} aria-label="Revenir en haut de page">
                ↑
            </Link>
        </footer>
    );
};

export default Footer;