import React from "react";

type Props = {
  htmlFor: string;
  text: string;
  error?: string;
};

const Label: React.FC<Props> = ({ text, error, htmlFor }) => (
  <div className="flex justify-between items-center mb-1 text-marine-blue">
    <label htmlFor={htmlFor} className="text-sm text-navy-800 font-medium">
      {text}
    </label>
    {error && <span className="text-sm text-red-600 font-bold">{error}</span>}
  </div>
);

export default Label;
