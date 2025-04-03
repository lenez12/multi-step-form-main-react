import clsx from "clsx";
import React from "react";
interface Props {
  title: string;
  price: string;
  icon: string;
  plan: string;
  name: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  freeMonths?: number;
  isYearly?: boolean;
}
const PlanCard: React.FC<Props> = ({
  title,
  price,
  icon,
  plan,
  name,
  checked,
  onChange,
  isYearly = false,
  freeMonths = 2,
}) => {
  return (
    <label className="relative block transition-transform">
      <input
        type="radio"
        name={name}
        value={plan}
        checked={checked}
        onChange={() => onChange?.(plan)}
        className="peer hidden"
      />

      <div
        className={clsx(
          `
          flex flex-row gap-4 py-5 px-4 rounded-xl border border-gray-300
          cursor-pointer sm:w-full transition-all duration-300 ease-in-out
          hover:scale-[1.01] hover:border-marine-blue hover:bg-blue-50
          lg:flex-col lg:gap-12 lg:w-fit min-w-[150px]
          peer-checked:border-marine-blue peer-checked:bg-blue-50
          peer-checked:scale-[1.02] peer-checked:shadow-md
        `
        )}
      >
        <img src={icon} className="w-12 self-start" alt={title} />

        <div className="flex flex-col">
          <span className="text-xl text-marine-blue font-medium">{title}</span>
          <span className="text-body text-gray-400 font-medium">{price}</span>

          <div
            className={clsx(
              "transition-all duration-300 origin-top",
              isYearly
                ? "opacity-100 scale-100 max-h-10"
                : "opacity-0 scale-95 max-h-0 overflow-hidden"
            )}
          >
            <span className="text-body text-marine-blue">
              {freeMonths} months free
            </span>
          </div>
        </div>
      </div>
    </label>
  );
};

export default PlanCard;
