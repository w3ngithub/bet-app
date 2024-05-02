import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import SideBarButton from "../SideBarButton/SideBarButton";
import Icons from "@/components/Icons";

interface SideBarAccordionProps {
  title: string;
  data: { title: string; icon: React.ReactNode; addStar: boolean }[];
}

const SideBarAccordion: React.FC<SideBarAccordionProps> = ({
  title = "Football",
  data,
}) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full text-white border-0 border-transparent"
    >
      <AccordionItem
        value="item-1"
        className="transition-none border-0 border-transparent"
      >
        <AccordionTrigger className="relative hover:no-underline justify-start gap-1 flex w-10 bg-transparent hover:bg-textWhite/70 h-[45px] text-[13px] pl-[20px] font-normal">
          <div className="flex">{title}</div>
          <Icons
            name="arrowDown"
            iconStyle="h-4 w-4 transition-colors rotate-0 duration-[500ms] text-gray-300 group-hover:text-breenBg-300 ease"
          />
        </AccordionTrigger>
        <AccordionContent className="pl-[20px]">
          {data.map((item: any, idx) => (
            <SideBarButton
              key={idx}
              title={item.title}
              icon={item.icon}
              selected="default"
              addStar={item.addStar}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SideBarAccordion;
