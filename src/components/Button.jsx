import React from "react";


const Button = ({
  label,
  onClick,
  classStyle = "",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md font-medium transition duration-300 hover:opacity-90 border-[1px]  ${classStyle}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
