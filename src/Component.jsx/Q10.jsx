export default function Q10({ todoItems }) {
  return (
    <div>
      <h2>Question 10</h2>
      {todoItems.map(({ title, description, isCompleted }) => (
        <div style={{ color: isCompleted === true ? "green" : "red" }}>
          <h2>{title} </h2>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}
