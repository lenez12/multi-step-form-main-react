import { FormState } from "@/context/types";

export const calculateTotalPrice = (state: FormState): number => {
  const planPrice = state.selectedPlan?.price ?? 0;
  const addonsTotal = state.addons.reduce((sum, addon) => {
    const parsedPrice =
      typeof addon.price === "string"
        ? parseFloat(addon.price)
        : addon.price || 0;

    return sum + parsedPrice;
  }, 0);

  return planPrice + addonsTotal;
};
