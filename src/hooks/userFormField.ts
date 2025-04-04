import { useState, useCallback } from "react";

type Rules = {
  required?: boolean;
  email?: boolean;
  phone?: boolean;
};

export const useFormField = (initial = "", rules?: Rules) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(""); // Clear error on change
  };

  const validate = useCallback(() => {
    const trimmed = value.trim();

    if (rules?.phone) {
      const phoneRegex = /^[0-9]{8,15}$/;
      if (!phoneRegex.test(trimmed)) {
        setError("Phone number must be 8–15 digits");
        return false;
      }
    }

    if (rules?.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) {
        setError("Please enter a valid email address");
        return false;
      }
    }

    if (rules?.required && !trimmed) {
      setError("This field is required");
      return false;
    }

    setError(""); // Clear any previous error
    return true;
  }, [value, rules]);

  return {
    value,
    error,
    onChange,
    validate,
    setValue,
    setError,
  };
};
