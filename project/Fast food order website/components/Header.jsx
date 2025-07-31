import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Header = ({ toggleDarkMode, darkMode, openModal, cart, removeFromCart, totalPrice }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <header>
      <div className="logo">
        <img src="https://img.icons8.com/color/48/hamburger.png" alt="logo" />
        <span>Crispy</span>
      </div>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="header-right">
 <span className="phone">📞 000 (123) 456 89</span>
        <button className="btn-orange" onClick={openModal}>
          BOOK A TABLE →
        </button>

        <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          🌙 Dark Mode
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        </label>

        <div style={{ position: "relative" }}>
          <span
            style={{
              marginLeft: "15px",
              cursor: "pointer",
              fontSize: "22px",
            }}
            onClick={() => setShowCart(!showCart)}
          >
            🛒
          </span>

          {showCart && (
            <div className="cart-box">
              <h3>🛍 Cart</h3>
              <ul>
                {cart.length === 0 ? (
<li style={{ textAlign: "center", color: "#777" }}>Cart is empty</li>
                ) : (
                  cart.map((item, index) => (
                    <li key={index}>
                      <span>
                        {item.name} x {item.quantity} = ₹{(parseFloat(item.price.replace("₹", "")) * item.quantity).toFixed(2)}
                      </span>
                      <button onClick={() => removeFromCart(index)}>✖</button>
                    </li>
                  ))
                )}
              </ul>
              {cart.length > 0 && (
                <p><strong>Total: ₹{totalPrice.toFixed(2)}</strong></p>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;