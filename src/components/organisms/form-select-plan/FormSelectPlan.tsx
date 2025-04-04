/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import FormWrapper from "@/components/atoms/wrapper/FormWrapper";
import BillingToggle from "@/components/molecules/billing-toggle/BillingToggle";
import PlanCard from "@/components/molecules/card/PlanCard";
import SectionHeader from "@/components/molecules/section-header/SectionHeader";
import { useForm } from "@/context/FormContext";
import { initPlans } from "@/constants/constant";

export type FormPlanHandle = {
  validateAndGetData: () => {
    title: string;
    plan: string;
    price: string;
    isYearly: boolean;
    isValid: boolean;
  };
};

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
      const statePlan = newPlan.find(
        (plan) => plan.plan === state.selectedPlan?.plan
      );
      setPlans(newPlan);
      if (statePlan) {
        dispatch({
          type: "UPDATE_PLAN",
          payload: {
            isYearly: true,
            plan: statePlan.plan,
            price: statePlan.price,
          },
        });
      }
    } else {
      const statePlan = initPlans.find(
        (plan) => plan.plan === state.selectedPlan?.plan
      );
      if (statePlan) {
        dispatch({
          type: "UPDATE_PLAN",
          payload: {
            isYearly: false,
            plan: statePlan.plan,
            price: statePlan.price,
          },
        });
      }
      setPlans(initPlans);
    }
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
