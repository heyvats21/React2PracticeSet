export default function Q3({ userData }) {
  return (
    <div>
      <h2>Question 3</h2>
      <p>
        {userData.name}: {userData.age}: {userData.email}
      </p>
    </div>
  );
}
