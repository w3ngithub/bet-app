import Icons from "@/components/Icons";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";
interface LiveBettingIconButtonProps {
  title?: string;
  icon?: string;
  children?: React.ReactNode;
  isActive?: boolean;
  className?: string;
  id: number;
}

const LiveBettingIconButtonVariants = cva(
  "group/slide  select-none px-[0px] pt-2 relative min-w-[75px] gap-[3px] max-w-[100px]  gap-[3px]   h-[80px] flex justify-center items-center flex-col cursor-pointer ",
  {
    variants: {
      selected: {
        default: "hover:text-white text-textWhite-300/70",
        select: "text-white",
      },
    },
    defaultVariants: { selected: "default" },
  }
);

const LiveBettingIconButton: React.FC<LiveBettingIconButtonProps> = ({
  title = "Title",
  icon,
  children,
  isActive,
  id,
  className,
}) => {
  const selected = isActive ? "select" : "default";
  return (
    <div className={cn(LiveBettingIconButtonVariants({ className, selected }))}>
      {children ? (
        children
      ) : (
        <Link href={`/livesports/sports/${id}`} className="max-w-[100px]">
          {/* <div className="w-full  h-20 flex justify-center items-end  max-h-10  after:border-3">
            {icon}
          </div> */}
          <Icons
            name={icon || ""}
            // size={20}
            iconStyle="w-full flex justify-center items-end  after:border-3"
          />
          <div
            className={`h-8 border-b-[2px]  max-w-full ${
              isActive
                ? "font-bold border-white"
                : "group-hover/slide:font-bold  font-normal border-none"
            }  w-auto  text-[11px] whitespace-nowrap overflow-hidden text-ellipsis leading-[17px] text-center`}
          >
            {title}
          </div>
        </Link>
      )}
    </div>
  );
};

export default LiveBettingIconButton;
