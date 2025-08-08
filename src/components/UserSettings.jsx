import React from 'react';
import './css/UserSettings.css';
import { useNavigate } from 'react-router-dom'; // for navigation

const settings = [
  { icon: '👤', label: 'Edit Profile' },
  { icon: '🔔', label: 'Notifications', count: 7 },
  { icon: '⚙️', label: 'Settings' },
  { icon: '📨', label: 'Invite a Friend' },
];

const UserSettings = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/userprofileview'); // Update to match your route
  };

  return (
    <div className="settings-container mt-4">
      <div className="back-button" onClick={handleBack}>
        ←
      </div>

      <div className="user-profile">
        <div className="profile-img-wrapper">
          <img
            src="https://i.pravatar.cc/100?img=5"
            alt="User"
            className="user-avatar"
          />
          <span className="badge">2</span>
        </div>
        <h3 className="user-name">Sana Afzal</h3>
        <p className="user-email">sanaafzal@design.com</p>
      </div>

      <div className="settings-list">
        {settings.map((item, idx) => (
          <div key={idx} className="settings-item">
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
            {item.count > 0 && <span className="count">{item.count}</span>}
            <span className="arrow">›</span>
          </div>
        ))}

        <div className="settings-item logout">
          <span className="icon">🚪</span>
          <span className="label">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
