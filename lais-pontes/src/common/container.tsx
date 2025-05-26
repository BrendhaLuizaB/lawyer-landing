import classNames from "classnames";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={classNames("tablet:px-12 tablet:py-6", className)}>
      {children}
    </div>
  );
}
