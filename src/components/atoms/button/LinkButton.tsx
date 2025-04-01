import React from "react";

const LinkButton: React.FC<{
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
      className="px-6 py-3 font-bold text-gray-400 hover:text-marine-blue self-start  rounded-md hover:opacity-85 cursor-pointer disabled:text-gray-400 disabled:cursor-not-allowed select-none"
    >
      {label}
    </button>
  );
};

export default LinkButton;
