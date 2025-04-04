export type PersonalInfo = {
  name?: string;
  email?: string;
  phone?: string;
};

export type FormPlan = {
  plan?: string;
  isYearly?: boolean;
  price?: number;
};

export type FormAddons = {
  id: string;
  services: string;
  price: number;
};

export type FormState = {
  personalInfo: PersonalInfo | null;
  selectedPlan: FormPlan | null;
  addons: FormAddons[] | [];
};

export type FormAction =
  | {
      type: "UPDATE_PERSONAL_INFO";
      field: keyof PersonalInfo;
      value: string;
    }
  | {
      type: "UPDATE_PLAN";
      payload: FormPlan;
    }
  | {
      type: "ADD_ADDON";
      payload: FormAddons;
    }
  | {
      type: "REMOVE_ADDON";
      id: string;
    }
  | {
      type: "RESET_ADDONS";
    }
  | {
      type: "SET_ADDONS";
      payload: FormAddons[];
    }
  | {
      type: "RESET_FORM";
    };
