import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const name = localStorage.getItem('userName');
  const email = localStorage.getItem('userEmail');

  return (
    <div className="outer-container">
      <div className="mobile-fram">
        <h3 className="form-title">Account Settings</h3>

        <div className="profile-card">
          <img
            className="profile-img"
            src="https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg"
            alt="User"
          />
          <div className="profile-details">
            <h4>{name}</h4>
            <p>{email}</p>
          </div>
        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
