import clsx from "clsx";
import React, { HTMLProps } from "react";

export interface SwitchToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: HTMLProps<HTMLElement>["className"];
}

const Switch: React.FC<SwitchToggleProps> = ({
  checked,
  onChange,
  disabled = false,
  label = "",
  className,
}) => {
  return (
    <label
      htmlFor="billing-toggle"
      className="relative block items-center cursor-pointer"
    >
      <input
        id="billing-toggle"
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        role="switch"
      />
      <span className="sr-only">Toggle billing period</span>
      <div
        className={clsx(
          `w-11 h-6 bg-gray-300 rounded-full 
           peer-checked:bg-marine-blue transition-all duration-300`,
          { "bg-gray-300": disabled },
          className
        )}
      ></div>
      <div
        className={clsx(
          `absolute left-1 top-1 w-4 h-4 bg-white rounded-full 
             transition-all duration-300 block`,
          { "translate-x-full": checked }
        )}
      ></div>
      {label && <span className="ml-3 text-sm text-gray-700">{label}</span>}
    </label>
  );
};

export default Switch;
