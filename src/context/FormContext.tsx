/* eslint-disable react-refresh/only-export-components */
// ✅ NO namespace! Just regular export
import { createContext, useReducer, useContext, ReactNode } from "react";
import { FormState, FormAction } from "./types";
import { formReducer, initialState } from "./formReducer";

type FormContextType = {
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
};

// ✅ 1. Create context
const FormContext = createContext<FormContextType | undefined>(undefined);

// ✅ 2. Provider component
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

// ✅ 3. Hook to consume context
export const useForm = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) throw new Error("useForm must be used within a FormProvider");
  return context;
};
