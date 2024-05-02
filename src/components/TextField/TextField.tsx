"use client";
import React, { forwardRef } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface TextFieldProps {
  className?: string;
  placeholder?: string;
  label?: string;
  maxLength?: number;
  name?: string;
  value?: string | number;
  type?: string | "text" | "password" | "number";
  borderType?: "rounded" | "default" | "normal";
  required?: boolean;
  disabled?: boolean;
  regeEx?: string;
  id?: string;
  onFocus?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  variant?: "default" | "large" | "medium" | "small";
  children?: React.ReactNode;
  autofocus?: boolean;
}

const TextFieldVariant = cva(
  "rounded-[3px] border-[1px] border-[#a7a7a7] flex w-full overflow-hidden text-[15px]",
  {
    variants: {
      variant: {
        default: "min-h-[50px]",
        large: "min-h-[50px]",
        small: "min-h-[30px]",
        medium: "min-h-[44px]",
      },
      borderType: {
        default: " rounded-[3px]",
        rounded: "rounded-md",
        normal: "rounded-none",
      },
    },
    defaultVariants: { variant: "default", borderType: "default" },
  }
);

const TextField: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TextFieldProps
> = (
  {
    className,
    placeholder,

    type,
    id,
    value,
    maxLength,
    onFocus,
    onBlur,
    variant,
    disabled,
    borderType,
    onChange,
    name,
    autofocus,
    ...props
  },
  ref
) => {
  return (
    <Input
      {...props}
      id={id}
      disabled={disabled}
      ref={ref}
      className={cn(TextFieldVariant({ className, variant, borderType }))}
      placeholder={placeholder}
      type={type}
      value={value}
      maxLength={maxLength}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      name={name}
      autoFocus={autofocus}
    />
  );
};

export default forwardRef(TextField);
