import AddOnCard, {
  AddOnCardProps,
} from "@/components/molecules/card/AddOnCard";
import SectionHeader from "@/components/molecules/section-header/SectionHeader";
import React from "react";

const addons: AddOnCardProps[] = [
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
  return (
    <div className=" flex flex-col lg:w-[90%] sm:w-[100%] md:w-[100%] self-center gap-8 justify-center grow">
      <SectionHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience"
      />
      {addons.map((addon) => (
        <AddOnCard
          checked={addon.checked}
          label={addon.label}
          description={addon.description}
          price={addon.price}
          id={addon.id}
          onChange={() => {}}
        />
      ))}
    </div>
  );
};

export default FormPickAddons;
