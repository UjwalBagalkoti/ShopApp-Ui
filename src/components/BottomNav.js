import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BottomNav.css';

const navItems = [
  { key: 'home', icon: '🏠', label: 'Home', path: '/home' },
  { key: 'cart', icon: '🛒', label: 'Cart', path: '/cart' },
  { key: 'profile', icon: '👤', label: 'Profile', path: '/profile' },
];

export default function BottomNav({ active }) {
  const navigate = useNavigate();

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.key}
          className={`nav-btn ${active === item.key ? 'nav-btn--active' : ''}`}
          onClick={() => navigate(item.path)}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
          {active === item.key && <span className="nav-dot" />}
        </button>
      ))}
    </nav>
  );
}
