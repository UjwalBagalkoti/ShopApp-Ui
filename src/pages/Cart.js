import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import './Cart.css';

const initialCart = [
  { id: 1, name: 'Air Max Runner', category: 'Shoes', price: 129, emoji: '👟', color: '#fff0e6', qty: 1, size: 'M' },
  { id: 3, name: 'Smart Watch Pro', category: 'Watches', price: 299, emoji: '⌚', color: '#e6fff5', qty: 1, size: 'One Size' },
  { id: 6, name: 'Classic Hoodie', category: 'Clothes', price: 65, emoji: '🧥', color: '#f0e6ff', qty: 2, size: 'L' },
];

export default function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(initialCart);

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, qty: item.qty + delta } : item)
        .filter((item) => item.qty > 0)
    );
  };

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = 12;
  const total = subtotal + shipping;

  return (
    <div className="cart-screen">
      <div className="cart-header">
        <button className="back-btn" onClick={() => navigate(-1)}>←</button>
        <h2 className="cart-title">My Cart</h2>
        <span className="cart-count">{cart.length} items</span>
      </div>

      <div className="cart-list">
        {cart.length === 0 && (
          <div className="cart-empty">
            <p className="cart-empty-emoji">🛒</p>
            <p>Your cart is empty</p>
            <button className="shop-btn" onClick={() => navigate('/home')}>Start Shopping</button>
          </div>
        )}

        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-img" style={{ background: item.color }}>
              <span>{item.emoji}</span>
            </div>
            <div className="cart-item-info">
              <p className="cart-item-cat">{item.category} · {item.size}</p>
              <h4 className="cart-item-name">{item.name}</h4>
              <p className="cart-item-price">${item.price}</p>
            </div>
            <div className="cart-item-qty">
              <button className="qty-btn" onClick={() => updateQty(item.id, -1)}>−</button>
              <span className="qty-num">{item.qty}</span>
              <button className="qty-btn" onClick={() => updateQty(item.id, +1)}>+</button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="cart-summary">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>${shipping}</span>
          </div>
          <div className="summary-divider" />
          <div className="summary-row summary-row--total">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout →</button>
        </div>
      )}

      <BottomNav active="cart" />
    </div>
  );
}
