import { Arcade, Advance, Pro } from "@/assets/images";
import FormWrapper from "@/components/atoms/wrapper/FormWrapper";
import BillingToggle from "@/components/molecules/billing-toggle/BillingToggle";
import PlanCard from "@/components/molecules/card/PlanCard";
import SectionHeader from "@/components/molecules/section-header/SectionHeader";
import { useState } from "react";

const plans = [
  {
    id: 1,
    title: "Arcade",
    subtitle: "$9/mo",
    icon: Arcade,
  },
  {
    id: 2,
    title: "Advance",
    subtitle: "$12/mo",
    icon: Advance,
  },
  {
    id: 3,
    title: "Pro",
    subtitle: "$15/mo",
    icon: Pro,
  },
];

const FormSelectPlan = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <FormWrapper>
      <SectionHeader
        title="Select your plan"
        description="You have the option of monthly or yearly billing"
      />
      <div className="flex lg:flex-row gap-4 sm:flex-col">
        {plans.map((plan) => (
          <PlanCard key={plan.id} {...plan} active={plan.id === 1} />
        ))}
      </div>
      <div className="flex justify-center bg-gray-100 py-3 rounded-lg">
        <BillingToggle
          checked={isOn}
          onChange={setIsOn}
          yearlyLabel="Yearly"
          monthlyLabel="Monthly"
        />
      </div>
    </FormWrapper>
  );
};

export default FormSelectPlan;
