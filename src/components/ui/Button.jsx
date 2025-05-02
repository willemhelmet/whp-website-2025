import React from "react";

function Button({ children, onClick, variant = "primary" }) {
  return (
    <button className={`button button-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
