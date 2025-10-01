import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">À propos</h2>
                <div className="about-content">
                    <div className="about-image-wrapper">
                        <img src="/src/assets/img/me.jpg" alt="Portrait" className="about-image" />
                    </div>
                    <div className="about-text">
                        <p className="text-body">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, excepturi quo dignissimos dolorem 
                            voluptatem debitis minima doloremque rerum, vitae qui hic soluta maiores? 
                            Vero repudiandae reprehenderit beatae ipsa earum velit.
                        </p>
                        <p className="text-body">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, excepturi quo dignissimos dolorem 
                            voluptatem debitis minima doloremque rerum, vitae qui hic soluta maiores? 
                            Vero repudiandae reprehenderit beatae ipsa earum velit.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="social-link" aria-label="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="social-link" aria-label="Behance">
                                <i className="fab fa-behance"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;