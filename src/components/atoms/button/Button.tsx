import React from "react";

const Button: React.FC<{
  disabled?: boolean;
  label: string;
  type?: "button" | "submit";
  onClick?: () => void;
}> = ({ disabled, label, onClick, type = "button" }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick ? onClick : () => {}}
      type={type}
      className="px-6 py-2 bg-marine-blue self-start text-white rounded-md hover:opacity-85 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed select-none"
    >
      {label}
    </button>
  );
};

export default Button;
