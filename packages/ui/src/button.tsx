"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = ({
  children,
  className,
  appName,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={
        type === "submit"
          ? undefined
          : () => alert(`Hello from your ${appName} app!`)
      }
    >
      {children}
    </button>
  );
};
