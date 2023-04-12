export default function Q2({ prodcutName, price }) {
  return (
    <div>
      <h2>Question 2</h2>
      <p>
        <span style={{ fontWeight: "bold", color: "#3498db" }}>
          {prodcutName}
        </span>{" "}
        :{" "}
        <span style={{ color: "#1abc9c", fontStyle: "italic" }}>
          INR {price}
        </span>
      </p>
    </div>
  );
}
