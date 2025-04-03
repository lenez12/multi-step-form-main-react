import { FormAction, FormState } from "./types";

export const initialState: FormState = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
  },
  selectedPlan: {
    plan: "",
    isYearly: false,
    price: 0,
  },
  addons: [],
};

export const formReducer = (
  state: FormState,
  action: FormAction
): FormState => {
  switch (action.type) {
    case "UPDATE_PERSONAL_INFO":
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          [action.field]: action.value,
        },
      };

    case "UPDATE_PLAN":
      return {
        ...state,
        selectedPlan: { ...action.payload },
      };

    case "ADD_ADDON":
      return {
        ...state,
        addons: [...state.addons, action.payload],
      };

    case "REMOVE_ADDON":
      return {
        ...state,
        addons: state.addons.filter((addon) => addon.id !== action.id),
      };

    case "SET_ADDONS":
      return {
        ...state,
        addons: action.payload,
      };

    case "RESET_ADDONS":
      return {
        ...state,
        addons: initialState.addons,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
};
