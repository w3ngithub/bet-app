"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { openBetSlip } from "@/store/betslip/reducer";
import { BET_SLIP_DATA } from "@/data/dummyData";
const ButtonVariants = cva(
  "h-[45px] w-auto flex-1   text-white hover:text-white relative rounded-[0px] bg-transparent select-none hover:bg-textWhite-300/30 overflow-hidden leading-[45px] w-auto flex justify-center px-[10px] items-center",
  {
    variants: {
      selected: {
        default: "cursor-pointer font-light",
        select: "cursor-default font-bold",
      },
      type: {
        default: "",
        disabled: "bg-transparent hover:bg-transparent",
      },
      disableGameOdds: {
        default: "",
        disabled: "bg-transparent hover:bg-transparent",
      },
    },
    defaultVariants: {
      selected: "default",
      type: "default",
      disableGameOdds: "default",
    },
  }
);
const GameOddButtonTypes = cva(
  "text-[13px] h-[50%] flex justify-start items-center pr-1 tracking-tight text-start whitespace-nowrap text-ellipsis overflow-hidden ",
  {
    variants: {
      type: {
        default: "",
        disabled: "border-r-[1px] border-gray-100/20 flex-1",
      },
      disableGameOdds: {
        default: "",
        disabled: "hidden",
      },
    },
    defaultVariants: { type: "default", disableGameOdds: "default" },
  }
);
const GameOddTypes = cva(
  "group min-w-[40px]   h-[50%] w-[40px] pl-[6px] text-[13px] flex items-center justify-start pr-[12px] overflow-hidden  cursor-pointer text-[#ffe418]",
  {
    variants: {
      disableGameOdds: {
        default: "",
        disabled:
          "flex-1 justify-center text-gray-300 border-r-[1px] border-gray-100/20",
      },
      type: {
        default: "",
        disabled: "hidden",
      },
    },
    defaultVariants: { disableGameOdds: "default", type: "default" },
  }
);

const GameOddButton = ({
  className,
  title,
  gameOdd,
  disableGameOdds,
  type,
  children,
  href = "/",
  centerContent,
}: {
  className?: string;
  title?: string;
  href?: any;
  gameOdd?: number | string;
  disableGameOdds?: "disabled";
  type?: "disabled";
  children?: React.ReactNode;
  centerContent?: boolean;
}) => {
  const dispatch = useDispatch();
  const data = BET_SLIP_DATA[1];
  const handleBetSlipModal = () => {
    if (gameOdd) {
      dispatch(
        openBetSlip({
          isOpen: true,
          data: {
            title: "Benefica",
            description: "Benefica - Dames v Lyon",
            odd: gameOdd,
            returns: 0.5,
          },
        })
      );
    }
  };
  return (
    <div
      className={cn(ButtonVariants({ className, type, disableGameOdds }))}
      onClick={handleBetSlipModal}
    >
      {children ? (
        children
      ) : (
        <>
          {title && (
            <div
              className={cn(
                GameOddButtonTypes({ type, disableGameOdds }),
                `${centerContent && "justify-center "}`
              )}
            >
              {title}
            </div>
          )}
          {gameOdd && (
            <div
              className={cn(
                GameOddTypes({ disableGameOdds, type }),
                `${centerContent ? "justify-center " : "flex-1"}`
              )}
            >
              {gameOdd}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GameOddButton;
