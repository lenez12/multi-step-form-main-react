import SummaryRow from "@/components/atoms/surrmary-row/SummaryRow";
import FormWrapper from "@/components/atoms/wrapper/FormWrapper";
import SectionHeader from "@/components/molecules/section-header/SectionHeader";
import { useForm } from "@/context/FormContext";
import React from "react";
import { calculateTotalPrice } from "./utillity";

interface FormFinishInterface {
  onChange?: () => void;
  selectAddon?: () => void;
}

const FormFinish: React.FC<FormFinishInterface> = ({
  onChange,
  selectAddon,
}) => {
  const { state, dispatch } = useForm();
  const unit = state.selectedPlan?.isYearly ? "/yr" : "/mo";
  const interval = state.selectedPlan?.isYearly ? "year" : "month";
  const duration = state.selectedPlan?.isYearly ? "Yearly" : "Montly";

  return (
    <FormWrapper>
      <SectionHeader
        title="Finishing up"
        description="Double-check everything looks OK before confirming"
      />

      <div className="bg-alabaster p-5 rounded-lg space-y-4">
        {/* Plan row */}
        <div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-marine-blue font-bold text-lg capitalize">
                {state.selectedPlan?.plan} ({duration})
              </p>
              <button
                type="button"
                onClick={() => {
                  onChange?.();
                  dispatch({ type: "RESET_ADDONS" });
                }}
                className="text-lg text-cool-gray underline  hover:text-purplish-blue cursor-pointer"
              >
                Change
              </button>
            </div>
            <p className="font-bold text-marine-blue text-lg">
              ${state.selectedPlan?.price}
              {unit}
            </p>
          </div>
          <hr className="mt-3 border-light-gray" />
        </div>

        {/* Add-ons */}
        <div className="space-y-2">
          {state.addons.map((item, idx) => (
            <SummaryRow
              key={idx}
              label={item.services}
              price={`$${item.price}/${
                state.selectedPlan?.isYearly ? "yr" : "mo"
              }`}
              muted
            />
          ))}
          {state.addons.length === 0 && (
            <span className="text-cool-gray text-body">
              No add-ons selected. Click{" "}
              <a
                className="underline cursor-pointer"
                onClick={() => selectAddon?.()}
              >
                here
              </a>{" "}
              to select some.
            </span>
          )}
        </div>
      </div>
      {/* Total */}
      <div className="flex justify-between px-5">
        <span className="text-cool-gray text-lg">Total (per {interval})</span>
        <span className="text-purplish-blue font-bold text-lg">
          +{calculateTotalPrice(state)}
          {unit}
        </span>
      </div>
    </FormWrapper>
  );
};

export default FormFinish;
