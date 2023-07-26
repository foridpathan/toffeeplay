import type { ComponentProps, FC, ReactNode } from "react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { HelperText } from "../HelperText";
import { Colors, Sizing } from "../type";

export interface TextInputProps
  extends Omit<ComponentProps<"input">, "ref" | "color"> {
  addon?: ReactNode;
  color?: Colors;
  helperText?: ReactNode;
  icon?: FC<ComponentProps<"svg">>;
  rightIcon?: FC<ComponentProps<"svg">>;
  shadow?: boolean;
  sizing?: Sizing;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      addon,
      className,
      color = "gray",
      helperText,
      icon: Icon,
      rightIcon: RightIcon,
      shadow,
      sizing = "md",
      ...props
    },
    ref
  ) => {
    const theme = {
      base: "flex",
      addon:
        "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
      field: {
        base: "relative w-full",
        icon: {
          base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
          svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
        },
        rightIcon: {
          base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
          svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
        },
        input: {
          base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
          sizes: {
            sm: "p-2 sm:text-xs",
            md: "p-2.5 text-sm",
            lg: "sm:text-md p-4",
          },
          colors: {
            default:
              "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
            gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
            info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
            failure:
              "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
            warning:
              "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
            success:
              "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
          },
          withRightIcon: {
            on: "pr-10",
            off: "",
          },
          withIcon: {
            on: "pl-10",
            off: "",
          },
          withAddon: {
            on: "rounded-r-lg",
            off: "rounded-lg",
          },
          withShadow: {
            on: "shadow-sm dark:shadow-sm-light",
            off: "",
          },
        },
      },
    };

    return (
      <>
        <div className={twMerge(theme.base, className)}>
          {addon && <span className={theme.addon}>{addon}</span>}
          <div className={theme.field.base}>
            {Icon && (
              <div className={theme.field.icon.base}>
                <Icon className={theme.field.icon.svg} />
              </div>
            )}
            {RightIcon && (
              <div
                data-testid="right-icon"
                className={theme.field.rightIcon.base}>
                <RightIcon className={theme.field.rightIcon.svg} />
              </div>
            )}
            <input
              className={twMerge(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.sizes[sizing],
                theme.field.input.withIcon[Icon ? "on" : "off"],
                theme.field.input.withRightIcon[RightIcon ? "on" : "off"],
                theme.field.input.withAddon[addon ? "on" : "off"],
                theme.field.input.withShadow[shadow ? "on" : "off"]
              )}
              {...props}
              ref={ref}
            />
          </div>
        </div>
        {helperText && <HelperText color={color}>{helperText}</HelperText>}
      </>
    );
  }
);

TextInput.displayName = "TextInput";
