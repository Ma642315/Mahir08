import React from "react";
import DetailedMenu from "../components/DetailedMenu";

const About = ({ addToCart }) => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <DetailedMenu addToCart={addToCart} />
    </div>
  );
};

export default About;