import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import DesignProjects from './components/DesignProjects';
import ContactForm from './components/ContactForm';
import ScrollToHash from './components/ScrollToHash';

const HomePage: React.FC = () => {
  return (
    <div className="content-container"> 
      <ScrollToHash /> 
      <Header />
      <About />
      <DesignProjects />
      <ContactForm />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Navbar /> 
      <main className="main-content-offset"> 
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;