import Switch, { SwitchToggleProps } from "@/components/atoms/switch/Switch";
import React from "react";

interface BillingToggleProps extends SwitchToggleProps {
  monthlyLabel?: string;
  yearlyLabel?: string;
}

const BillingToggle: React.FC<BillingToggleProps> = ({
  checked,
  onChange,
  disabled,
  monthlyLabel = "Monthly",
  yearlyLabel = "Yearly",
}) => {
  return (
    <div className="flex items-center gap-4 w-full justify-center">
      <span
        className={`text-sm ${
          !checked ? "text-marine-blue font-bold" : "text-gray-400"
        }`}
      >
        {monthlyLabel}
      </span>
      <Switch
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="bg-marine-blue"
      />
      <span
        className={`text-sm ${
          checked ? "text-marine-blue font-bold" : "text-gray-400"
        }`}
      >
        {yearlyLabel}
      </span>
    </div>
  );
};

export default BillingToggle;
