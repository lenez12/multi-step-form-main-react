import { useState } from "react";
import { Advance, Arcade, Pro } from "@/assets/images";
import FormWrapper from "@/components/atoms/wrapper/FormWrapper";
import BillingToggle from "@/components/molecules/billing-toggle/BillingToggle";
import PlanCard from "@/components/molecules/card/PlanCard";
import SectionHeader from "@/components/molecules/section-header/SectionHeader";

const plans = [
  {
    id: 1,
    title: "Arcade",
    value: "arcade",
    price: "9",
    icon: Arcade,
  },
  {
    id: 2,
    title: "Advance",
    value: "advance",
    price: "12",
    icon: Advance,
  },
  {
    id: 3,
    title: "Pro",
    value: "pro",
    price: "15",
    icon: Pro,
  },
];

const FormSelectPlan = () => {
  const [isOn, setIsOn] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <FormWrapper>
      <SectionHeader
        title="Select your plan"
        description="You have the option of monthly or yearly billing"
      />
      <div className="flex lg:flex-row gap-4 sm:flex-col">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            name="plan"
            {...plan}
            price={`$${plan.price}/${isOn ? "yr" : "mo"}`}
            checked={selectedPlan === plan.value}
            onChange={setSelectedPlan}
            freeMonths={3}
            isYearly={isOn}
          />
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
