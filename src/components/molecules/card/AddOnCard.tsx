// components/molecules/AddOnCard.tsx

import CheckboxBox from "@/components/atoms/checkbox/Checkbox";
import clsx from "clsx";
import React from "react";

export interface AddOnCardProps {
  id: string;
  label: string;
  description: string;
  price: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const AddOnCard: React.FC<AddOnCardProps> = ({
  id,
  label,
  description,
  price,
  checked,
  onChange,
}) => {
  return (
    <label
      htmlFor={id}
      className={clsx(
        `flex items-center gap-4 border rounded-lg p-4 
          cursor-pointer transition-all border-gray-300
      `,
        { "border-purplish-blue bg-[hsla(243,100%,62%,0.05)]": checked }
      )}
    >
      <input
        type="checkbox"
        id={id}
        className="peer hidden"
        checked={checked}
        onChange={onChange ? (e) => onChange(e.target.checked) : () => {}}
      />

      <CheckboxBox checked={checked ?? false} />

      <div className="flex-1">
        <p className="font-bold text-lg text-marine-blue">{label}</p>
        <p className="text-md text-cool-gray">{description}</p>
      </div>

      <div className="text-lg text-purplish-blue font-normal">{price}</div>
    </label>
  );
};

export default AddOnCard;
