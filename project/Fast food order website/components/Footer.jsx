import React from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ useLocation import
import "./Footer.css";

const Footer = () => {
  const location = useLocation(); // ✅ current route path milta hai yahan se

  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Column 1 */}
        <div className="footer-col">
          <h2>🍔 Crispy</h2>
          <p>Welcome to Crispy - Where Taste Meets Crunch</p>
          <div className="footer-input">
            <input type="email" placeholder="Email Address" />
            <button>→</button>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Company</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Our Menu</Link></li>

            {/* 👇 ye link sirf tab dikhayenge jab /contact page par ho */}
            {location.pathname === "/contact" && (
              <li><Link to="/contact">Contact</Link></li>
            )}

            <li><Link to="/recipes">Recipes</Link></li>
          </ul>
        </div>

        {/* Column 3 - Products */}
        <div className="footer-col">
          <h3>Products</h3>
          <ul>
            <li>Hamburger</li>
            <li>Chicken Burger</li>
            <li>Vegetable Pizza</li>
            <li>Chicken Roll</li>
            <li>Ice-Cream</li>
            <li>Potato</li>
            <li>Organic Juice</li>
            <li>Lemon Juice</li>
            <li>MuTton Tikka</li>
            <li>Seafoods</li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div className="footer-col">
          <h3>Call for order:</h3>
          <p className="footer-phone">+1 2586 5892</p>
<p>hello@crispy.com</p>
          <p>
            <strong>Location:</strong><br />
            119 Tanglewood Lane Gulfport, <br />
            MS 39503
          </p>
        </div>
        </div>

      <div className="footer-bottom">
        <p>© 2023 codewithsadee, All Rights Reserved</p>
        <div className="footer-links">
          <span>Setting & Privacy</span>
          <span>FAQs</span>
          <span>Food Menu</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;