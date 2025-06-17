import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="outer-container">
      <div className="mobile-frame">
        <div className="text-section">
          <h1 className="title">Welcome to PopX</h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit,
          </p>
        </div>

        <div className="button-section">
          <button className="btn primary-btn" onClick={() => navigate('/register')}>
            Create Account
          </button>
          <button className="btn secondary-btn" onClick={() => navigate('/login')}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
