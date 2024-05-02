import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const SideBarListContainerVariants = cva(
  "flex flex-col min-w-full gap-0 select-none overflow-hidden",
  {
    variants: {
      selected: {
        default: "cursor-pointer font-light",
        select: "cursor-default font-bold",
      },
    },
    defaultVariants: { selected: "default" },
  }
);

const SideBarListContainer = ({
  className,
  children,
  title,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn(SideBarListContainerVariants({ className }))}>
      <p className="pb-1 h-[45px] w-full flex justify-start items-end pl-[20px] text-greenBg-300 uppercase font-bold text-[11px]">
        {title}
      </p>
      <div>{children}</div>
    </div>
  );
};

export default SideBarListContainer;
