import React from "react";
import HeroImage from "../../src/Assets/Images/youve-been-hacked.png";

const Tests = () => {
  return (
    <div>
      <img
        src={HeroImage}
        alt="hero_image"
        id="images"
        className="hacked h-100 w-100"
      />
    </div>
  );
};

export default Tests;
