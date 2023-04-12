import { useState } from "react";

export default function Q7({ heading, name, learning }) {
  const [initLearning, setInitLearning] = useState("");

  const handlePara = () => {
    setInitLearning((initLearning) => learning);
  };
  return (
    <div>
      <h2>Question 7</h2>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={handlePara}>Know More</button>
      <p>{initLearning}</p>
    </div>
  );
}
