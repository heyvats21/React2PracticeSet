// Need to understand it again (the concept)

import { useState } from "react";

const red = "#EE4B2B";
const blue = "#89CFF0";
const green = "#7FFFD4";

export default function Q9() {
  const [color, setColor] = useState({ red: "", green: "", blue: "" });
  const getColor = (color) => {
    setColor((prev) => ({
      ...prev,
      red: color === "red" ? red : "",
      blue: color === "blue" ? blue : "",
      green: color === "green" ? green : ""
    }));
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <button onClick={() => getColor("red")}>Red Color</button>
      <p>{color.red}</p>
      <button onClick={() => getColor("blue")}>Blue Color</button>
      <p>{color.blue}</p>
      <button onClick={() => getColor("green")}>Green Color</button>
      <p>{color.green}</p>
    </div>
  );
}
