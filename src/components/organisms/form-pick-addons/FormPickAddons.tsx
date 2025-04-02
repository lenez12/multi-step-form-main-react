import FormWrapper from "@/components/atoms/wrapper/FormWrapper";
import AddOnCard, {
  AddOnCardProps,
} from "@/components/molecules/card/AddOnCard";
import SectionHeader from "@/components/molecules/section-header/SectionHeader";
import React, { useEffect, useState } from "react";

const initialAddons: AddOnCardProps[] = [
  {
    id: "1",
    label: "Online service",
    description: "Access to multiplayer games",
    price: "+$10/yr",
    checked: true,
  },
  {
    id: "2",
    label: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: "+$20/yr",
    checked: true,
  },
  {
    id: "3",
    label: "Customizable profile",
    description: "Custom theme on your profile",
    price: "+$20/yr",
    checked: false,
  },
];

const FormPickAddons: React.FC = () => {
  const [addons, setAddons] = useState<AddOnCardProps[]>(initialAddons);

  const toggleAddon = (id: string, checked: boolean) => {
    setAddons((prev) =>
      prev.map((addon) => (addon.id === id ? { ...addon, checked } : addon))
    );
  };

  useEffect(() => {
    console.log(addons.filter((addon) => addon.checked));
  }, [addons]);

  return (
    <FormWrapper>
      <SectionHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience"
      />
      <div className="flex flex-col gap-4">
        {addons.map((addon) => (
          <AddOnCard
            checked={addon.checked}
            label={addon.label}
            description={addon.description}
            price={addon.price}
            id={addon.id}
            onChange={(checked) => toggleAddon(addon.id, checked)}
          />
        ))}
      </div>
    </FormWrapper>
  );
};

export default FormPickAddons;
