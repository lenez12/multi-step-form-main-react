import React from "react";

type Props = {
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  name: string;
  type?: React.HTMLInputTypeAttribute;
};

const InputField: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
  hasError,
  name,
  type,
}) => {
  return (
    <input
      type={type ?? "text"}
      name={name}
      placeholder={placeholder}
      value={value}
      aria-autocomplete="none"
      onChange={onChange ? onChange : () => {}}
      className={`
        w-full px-4 py-3 border rounded-md 
        outline-none transition-all tracking-wide
        font-semibold
          ${
            hasError
              ? "border-red-500 text-red-700"
              : "border-gray-300 text-gray-700"
          }
          placeholder-gray-400`}
    />
  );
};

export default InputField;
