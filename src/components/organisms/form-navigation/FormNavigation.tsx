import Button from "@/components/atoms/button/Button";
import LinkButton from "@/components/atoms/button/LinkButton";
import clsx from "clsx";

type Props = {
  step: number;
  onBack: () => void;
  onNext: () => void;
  disabledNext?: boolean;
  isMobile: boolean;
};

const FormNavigation: React.FC<Props> = ({
  step,
  onBack,
  onNext,
  disabledNext,
  isMobile,
}) => {
  if (!isMobile) {
    return (
      <>
        {/* Desktop */}
        <div
          className={clsx(
            "lg:flex  sm:hidden flex-row gap-4 justify-between bg-white",
            { "justify-end": step === 1 }
          )}
        >
          <div className={step === 1 ? "sr-only" : ""}>
            <LinkButton
              label="Go Back"
              disabled={step === 1}
              onClick={onBack}
            />
          </div>
          <Button label="Next Step" disabled={disabledNext} onClick={onNext} />
        </div>
      </>
    );
  }
  return (
    <div
      className={clsx(
        "lg:hidden flex flex-row gap-4 justify-between px-6 py-4 bg-white",
        { "justify-end": step === 1 }
      )}
    >
      <div className={step === 1 ? "sr-only" : ""}>
        <LinkButton label="Go Back" disabled={step === 1} onClick={onBack} />
      </div>
      <Button label="Next Step" disabled={disabledNext} onClick={onNext} />
    </div>
  );
};

export default FormNavigation;
