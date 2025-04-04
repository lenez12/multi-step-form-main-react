import InputField from "@/components/atoms/input-field/InputField";
import Label from "@/components/atoms/label/Label";
import React from "react";

type Props = {
  label: string;
  placeholder: string;
  value?: string;
  error?: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputMode?: "text" | "email" | "numeric" | "tel";
};

const InputWithLabel: React.FC<Props> = ({
  label,
  placeholder,
  value,
  error,
  name,
  type,
  inputMode = "text",
  onChange,
}) => {
  return (
    <div className="mb-4">
      <Label text={label} error={error} htmlFor={name} />
      <InputField
        name={name}
        type={type}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange ? onChange : () => {}}
        hasError={!!error}
        key={name}
        inputMode={inputMode}
      />
    </div>
  );
};

export default InputWithLabel;
