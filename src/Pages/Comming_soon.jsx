import React, { useState } from "react";

const CommingSoon = () => {
  const [selectedColor1, setSelectedColor1] = useState("#ff0fbf"); // Initialize with black color
  const [selectedColor2, setSelectedColor2] = useState("#0011ff"); // Initialize with black color

  const handleColorChange = (event) => {
    setSelectedColor1(event.target.value);
  };
  const handleColorChange2 = (event) => {
    setSelectedColor2(event.target.value);
  };

  return (
    <div
      style={{
        background: `linear-gradient(to right, ${selectedColor1},  ${selectedColor2})`,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "MonteCarlo, cursive",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Coming Soon</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
          Change the color's to see a Magic 🪄
        </p>
        <input
          style={{
            width: "30px",
            height: "30px",
            border: "2px solid white",
            outline: "none",
            borderRadius: "20px",
            overflow: "hidden",
            margin: "0px 5px",
          }}
          type="color"
          value={selectedColor1}
          onChange={handleColorChange}
        />
        <input
          style={{
            width: "30px",
            height: "30px",
            border: "2px solid white",
            outline: "none",
            borderRadius: "20px",
            overflow: "hidden",
            margin: "0px 5px",
          }}
          type="color"
          value={selectedColor2}
          onChange={handleColorChange2}
        />
        <p style={{ fontSize: "1rem", marginTop: "20px" }}>
          {selectedColor1} , {selectedColor2}
        </p>
      </div>
    </div>
  );
};

export default CommingSoon;
