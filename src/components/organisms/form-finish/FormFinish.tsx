import SummaryRow from "@/components/atoms/surrmary-row/SummaryRow";
import SectionHeader from "@/components/molecules/section-header/SectionHeader";
import React from "react";

interface FormFinishInterface {
  plan: string;
  price: string;
  onChange?: () => void;
  addons?: { label: string; price: string }[];
  total: string;
  isMonthly?: boolean;
}

const FormFinish: React.FC<FormFinishInterface> = ({
  plan,
  price,
  addons = [],
  onChange,
  total,
  isMonthly = true,
}) => {
  const unit = isMonthly ? "/mo" : "/yr";

  return (
    <div className=" flex flex-col lg:w-[90%] sm:w-[100%] md:w-[100%] self-center gap-6 justify-center grow">
      <SectionHeader
        title="Finishing up"
        description="Double-check everything looks OK before confirming"
      />

      <div className="bg-alabaster p-5 rounded-lg space-y-4">
        {/* Plan row */}
        <div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-marine-blue font-bold text-lg">{plan}</p>
              <button
                type="button"
                onClick={onChange}
                className="text-lg text-cool-gray underline  hover:text-purplish-blue"
              >
                Change
              </button>
            </div>
            <p className="font-bold text-marine-blue text-lg">{price}</p>
          </div>
          <hr className="mt-3 border-light-gray" />
        </div>

        {/* Add-ons */}
        <div className="space-y-2">
          {addons.map((item, idx) => (
            <SummaryRow key={idx} label={item.label} price={item.price} muted />
          ))}
        </div>
      </div>
      {/* Total */}
      <div className="flex justify-between px-5">
        <span className="text-cool-gray text-lg">
          Total (per {isMonthly ? "month" : "year"})
        </span>
        <span className="text-purplish-blue font-bold text-lg">
          +{total}
          {unit}
        </span>
      </div>
    </div>
  );
};

export default FormFinish;
