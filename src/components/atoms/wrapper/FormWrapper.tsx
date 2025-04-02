import clsx from "clsx";
import React, { HTMLProps } from "react";

type Props = {
  children: React.ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
};

const FormWrapper: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={clsx(`flex flex-col  gap-8  flex-1 lg:min-w-lg`, className)}
    >
      {children}
    </div>
  );
};

export default FormWrapper;
