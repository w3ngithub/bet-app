"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useEffect, useState } from "react";
import Icons from "@/components/Icons";

interface GameOddAccordionProps {
  title: string;
  data?: any;
  dummy?: any;
  containsTable?: boolean;
  moreInfo?: boolean;
  defaultState?: "open" | "close";
  children?: React.ReactNode;
}
const GameOddAccordion: React.FC<GameOddAccordionProps> = ({
  title,
  data,
  moreInfo = true,
  children,
  containsTable,
  dummy,
  defaultState,
}) => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
  const [defaultValue, setDefaultValue] = useState<string>("close");

  const handleAccordionExpand: any = () => {
    setAccordionOpen((prev) => !prev);
  };
  useEffect(() => {
    if (defaultState) {
      setDefaultValue(defaultState);
    }
  }, [defaultState]);
  return (
    <Accordion
      type="single"
      collapsible
      value={defaultValue}
      onValueChange={(value) => setDefaultValue(value)}
      className="w-full text-white hover:text-[#00DF8C] border-0  border-transparent"
    >
      <AccordionItem
        value={"open"}
        className="transition-none rounded-[5px] overflow-hidden  border-0  border-transparent"
      >
        <AccordionTrigger
          onClick={handleAccordionExpand}
          className="group [&[data-state=open]>svg]:rotate-0 rounded-[5px_5px_0_0] items-center relative hover:text-[#00DF8C] hover:no-underline pr-2 gap-1 flex  bg-[#434745] h-[50px] text-[13px] pl-[10px] font-normal justify-between"
        >
          <div className="flex  text-white justify-between group-hover:text-[#00DF8C] font-bold text-md leading-[18px] flex-1 pr-1">
            <div className="text-[15px]"> {title}</div>
            {moreInfo && (
              <div className="flex justify-center items-center gap-3">
                <span className="text-[11px] text-gray-300 font-light border-[1px] border-gray-400 hover:text-white hover:border-white px-1 ">
                  Early Payout
                </span>
                <span className="text-[11px] text-gray-300 font-light border-[1px] border-gray-400 hover:text-white hover:border-white px-1 ">
                  Combi Bet Boost
                </span>
              </div>
            )}
          </div>
          <Icons
            name="arrowDown"
            iconStyle={`h-4 w-4 ${
              accordionOpen ? "text-transparent" : "text-gray-300"
            } transition-colors  duration-[500ms]  group-hover:text-[#00DF8C] ease`}
          />
        </AccordionTrigger>
        <AccordionContent
          className={`${
            containsTable ? "border-t-[0px]" : "border-t-[1px]"
          } border-white/30 rounded-[0_0_5px_5px] bg-[#434745] pb-0 flex flex-col`}
        >
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default GameOddAccordion;
