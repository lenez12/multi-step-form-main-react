import clsx from "clsx";
import React from "react";

const Button: React.FC<{
  disabled?: boolean;
  label: string;
  type?: "button" | "submit";
  variant?: "primary" | "accent";
  onClick?: () => void;
}> = ({ disabled, label, onClick, type = "button", variant = "primary" }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick ? onClick : () => {}}
      type={type}
      className={clsx(
        `px-6 py-3 bg-marine-blue self-start text-white rounded-md 
        hover:opacity-85 cursor-pointer disabled:bg-gray-400 
        disabled:cursor-not-allowed select-none`,
        { "bg-purplish-blue": variant === "accent" }
      )}
    >
      {label}
    </button>
  );
};

export default Button;
