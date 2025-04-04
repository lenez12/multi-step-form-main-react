/* eslint-disable react-hooks/exhaustive-deps */
import FormWrapper from "@/components/atoms/wrapper/FormWrapper";
import AddOnCard, {
  AddOnCardProps,
} from "@/components/molecules/card/AddOnCard";
import SectionHeader from "@/components/molecules/section-header/SectionHeader";
import { initialAddons } from "@/constants/constant";
import { useForm } from "@/context/FormContext";
import React, { useEffect, useState } from "react";

const FormPickAddons: React.FC = () => {
  const { state, dispatch } = useForm();
  const [addons, setAddons] = useState<AddOnCardProps[]>(initialAddons);

  const toggleHandler = ({ id, price, label }: AddOnCardProps) => {
    const isSelected = state.addons.some((addon) => addon.id === id);

    if (isSelected) {
      dispatch({ type: "REMOVE_ADDON", id });
    } else {
      dispatch({
        type: "ADD_ADDON",
        payload: {
          id,
          services: label,
          price: Number(price),
        },
      });
    }
  };

  useEffect(() => {
    const selectedIds = new Set(state.addons.map((a) => a.id)); // from context

    const synced = initialAddons.map((addon) => ({
      ...addon,
      price: state.selectedPlan?.isYearly
        ? Number(addon.price) * 10
        : Number(addon.price),
      checked: selectedIds.has(addon.id),
    }));
    const newAddons = synced
      .filter((addon) => addon.checked)
      .map((addon) => ({
        id: addon.id,
        services: addon.label,
        price: addon.price,
      }));
    dispatch({ type: "SET_ADDONS", payload: newAddons });
    setAddons(synced);
  }, [state.selectedPlan?.isYearly]);

  return (
    <FormWrapper>
      <SectionHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience"
      />
      <div className="flex flex-col gap-4">
        {addons.map((addon) => (
          <AddOnCard
            key={addon.id}
            label={addon.label}
            description={addon.description}
            price={`+$${addon.price}/${
              state.selectedPlan?.isYearly ? "yr" : "mo"
            }`}
            id={addon.id}
            checked={state.addons.some((a) => a.id === addon.id)}
            onChange={() => toggleHandler(addon)}
          />
        ))}
      </div>
    </FormWrapper>
  );
};

export default FormPickAddons;
