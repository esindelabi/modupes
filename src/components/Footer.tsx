import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub, FaQuora } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content-wrapper">
        <div className="footer-content">
          
        <div className="footer-section contact">
            <h4>Contactez-nous</h4>
            <p>Email: yoohoo@gmail.com</p>
            <p>Téléphone: +229 0142000000</p>
        </div>
          
          <div className="footer-section social">
            <h4>Suivez-nous</h4>
            <div className="social-links-footer">
                <a href='https://x.com/esindelabi' aria-label="Twitter" className='social-icon-footer'><FaTwitter/></a>
              <a href="https://github.com/esindelabi" aria-label="Github" className="social-icon-footer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/sikateq-465465381" aria-label="LinkedIn" className="social-icon-footer"><FaLinkedinIn /></a>
              <a href="https://www.quora.com/profile/Sikateq?ch=3&oid=3087447896&share=83ed6355&srid=5CgtII&target_type=user" aria-label="Instagram" className="social-icon-footer"><FaQuora /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Modupe Sounton. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;