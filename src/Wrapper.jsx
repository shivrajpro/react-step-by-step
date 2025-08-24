const Wrapper = ({ children, color = "green" }) => {
  return <div style={{ color: color }}>{children}</div>;
};

export default Wrapper;
