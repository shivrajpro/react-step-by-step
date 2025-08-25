import { useState } from "react";

export default function App() {
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #ccc",
    width: "200px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    margin: "10px",
  });

  const [grid, setGrid] = useState(true);

  const updateTheme = (bgColor, textColor) => {
    console.log(bgColor, textColor);
    setCardStyle({ ...cardStyle, backgroundColor: bgColor, color: textColor });
  };

  return (
    <div>
      <button onClick={() => updateTheme("gray", "white")}>Gray Theme</button>
      <button onClick={() => updateTheme("white", "black")}>
        Default Theme
      </button>
      <button onClick={() => setGrid(!grid)}>Toggle Grid</button>
      <div style={{ display: grid ? "flex" : "block", flexWrap: "wrap" }}>
        <div style={cardStyle}>
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
        <div style={cardStyle}>
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
        <div style={cardStyle}>
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
    </div>
  );
}
