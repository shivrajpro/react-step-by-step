import "./styles.css";

export default function App() {
  return (
    <div>
      <h1 className="heading">External CSS</h1>
      <div className="user-card">
        <img
          style={{ width: "200px" }}
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="user-img"
        />
        <div style={{ padding: "10px" }}>
          <h4>John Doe</h4>
          <p>Software Developer</p>
        </div>
      </div>
    </div>
  );
}
