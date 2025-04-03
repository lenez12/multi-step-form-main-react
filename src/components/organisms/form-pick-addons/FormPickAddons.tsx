import FormWrapper from "@/components/atoms/wrapper/FormWrapper";
import AddOnCard, {
  AddOnCardProps,
} from "@/components/molecules/card/AddOnCard";
import SectionHeader from "@/components/molecules/section-header/SectionHeader";
import { useForm } from "@/context/FormContext";
import React, { useEffect, useState } from "react";

const initialAddons: AddOnCardProps[] = [
  {
    id: "1",
    label: "Online service",
    description: "Access to multiplayer games",
    price: 1,
    checked: false,
  },
  {
    id: "2",
    label: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 2,
    checked: false,
  },
  {
    id: "3",
    label: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
    checked: false,
  },
];

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
          price,
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

    setAddons(synced);
  }, [state.addons, state.selectedPlan?.isYearly]);

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
