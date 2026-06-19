import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';

const slides = [
  {
    id: 1,
    emoji: '🛍️',
    title: 'Discover Products',
    subtitle: 'Explore thousands of trending products curated just for you.',
    bg: 'linear-gradient(160deg, #ff6b6b 0%, #ffa94d 100%)',
  },
  {
    id: 2,
    emoji: '⚡',
    title: 'Fast Delivery',
    subtitle: 'Get your orders delivered to your doorstep in no time.',
    bg: 'linear-gradient(160deg, #845ef7 0%, #5c7cfa 100%)',
  },
  {
    id: 3,
    emoji: '🔒',
    title: 'Secure Payments',
    subtitle: 'Shop with confidence. Your payments are always protected.',
    bg: 'linear-gradient(160deg, #20c997 0%, #4dabf7 100%)',
  },
];

export default function Onboarding() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      navigate('/login');
    }
  };

  const handleSkip = () => navigate('/login');

  const slide = slides[current];

  return (
    <div className="onboarding" style={{ background: slide.bg }}>
      <button className="skip-btn" onClick={handleSkip}>
        Skip
      </button>

      <div className="onboarding-illustration">
        <div className="illustration-circle">
          <span className="illustration-emoji">{slide.emoji}</span>
        </div>
      </div>

      <div className="onboarding-content">
        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? 'dot--active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

        <h1 className="onboarding-title">{slide.title}</h1>
        <p className="onboarding-subtitle">{slide.subtitle}</p>

        <button className="next-btn" onClick={handleNext}>
          {current < slides.length - 1 ? 'Next' : 'Get Started'}
        </button>
      </div>
    </div>
  );
}
