import type { ComponentProps, FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { Colors } from "../type";

export interface HelperTextProps
  extends PropsWithChildren<Omit<ComponentProps<"p">, "color">> {
  color?: Colors;
  value?: string;
}

export const HelperText: FC<HelperTextProps> = ({
  children,
  className,
  color = "default",
  value,
  ...props
}) => {
  const theme = {
    base: "mt-2 text-sm",
    colors: {
      default: "text-gray-500 dark:text-gray-400",
      gray: "text-gray-500 dark:text-gray-400",
      info: "text-cyan-700 dark:text-cyan-800",
      success: "text-green-600 dark:text-green-500",
      failure: "text-red-600 dark:text-red-500",
      warning: "text-yellow-500 dark:text-yellow-600",
    },
  };

  return (
    <p
      className={twMerge(theme.base, theme.colors[color], className)}
      {...props}>
      {value ?? children ?? ""}
    </p>
  );
};

HelperText.displayName = "HelperText";
