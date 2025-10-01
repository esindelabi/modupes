import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        const { hash } = location;

        if (hash) {
            const element = document.getElementById(hash.substring(1));

            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]); 

    return null;
};

export default ScrollToHash;