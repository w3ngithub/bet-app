"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Link from "next/link";
import Icons from "@/components/Icons";
import { useParams } from "next/navigation";
const ButtonVariants = cva(
  "h-[45px] group w-[270px] flex-1 min-w-full gap-1 text-white hover:text-white relative rounded-[0px] bg-transparent select-none hover:bg-textWhite-300/10 overflow-hidden leading-[45px] w-auto flex justify-between pl-[20px] items-center",
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
const StartIconVariants = cva(
  "hidden group h-full w-[40px]  group-hover:flex items-center justify-center p-[12px] overflow-hidden text-gray-400 cursor-pointer ",
  {
    variants: {
      selected: {
        default:
          "[&>*]:text-textWhite-300/60 hover:[&>*]:fill-textWhite-300/60",
        select:
          "[&>*]:text-textYellow [&>*]:fill-textYellow flex hover:[&>*]:fill-textWhite-300/60 hover:[&>*]:text-textWhite-300/60",
      },
    },
    defaultVariants: { selected: "default" },
  }
);

const SideBarButton = ({
  className,
  selected,
  title,
  icon,
  addStar = false,
  id,
  handleMenuToggle,
}: {
  icon?: string;
  className?: string;
  title?: string;
  selected?: "default" | "select";
  addStar?: boolean;
  id?: number;
  handleMenuToggle?: () => void;
}) => {
  const params = useParams();
  return (
    <Link
      className={cn(ButtonVariants({ className, selected }))}
      href={`/sports/${id}`}
      onClick={handleMenuToggle}
    >
      <div className="flex justify-start items-center h-full gap-[5px]">
        {icon && (
          <Icons
            name={icon}
            iconStyle={`w-[20px] h-[20px] flex items-center justify-center p-[1px] overflow-hidden `}
          />
        )}
        <div
          className={`text-[13px] tracking-tight text-start whitespace-nowrap text-ellipsis overflow-hidden flex-1 ${
            id === parseInt(params.id as string)
              ? "text-white font-semibold"
              : ""
          }`}
        >
          {title}
        </div>
      </div>
      {addStar && (
        <div className={cn(StartIconVariants({ selected }))}>
          <Icons name="star" />
        </div>
      )}
    </Link>
  );
};

export default SideBarButton;
