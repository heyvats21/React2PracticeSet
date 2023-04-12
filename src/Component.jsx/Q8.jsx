import { useState } from "react";

export default function Q8({ prodcuts }) {
  const [initHighlight, setInitHighlight] = useState(false);

  const handleHighlight = () => {
    setInitHighlight((initHighlight) => !initHighlight); //toggler
  };
  return (
    <div>
      <h2>Question 8</h2>
      <ol>
        {prodcuts.map(({ name, description, price }) => (
          <li
            style={{
              backgroundColor: initHighlight && price > 50000 && "#e056fd"
            }}
          >
            {name} {description} {price}
          </li>
        ))}
      </ol>

      <button onClick={handleHighlight}>Highlight Expensive Products</button>
    </div>
  );
}
