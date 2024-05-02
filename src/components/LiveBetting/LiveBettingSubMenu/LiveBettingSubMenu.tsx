import React from "react";
import LiveBettingIconButton from "../LiveBettingButton/LiveBettingIconButton";
import Icons from "@/components/Icons";
interface LiveBettingSubMenuProps {
  submenuTitle?: string;
  submenuTabs?: [{ title: string; isActive: boolean }];
  children?: React.ReactNode;
}
const LiveBettingSubMenu: React.FC<LiveBettingSubMenuProps> = ({
  submenuTitle = "Cricket",
  children,
  submenuTabs = [
    { title: "Football", isActive: true },
    { title: "Basketball", isActive: false },
    { title: "Tennis", isActive: false },
  ],
}) => {
  return (
    <div className="h-[60px] px-[30px] w-full text-white flex flex-1 justify-start items-center max-w-screen">
      <div className="text-[20px] italic font-extrabold leading-[25px] pr-[10px] overflow-hidden text-ellipsis whitespace-nowrap">
        {submenuTitle}
      </div>
      <div className="text-gray-300 cursor-pointer hover:text-greenBg-200 h-full flex justify-center items-center">
        <Icons name="barChart2" iconStyle="h-5 w-5" />
      </div>
      <div className="flex justify-end items-center flex-1 gap-1 pl-2 overflow-hidden">
        {submenuTabs.map((item: any, idx: number) => (
          <LiveBettingIconButton
            id={idx}
            key={idx}
            className={`relative justify-center items-center min-w-[60px] text-textWhite-300/70 hover:text-white text-[13px] w-auto ${item.isActive ? "text-white font-bold" : "font-normal"
              }`}
          >
            <span
              className={`h-8  max-w-full ${item.isActive
                ? "font-bold  border-b-[2px] border-white text-white"
                : " font-normal border-transparent"
                }  w-auto  h-5 text-[13px] whitespace-nowrap overflow-hidden text-ellipsis leading-[17px] text-center`}
            >
              {item.title}
            </span>
          </LiveBettingIconButton>
        ))}
      </div>
    </div>
  );
};

export default LiveBettingSubMenu;
