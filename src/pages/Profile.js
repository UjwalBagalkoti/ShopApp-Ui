import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import './Profile.css';

const menuItems = [
  { icon: '📦', label: 'My Orders', sub: '5 active orders' },
  { icon: '❤️', label: 'Wishlist', sub: '12 saved items' },
  { icon: '📍', label: 'Addresses', sub: '2 saved addresses' },
  { icon: '💳', label: 'Payment Methods', sub: 'Visa •••• 4242' },
  { icon: '🔔', label: 'Notifications', sub: 'All enabled' },
  { icon: '🌙', label: 'Dark Mode', sub: 'System default' },
  { icon: '❓', label: 'Help & Support', sub: 'FAQ, Chat' },
];

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="profile-screen">
      {/* Header */}
      <div className="profile-header">
        <h2 className="profile-heading">Profile</h2>
        <button className="profile-settings">⚙️</button>
      </div>

      {/* Avatar */}
      <div className="profile-hero">
        <div className="avatar">AJ</div>
        <h3 className="profile-name">Alex Johnson</h3>
        <p className="profile-email">alex.johnson@email.com</p>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>

      {/* Stats */}
      <div className="profile-stats">
        <div className="stat-item">
          <span className="stat-num">24</span>
          <span className="stat-label">Orders</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-num">12</span>
          <span className="stat-label">Wishlist</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-num">4.8</span>
          <span className="stat-label">Rating</span>
        </div>
      </div>

      {/* Menu */}
      <div className="profile-menu">
        {menuItems.map((item, i) => (
          <button key={i} className="menu-item">
            <span className="menu-icon">{item.icon}</span>
            <div className="menu-text">
              <span className="menu-label">{item.label}</span>
              <span className="menu-sub">{item.sub}</span>
            </div>
            <span className="menu-arrow">›</span>
          </button>
        ))}
      </div>

      <div className="logout-wrap">
        <button className="logout-btn" onClick={() => navigate('/login')}>
          🚪 Sign Out
        </button>
      </div>

      <div style={{ height: '90px' }} />
      <BottomNav active="profile" />
    </div>
  );
}
