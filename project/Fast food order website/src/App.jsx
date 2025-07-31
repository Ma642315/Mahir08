import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./styles/style.css";

// Layout component to apply Header, Footer, and BookingModal on every page
const Layout = ({ children, modalOpen, setModalOpen, darkMode, setDarkMode, cart, removeFromCart, totalPrice }) => {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
 <>
      <Header
        openModal={() => setModalOpen(true)}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((prev) => !prev)}
        cart={cart}
        removeFromCart={removeFromCart}
        totalPrice={totalPrice}
      />

      {children}

      {/* Footer only on contact page */}
      {location.pathname === "/contact" && <Footer />}

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
 const existingItem = cart.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Remove item from cart by index
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  // Calculate total price in ₹
  const totalPrice = cart.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace("₹", ""));
    return total + itemPrice * item.quantity;
  }, 0);
 return (
    <Router>
      <Layout
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        cart={cart}
        removeFromCart={removeFromCart}
        totalPrice={totalPrice}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/about" element={<About addToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;