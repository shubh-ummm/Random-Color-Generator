import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";

const RandomColorGenerator = () => {
  const [color, setColor] = useState("#000");
  const [typeOfColor, setTypeOfColor] = useState("HEX");

  function randomColorHelper(length) {
    return Math.floor(Math.random() * length);
  }

  const handleHEXcolor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorHelper(hex.length)];
    }
    setColor(hexColor);
    console.log(color);
  };

  const handleRGBcolor = () => {
    const r = randomColorHelper(256);
    const g = randomColorHelper(256);
    const b = randomColorHelper(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  const [copy, setCopy] = useState("Click to Copy👆🏻");

  useEffect(() => {
    setCopy("Click to Copy👆🏻");
  }, [color]);

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setCopy("Copied to Clipboard 💪🏻");
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: color,
      }}
    >
      <div>
        <button onClick={() => setTypeOfColor("hex")}>
          Generate HEX Color
        </button>
        <button
          onClick={typeOfColor === "hex" ? handleHEXcolor : handleRGBcolor}
          style={{}}
        >
          Generate Random Color
        </button>
        <button onClick={() => setTypeOfColor("rgb")}>
          Generate RGB Color
        </button>
      </div>
      <div>
        <h1
          style={{
            cursor: "pointer",
          }}
          onClick={handleCopy}
        >
          {color}
        </h1>
        <h4>{copy}</h4>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
