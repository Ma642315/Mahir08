import React from "react";
import MenuGrid from "../components/MenuGrid";

const Menu = ({ addToCart }) => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <MenuGrid addToCart={addToCart} />
    </div>
  );
};

export default Menu;