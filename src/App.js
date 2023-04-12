import { products, userData, todoItems } from "./data";
import Q1 from "./Component.jsx/Q1";
import Q2 from "./Component.jsx/Q2";
import Q3 from "./Component.jsx/Q3";
import "./styles.css";
import Q4 from "./Component.jsx/Q4";
import Q5 from "./Component.jsx/Q5";
import Q6 from "./Component.jsx/Q6";
import Q7 from "./Component.jsx/Q7";
import Q8 from "./Component.jsx/Q8";
import Q9 from "./Component.jsx/Q9";
import Q10 from "./Component.jsx/Q10";

export default function App() {
  // const title = "React is awesome";
  // const content = "React is a JavaScript library for building user interfaces.";

  const heading = "About Me";
  const name = "Preeti"; // you can put your name
  const learning = "I am learning React JS currently at neoG Camp.";

  return (
    <div className="App">
      {/* <Q1 name={"Vatsal Singh"} />
      <Q2 prodcutName={"Mobile"} price={"80,000"} />
      <Q3 userData={userData} /> */}
      {/* <Q4 products={products} /> */}
      {/* <Q5 products={products} /> */}
      {/* <Q6 title={title} content={content} /> */}
      {/* <Q7 heading={heading} name={name} learning={learning} />
      <Q8 prodcuts={products} /> */}
      {/* <Q9 /> */}

      <Q10 todoItems={todoItems} />
    </div>
  );
}
