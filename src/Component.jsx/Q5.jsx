export default function Q5({ products }) {
  return (
    <div>
      <h2>Question 5</h2>
      <ul>
        {products
          .filter((item) => item.name === "mobile")
          .map((elem) => (
            <li>
              {elem.name}:{elem.description}
              {elem.price}
            </li>
          ))}
      </ul>
    </div>
  );
}
