import React from "react";

const Input = (props) => {
  return (
    <input
      placeholder="Enter the City..."
      style={styles}
      ref={props.reg}
      name={props.Name}
    />
  );
};

export default Input;

const styles = {
  backgroundColor: "#EBEBEB",
  borderStyle: "none",
  fontSize: "15px",
  padding: "12px",
  borderRadius: "10px",
  textColor: "#333",
  outline: "none",
};
