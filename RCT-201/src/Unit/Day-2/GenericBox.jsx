import React from "react";

const GenericBox = ({ children, style = {}, ...rest }) => {
  const defaultStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    backgroundColor: "#f9f9f9",
    ...style,
  };

  return (
    <div style={defaultStyle} {...rest}>
      {children}
    </div>
  );
};

export default GenericBox;
