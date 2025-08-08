import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you're using React Router
import './css/UserProfileView.css';

const UserProfileView = () => {
  return (
    <div className="profile-container mt-4">
      <div className="profile-header">
        <Link to="/usersettings" className="settings-icon">
          ⚙️
        </Link>
        <img
          src="https://i.pravatar.cc/150?img=3"
          alt="Profile"
          className="profile-avatar"
        />
        <h2 className="profile-name">
          Dj Minko <span className="verified-badge">✔</span>
        </h2>
      </div>

      <div className="profile-stats">
        <div className="stat-box">
          <strong>231</strong>
          <span>Posts</span>
        </div>
        <div className="stat-box">
          <strong>8,588</strong>
          <span>Followers</span>
        </div>
        <div className="stat-box">
          <strong>250</strong>
          <span>Following</span>
        </div>
      </div>

      <div className="profile-actions">
        <button className="follow-btn">➕ Follow</button>
        <button className="message-btn">💬 Message</button>
      </div>

      <div className="gallery-scroll">
        <div className="gallery-grid">
          {[...Array(12)].map((_, i) => (
            <img
              key={i}
              src={`https://placehold.co/150x150?text=${i + 1}`}
              alt={`Post ${i + 1}`}
              className="gallery-img"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfileView;
