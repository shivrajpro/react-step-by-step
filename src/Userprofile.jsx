import style from "./userProfile.module.css";
/*
Purpose of css modules is that it won't affect the css of elements outside the component
unlike external css
*/
const Userprofile = () => {
  return (
    <div className={style["user-card"]}>
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
  );
};

export default Userprofile;
