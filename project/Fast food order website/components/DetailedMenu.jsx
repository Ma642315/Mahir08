import React from "react";

const menuData = [
  {
    name: "Hamburger",
    price: "₹200",
    description: "Roasted langoustine, consommé",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Xj-nDP_e6S40O3pJn40Zo2BDDtn92CzXVg&s",
  },
  {
    name: "Pizza",
    price: "₹500",
    description: "Roasted langoustine, consommé",
    image: "https://img.icons8.com/emoji/96/pizza-emoji.png",
  },
  {
    name: "Baked Chicken Wings",
    price: "₹850",
    description: "Roasted langoustine, consommé",
    image: "https://img.icons8.com/emoji/96/poultry-leg-emoji.png",
  },
  {
    name: "Seafood Pizza",
    price: "₹1200",
    description: "Roasted langoustine, consommé",
    image: "https://img.icons8.com/emoji/96/pizza-emoji.png",
  },
];

const DetailedMenu = ({ addToCart }) => {
  return (
    <section id="detailed-menu" className="detailed-menu">
      <div className="menu-image">
        <img
          src="https://www.thesouthafrican.com/wp-content/uploads/2021/12/Mexican-nachos-2-800x530.jpg.optimal.jpg"
          alt="Menu visual"
        />
      </div>
      <div className="menu-items">
        {menuData.map(({ name, price, description, image }) => (
          <div className="item" key={name}>
            <img src={image} alt={name} />
            <div className="info">
              <h3>
                {name} <span>{price}</span>
              </h3>
              <p>{description}</p>
              <div className="stars">★★★★★ <span>(5k Reviews)</span></div>
              <button className="btn-orange" onClick={() => addToCart({ name, price })}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailedMenu;
