import { useState } from "react";

export default function Q6({ title, content }) {
  const [initPara, setInitPara] = useState("");
  const showPara = () => {
    setInitPara((initPara) => content);
  };
  return (
    <div>
      <h2>Question 6</h2>
      <h1>{title}</h1>
      <button onClick={showPara}>Know More</button>
      <p>{initPara}</p>
    </div>
  );
}
