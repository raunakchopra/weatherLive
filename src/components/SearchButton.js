import React from "react";

const Button = () => {
  return (
    <button type="submit" style={styles}>
      Search!
    </button>
  );
};

export default Button;

const styles = {
  cursor: "pointer",
  textAlign: "center",
  backgroundColor: "#0099FF",
  color: "#ffffff",
  fontSize: "14px",
  padding: "10px",
  borderStyle: "none",
  borderRadius: "10px",
  width: "100px",
  outline: "none",
};
