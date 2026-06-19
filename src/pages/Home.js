import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import './Home.css';

const categories = ['All', 'Shoes', 'Bags', 'Watches', 'Clothes'];

const products = [
  { id: 1, name: 'Air Max Runner', category: 'Shoes', price: 129, rating: 4.8, reviews: 240, emoji: '👟', color: '#fff0e6' },
  { id: 2, name: 'Designer Tote', category: 'Bags', price: 89, rating: 4.6, reviews: 185, emoji: '👜', color: '#e6f0ff' },
  { id: 3, name: 'Smart Watch Pro', category: 'Watches', price: 299, rating: 4.9, reviews: 420, emoji: '⌚', color: '#e6fff5' },
  { id: 4, name: 'Casual Sneakers', category: 'Shoes', price: 79, rating: 4.5, reviews: 310, emoji: '👞', color: '#fff0f6' },
  { id: 5, name: 'Leather Wallet', category: 'Bags', price: 49, rating: 4.7, reviews: 156, emoji: '👛', color: '#fffbe6' },
  { id: 6, name: 'Classic Hoodie', category: 'Clothes', price: 65, rating: 4.4, reviews: 280, emoji: '🧥', color: '#f0e6ff' },
  { id: 7, name: 'Sport Watch', category: 'Watches', price: 199, rating: 4.8, reviews: 195, emoji: '🕐', color: '#e6fff5' },
  { id: 8, name: 'Running Shorts', category: 'Clothes', price: 35, rating: 4.3, reviews: 120, emoji: '🩳', color: '#e6f5ff' },
];

export default function Home() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState('');

  const filtered = products.filter(
    (p) =>
      (activeCategory === 'All' || p.category === activeCategory) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="home-screen">
      {/* Header */}
      <div className="home-header">
        <div className="home-greeting">
          <p className="greeting-sub">Good Morning 👋</p>
          <h1 className="greeting-name">Alex Johnson</h1>
        </div>
        <button className="notif-btn" onClick={() => navigate('/cart')}>
          🛒
          <span className="notif-badge">3</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="filter-btn">⚙️</button>
      </div>

      {/* Banner */}
      <div className="banner">
        <div className="banner-text">
          <p className="banner-tag">LIMITED OFFER</p>
          <h2 className="banner-title">Summer Sale</h2>
          <p className="banner-disc">Up to 50% off</p>
          <button className="banner-btn">Shop Now →</button>
        </div>
        <div className="banner-emoji">🎉</div>
      </div>

      {/* Categories */}
      <div className="section-header">
        <h3 className="section-title">Categories</h3>
      </div>
      <div className="categories-scroll">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`cat-chip ${activeCategory === cat ? 'cat-chip--active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="section-header">
        <h3 className="section-title">Featured</h3>
        <button className="see-all">See all</button>
      </div>

      <div className="products-grid">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="product-img" style={{ background: product.color }}>
              <span className="product-emoji">{product.emoji}</span>
              <button
                className="wishlist-btn"
                onClick={(e) => toggleWishlist(product.id, e)}
              >
                {wishlist.includes(product.id) ? '❤️' : '🤍'}
              </button>
            </div>
            <div className="product-info">
              <p className="product-category">{product.category}</p>
              <h4 className="product-name">{product.name}</h4>
              <div className="product-meta">
                <span className="product-price">${product.price}</span>
                <span className="product-rating">⭐ {product.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <p>😕 No products found</p>
        </div>
      )}

      <div style={{ height: '90px' }} />
      <BottomNav active="home" />
    </div>
  );
}
