import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

function WelcomePage() {
    const navigate = useNavigate();

    return (
        <div className="welcome-page">
            <h1 className="welcome-title">Hey! I'm Wysa, I'm here to help you sleep better.</h1>
            <button className="next-btn" onClick={() => navigate('/nickname')}>Next</button>
        </div>
    );
}

export default WelcomePage;
