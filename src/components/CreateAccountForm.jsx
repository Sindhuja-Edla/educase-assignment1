import React, { useState } from 'react';
import './CreateAccountForm.css';
import { useNavigate } from 'react-router-dom';

const CreateAccountForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    company: '',
    agency: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://educase-assignment-becw.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // 🧠 Store user info in localStorage (like login)
        localStorage.setItem('userName', formData.fullName);
        localStorage.setItem('userEmail', formData.email);

        alert(data.message || 'Account created successfully!');
        navigate('/profile'); // ✅ Go to profile page directly
      } else {
        alert(data.message || 'Registration failed!');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="outer-container">
      <div className="mobile-frame">
        <h2 className="form-title">Create your PopX account</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label>Full Name*</label>
          <input type="text" name="fullName" required onChange={handleChange} />

          <label>Phone number*</label>
          <input type="text" name="phoneNumber" required onChange={handleChange} />

          <label>Email address*</label>
          <input type="email" name="email" required onChange={handleChange} />

          <label>Password *</label>
          <input type="password" name="password" required onChange={handleChange} />

          <label>Company name</label>
          <input type="text" name="company" onChange={handleChange} />

          <label>Are you an Agency?*</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="agency" value="Yes" onChange={handleChange} /> Yes
            </label>
            <label>
              <input type="radio" name="agency" value="No" onChange={handleChange} /> No
            </label>
          </div>

          <button className="btn primary-btn" type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountForm;
