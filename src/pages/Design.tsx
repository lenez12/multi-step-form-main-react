import FormInfo, {
  FormInfoHandle,
} from "@/components/organisms/form-info/FormInfo";
import FormNavigation from "@/components/organisms/form-navigation/FormNavigation";
import SideBar, { StepType } from "@/components/organisms/side-bar/SideBar";
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

const Design = () => {
  const [step, setStep] = React.useState(1);
  const formInfoRef = React.useRef<FormInfoHandle>(null);

  const handleSubmit = () => {
    const form = formInfoRef.current?.validateAndGetData();
    console.log({ form });

    if (!form?.isValid) {
      return;
    }

    setStep((prev) => (prev < 4 ? prev + 1 : 4));
  };

  const onBack = () => setStep((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div
      className={`
        lg:m-1.5 lg:p-4 flex lg:flex-row gap-4 sm: flex-col sm:h-screen lg:h-auto
        sm:justify-between lg:justify-normal sm:bg-[hsl(var(--color-light-blue)_/_0.3)]
        lg:bg-white shadow-2xl lg:rounded-2xl min-w-[450px]`}
    >
      <SideBar steps={steps} currentStep={step} />
      <div
        className={`
        flex p-6 bg-white rounded-2xl 
         sm:mx-auto sm:mt-[-39vh] 
         sm:max-w-[90%] sm:min-w-[90%] sm:min-h-[300px] lg:mx-0 lg:mt-0 
         lg:max-w-[45%] md:min-w-[75%] lg:min-w-[700px]
         border-gray-300  flex-col justify-between sm:shadow-2xl lg:shadow-[0]
         gap-3 
        `}
      >
        <FormInfo ref={formInfoRef} />
        {/* <FormSelectPlan /> */}
        <FormNavigation
          step={step}
          onBack={onBack}
          disabledNext={step === 4}
          onNext={handleSubmit}
          isMobile={false}
        />
      </div>

      <FormNavigation
        step={step}
        onBack={onBack}
        disabledNext={step === 4}
        onNext={handleSubmit}
        isMobile={true}
      />
    </div>
  );
};

export default Design;
