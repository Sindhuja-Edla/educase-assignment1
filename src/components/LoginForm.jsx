import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://educase-assignment-becw.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Store name and email in localStorage
        localStorage.setItem('userName', data.name);
        localStorage.setItem('userEmail', data.email);

        alert(data.message || 'Logged in successfully!');
        navigate('/profile'); // Redirect to profile page
      } else {
        alert(data.message || 'Login failed!');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="outer-container">
      <div className="mobile-fram">
        <h2 className="form-title">Signin to your PopX account</h2>
        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <form className="form" onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn login-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
