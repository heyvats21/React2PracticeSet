export default function Q4({ products }) {
  return (
    <div>
      <h2>Question 4</h2>
      <ol>
        {products.map(({ name, description, price }) => (
          <li style={{ border: price > 50000 && "4px solid #b8e994" }}>
            {name} {description} {price}
          </li>
        ))}
      </ol>
    </div>
  );
}
