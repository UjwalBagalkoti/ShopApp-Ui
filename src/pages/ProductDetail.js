import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import './ProductDetail.css';

const products = [
  { id: 1, name: 'Air Max Runner', category: 'Shoes', price: 129, rating: 4.8, reviews: 240, emoji: '👟', color: '#fff0e6', desc: 'Premium running shoes with responsive cushioning and breathable mesh upper. Perfect for everyday training or casual wear.' },
  { id: 2, name: 'Designer Tote', category: 'Bags', price: 89, rating: 4.6, reviews: 185, emoji: '👜', color: '#e6f0ff', desc: 'Spacious and stylish tote bag made from premium vegan leather. Fits a laptop, notebook, and all your daily essentials.' },
  { id: 3, name: 'Smart Watch Pro', category: 'Watches', price: 299, rating: 4.9, reviews: 420, emoji: '⌚', color: '#e6fff5', desc: 'Advanced smartwatch with health monitoring, GPS, and 7-day battery life. Stay connected in style.' },
  { id: 4, name: 'Casual Sneakers', category: 'Shoes', price: 79, rating: 4.5, reviews: 310, emoji: '👞', color: '#fff0f6', desc: 'Classic silhouette meets modern comfort. These sneakers go with everything in your wardrobe.' },
  { id: 5, name: 'Leather Wallet', category: 'Bags', price: 49, rating: 4.7, reviews: 156, emoji: '👛', color: '#fffbe6', desc: 'Slim and minimal wallet with RFID protection and room for up to 8 cards and cash.' },
  { id: 6, name: 'Classic Hoodie', category: 'Clothes', price: 65, rating: 4.4, reviews: 280, emoji: '🧥', color: '#f0e6ff', desc: 'Cozy fleece-lined hoodie that is perfect for layering. Available in multiple colors.' },
  { id: 7, name: 'Sport Watch', category: 'Watches', price: 199, rating: 4.8, reviews: 195, emoji: '🕐', color: '#e6fff5', desc: 'Durable sport watch with chronograph, water resistance up to 100m, and luminous hands.' },
  { id: 8, name: 'Running Shorts', category: 'Clothes', price: 35, rating: 4.3, reviews: 120, emoji: '🩳', color: '#e6f5ff', desc: 'Lightweight and quick-drying running shorts with built-in liner and zip pocket.' },
];

const sizes = ['XS', 'S', 'M', 'L', 'XL'];
const colors = ['#667eea', '#ff6b6b', '#20c997', '#ffa94d'];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id)) || products[0];

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="detail-screen">
      {/* Hero */}
      <div className="detail-hero" style={{ background: product.color }}>
        <button className="back-btn" onClick={() => navigate(-1)}>←</button>
        <span className="detail-emoji">{product.emoji}</span>
        <button className="fav-btn">🤍</button>
      </div>

      {/* Content */}
      <div className="detail-content">
        <div className="detail-top">
          <div>
            <p className="detail-cat">{product.category}</p>
            <h2 className="detail-name">{product.name}</h2>
          </div>
          <div className="detail-price">${product.price}</div>
        </div>

        <div className="detail-rating">
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="rating-val">{product.rating}</span>
          <span className="rating-count">({product.reviews} reviews)</span>
        </div>

        <p className="detail-desc">{product.desc}</p>

        {/* Color */}
        <div className="detail-section">
          <h4 className="detail-label">Color</h4>
          <div className="color-row">
            {colors.map((c) => (
              <button
                key={c}
                className={`color-dot ${selectedColor === c ? 'color-dot--active' : ''}`}
                style={{ background: c }}
                onClick={() => setSelectedColor(c)}
              />
            ))}
          </div>
        </div>

        {/* Size */}
        <div className="detail-section">
          <h4 className="detail-label">Size</h4>
          <div className="size-row">
            {sizes.map((s) => (
              <button
                key={s}
                className={`size-chip ${selectedSize === s ? 'size-chip--active' : ''}`}
                onClick={() => setSelectedSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Qty + Add to cart */}
        <div className="detail-footer">
          <div className="qty-control">
            <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
            <span className="qty-val">{qty}</span>
            <button className="qty-btn" onClick={() => setQty(qty + 1)}>+</button>
          </div>
          <button
            className={`add-cart-btn ${added ? 'add-cart-btn--added' : ''}`}
            onClick={handleAddToCart}
          >
            {added ? '✓ Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
}
