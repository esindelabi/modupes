import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import DesignProjects from './components/DesignProjects';
import ContactForm from './components/ContactForm';
import ScrollToHash from './components/ScrollToHash';
import Carnet from './components/Carnet';
import PostDetail from './components/PostDetail';
import { ThemeProvider } from './components/ThemeProvider';

const HomePage: React.FC = () => {
    return (
        <div className="content-container">
            <Header />
            <About />
            <Skills />
            <DesignProjects />
            <ContactForm />
        </div>
    );
};

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <Router>
                <ScrollToHash />
                <Navbar />
                <main className="main-content-offset">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/carnet" element={<Carnet />} />
                        <Route path="/carnet/:slug" element={<PostDetail />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </ThemeProvider>
    );
};

export default App;