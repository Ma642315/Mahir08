import React from "react";

const menuItems = [
  {
    title: "Pizza",
    image: "https://img.icons8.com/emoji/96/pizza-emoji.png",
  },
  {
    title: "Burger",
    image: "https://img.icons8.com/emoji/96/hamburger-emoji.png",
  },
  {
    title: "Bread",
    image: "https://img.icons8.com/emoji/96/bread-emoji.png",
  },
  {
    title: "Seafoods",
    image: "https://img.icons8.com/emoji/96/octopus-emoji.png",
  },
  {
    title: "Coffee",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVnUgGP6ADE_fnololFjuynqQOuCrCdwS1w&s",
  },
  {
    title: "Chicken",
 image: "https://img.icons8.com/emoji/96/poultry-leg-emoji.png",
  },
  {
    title: "Noodles",
    image: "https://images.getrecipekit.com/20241008094433-blog-20templates-20-3.webp?aspect_ratio=16:9&quality=90&",
  },
  {
    title: "Sandwich",
    image: "https://content.jdmagicbox.com/v2/comp/jaipur/h2/0141px141.x141.221119004034.x1h2/catalogue/chatkara-fast-food-brahampuri-jaipur-coffee-shops-8sdly20pq9.jpg",
  },
];

const MenuGrid = () => {
  const goToPage = (item) => {
    alert("You selected: " + item);
    // window.location.href = /menu/${item}; // Optional navigation
  };

  return (
    <section id="menu" className="menu-section"> {/* 👈 ID added here for scroll */}
      <h4 className="subtitle">OUR POPULAR FOOD</h4>
      <h1 className="title">Best Category Foods Menu</h1>
  <div className="menu-grid">
        {menuItems.map(({ title, image }) => (
          <div
            key={title}
            className="menu-card"
            onClick={() => goToPage(title)}
          >
            <img src={image} alt={title} />
            <span>{title}</span>
            <button className="arrow-btn">→</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuGrid;