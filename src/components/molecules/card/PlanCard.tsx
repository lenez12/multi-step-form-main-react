import clsx from "clsx";
import React from "react";

type Props = {
  title: string;
  subtitle: string;
  icon: string;
  active?: boolean;
};

const PlanCard: React.FC<Props> = ({ title, subtitle, icon, active }) => {
  return (
    <div
      className={clsx(
        `
      flex flex-row gap-4 py-5 px-4 rounded-xl
      border-gray-300 border-1 hover:border-marine-blue
      hover:bg-blue-50 hover:cursor-pointer sm:w-full
      lg:flex-col lg:gap-12 lg:w-fit min-w-[150px] 
      `,
        { "border-marine-blue bg-blue-50": active }
      )}
    >
      <img src={icon} className="w-12" alt="arcade" />
      <div className="flex flex-col ">
        <span className="text-xl text-marine-blue font-medium">{title}</span>
        <span className="text-body text-gray-400 font-medium">{subtitle}</span>
      </div>
    </div>
  );
};

export default PlanCard;
