// components/atoms/CheckboxBox.tsx

import clsx from "clsx";
import React from "react";

interface CheckboxProps {
  id?: string;
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const CheckboxBox: React.FC<CheckboxProps> = ({ checked }) => {
  return (
    <div
      className={clsx(
        ` w-5 h-5 flex items-center justify-center rounded-sm border
           transition border-gray-400
      `,
        { "bg-purplish-blue text-white border-purplish-blue": checked }
      )}
    >
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </div>
  );
};

export default CheckboxBox;
