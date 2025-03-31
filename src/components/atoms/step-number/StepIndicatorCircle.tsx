import clsx from "clsx";
import React from "react";

type Props = {
  number: string | number;
  active?: boolean;
};

const StepNumber: React.FC<Props> = ({ number, active }) => {
  const circleClass = clsx(
    "relative aspect-square lg:w-[35px] sm:w-[45px] max-w-[60px] min-w-[20px] rounded-full  flex items-center justify-center border-[1px] border-gray-100 bg-* transition-colors duration-300 ease-in-out",
    { "bg-indicator-circle ": active }
  );
  const textClass = clsx("text-[1em] text-amber-50 font-medium", {
    "text-black": active,
  });
  return (
    <div className={`${circleClass}`}>
      <span className={`${textClass}`}>{number}</span>
    </div>
  );
};

export default StepNumber;
