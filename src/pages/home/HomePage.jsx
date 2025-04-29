import '../../assets/style/pages/home/HomePage.css';
import Home from '../../components/home/Home';
import React from 'react';
import { Link } from 'react-router-dom';

const  HomePage = () => {
    return (
        <div className="home-page">
           <div className="hero-section">
            <h1>Welcome to MY Portfolio</h1>
            <p className="subtitle">web Developer & UI/UX Designer</p>
            <Link to="/gallery" className="cta-button">view MY Work</Link>
           </div>
           <Home />
        </div>
    );
};

export default HomePage;