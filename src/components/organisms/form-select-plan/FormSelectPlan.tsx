/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Advance, Arcade, Pro } from "@/assets/images";
import FormWrapper from "@/components/atoms/wrapper/FormWrapper";
import BillingToggle from "@/components/molecules/billing-toggle/BillingToggle";
import PlanCard from "@/components/molecules/card/PlanCard";
import SectionHeader from "@/components/molecules/section-header/SectionHeader";
import { useForm } from "@/context/FormContext";

export type FormPlanHandle = {
  validateAndGetData: () => {
    title: string;
    plan: string;
    price: string;
    isYearly: boolean;
    isValid: boolean;
  };
};

const initPlans = [
  {
    id: 1,
    title: "Arcade",
    plan: "arcade",
    price: 9,
    icon: Arcade,
  },
  {
    id: 2,
    title: "Advance",
    plan: "advance",
    price: 12,
    icon: Advance,
  },
  {
    id: 3,
    title: "Pro",
    plan: "pro",
    price: 15,
    icon: Pro,
  },
];

const FormSelectPlan: React.FC = () => {
  const { state, dispatch } = useForm();
  const [plans, setPlans] = useState(initPlans);
  const [isOn, setIsOn] = useState(state.selectedPlan?.isYearly);

  useEffect(() => {
    if (isOn) {
      const newPlan = plans.map((plan) => ({
        ...plan,
        price: plan.price * 10,
      }));
      setPlans(newPlan);
    } else {
      setPlans(initPlans);
    }
    dispatch({
      type: "UPDATE_PLAN",
      payload: { ...state.selectedPlan, isYearly: isOn },
    });
  }, [isOn]);
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
            checked={state.selectedPlan?.plan === plan.plan}
            onChange={() =>
              dispatch({
                type: "UPDATE_PLAN",
                payload: {
                  isYearly: isOn,
                  plan: plan.plan,
                  price: plan.price,
                },
              })
            }
            freeMonths={2}
            isYearly={isOn}
          />
        ))}
      </div>
      <div className="flex justify-center bg-gray-100 py-3 rounded-lg">
        <BillingToggle
          checked={state.selectedPlan?.isYearly ?? false}
          onChange={setIsOn}
          yearlyLabel="Yearly"
          monthlyLabel="Monthly"
        />
      </div>
    </FormWrapper>
  );
};
export default FormSelectPlan;
