import Button from "@/components/atoms/button/Button";
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
  return (
    <div className="lg:m-1.5 lg:p-2 flex lg:flex-row gap-4 sm: flex-col">
      <SideBar steps={steps} currentStep={step} />
      <div
        className={`
        flex p-6 bg-white rounded-2xl grow flex-1/2
         sm:mx-auto sm:mt-[-110px] sm:min-h-[300px] sm:min-w-[90%]
         lg:mx-0 lg:mt-0 shadow-2xl 
         lg:max-w-[45%] md:max-w-[65%] lg:min-w-[700px]
         border-gray-300 border-[1px]
        `}
      >
        <div className="flex flex-row gap-4 self-end justify-between  grow">
          <Button
            label="Back"
            disabled={step === 1}
            onClick={() => setStep((prev) => (prev > 0 ? prev - 1 : 0))}
          />
          <Button
            label="Next Step"
            disabled={step === 4}
            onClick={() => setStep((prev) => (prev < 4 ? prev + 1 : 4))}
          />
        </div>
      </div>
    </div>
  );
};

export default Design;
