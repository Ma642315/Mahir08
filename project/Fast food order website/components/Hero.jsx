import React from "react";

const Hero = () => {
  const orderNow = () => {
    alert("Redirecting to order page...");
  };

  return (
    <section id="hero" className="hero"> {/* 👈 ID added */}
      <div className="hero-left">
        <h1>Crispy<br />Chicken<br />Burgers</h1>
        <p>
          Welcome to Crispy - Where Taste Meets Crunch!
        </p>
        <button className="btn-orange" onClick={orderNow}>
          ORDER NOW →
        </button>
      </div>
      <div className="hero-right">
        <img
          src="https://www.datocms-assets.com/129288/1725393944-moist-chicken-burgers.jpg"
          alt="Hero Burger"
  />
      </div>
    </section>
  );
};

export default Hero;