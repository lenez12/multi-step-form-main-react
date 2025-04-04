import { Advance, Arcade, Pro } from "@/assets/images";
import { AddOnCardProps } from "@/components/molecules/card/AddOnCard";
import { StepType } from "@/components/organisms/side-bar/SideBar";

export const steps: StepType[] = [
  {
    active: true,
    label: "Your Info",
    number: 1,
  },
  {
    active: false,
    label: "Select plan",
    number: 2,
  },
  {
    active: false,
    label: "Add-ons",
    number: 3,
  },
  {
    active: false,
    label: "Summary",
    number: 4,
  },
];

export const initialAddons: AddOnCardProps[] = [
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

export const initPlans = [
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
