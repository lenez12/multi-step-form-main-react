import FormFinish from "@/components/organisms/form-finish/FormFinish";
import FormInfo, {
  FormInfoHandle,
} from "@/components/organisms/form-info/FormInfo";
import FormNavigation from "@/components/organisms/form-navigation/FormNavigation";
import FormPickAddons from "@/components/organisms/form-pick-addons/FormPickAddons";
import FormSelectPlan from "@/components/organisms/form-select-plan/FormSelectPlan";
import SideBar, { StepType } from "@/components/organisms/side-bar/SideBar";
import Thankyou from "@/components/organisms/thankyou/Thankyou";
import { useForm } from "@/context/FormContext";
import React from "react";

const steps: StepType[] = [
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

const DefaultLayout = () => {
  const [step, setStep] = React.useState(1);
  const formInfoRef = React.useRef<FormInfoHandle>(null);
  const { state, dispatch } = useForm();

  const handleSubmit = () => {
    const form = formInfoRef.current?.validateAndGetData();
    if (step === 4) {
      dispatch({ type: "RESET_FORM" });
      setStep((prev) => (prev < 5 ? prev + 1 : 4));
    } else if (form?.isValid) {
      setStep((prev) => (prev < 5 ? prev + 1 : 4));
    } else if (state.selectedPlan?.plan) {
      setStep((prev) => (prev < 5 ? prev + 1 : 4));
    } else {
      return;
    }
  };

  const onBack = () => {
    if (step === 3) {
      dispatch({ type: "RESET_ADDONS" });
    }
    setStep((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div
      className={`grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-4 
        sm:grid-rows-[150px_50px_minmax(400px,_1fr)_70px] lg:grid-rows-1 
         lg:bg-white sm:bg-blue-50 lg:shadow-2xl
         lg:p-6 lg:rounded-2xl sm:w-full lg:w-fit`}
    >
      <SideBar steps={steps} currentStep={step} className="sm:row-span-2" />
      <div
        className={`lg:col-span-2 sm:mx-auto  bg-white sm:max-w-[90%] 
            lg:p-4 lg:shadow-[0] sm:shadow-2xl sm:mt-[-85px] lg:mt-[0]
            rounded-2xl sm:max-h-fit lg:max-h-full flex flex-col justify-between 
            lg:max-w-[90%] lg:mx-auto sm:p-8 `}
      >
        {step === 1 && <FormInfo ref={formInfoRef} />}
        {step === 2 && <FormSelectPlan />}
        {step === 3 && <FormPickAddons />}
        {step === 4 && <FormFinish onChange={() => setStep(2)} />}
        {step === 5 && <Thankyou />}

        <FormNavigation
          step={step}
          onBack={onBack}
          onNext={handleSubmit}
          isMobile={false}
          visible={step < 5}
          nexbuttonText={step === 4 ? "Confirm" : "Next Step"}
          nextButtonVariant={step === 4 ? "accent" : "primary"}
          className="justify-between"
        />
      </div>
      <FormNavigation
        step={step}
        onBack={onBack}
        onNext={handleSubmit}
        isMobile={true}
        visible={step < 5}
        nexbuttonText={step === 4 ? "Confirm" : "Next Step"}
        nextButtonVariant={step === 4 ? "accent" : "primary"}
      />
    </div>
  );
};

export default DefaultLayout;
