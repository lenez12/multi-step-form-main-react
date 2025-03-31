import { useState, useCallback } from "react";

type Rules = {
  required?: boolean;
};

export const useFormField = (initial = "", rules?: Rules) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(""); // Clear error on change
  };

  const validate = useCallback(() => {
    if (rules?.required && !value.trim()) {
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
