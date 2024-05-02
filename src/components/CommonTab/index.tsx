"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart2, Bell } from "lucide-react";
import React from "react";
interface CommonTabProps {
  headers: any;
  children: React.ReactNode;
  tabBanner?: React.ReactNode;
  handleTabItemClick?: () => void;
  tabItemStyle?: string;
  tabItemContainerStyle?: string;
  isGraph?: boolean;
  tabListContainerStyle?: string;
  showTabs?: boolean;
}
const CommonTab: React.FC<CommonTabProps> = ({
  headers,
  children,
  tabBanner,
  tabItemContainerStyle,
  tabItemStyle,
  isGraph = false,
  tabListContainerStyle,
  showTabs = true,
}) => {
  const tabTriggerStyle = tabItemStyle
    ? tabItemStyle
    : " px-[12px] capitalize py-[4px] rounded-full data-[state=active]:font-bold text-gray-300 hover:text-white data-[state=active]:bg-greenBg-300 font-normal text-[13px] data-[state=active]:text-black data-[state=active]:shadow-sm";

  const tabListStyle = tabItemContainerStyle
    ? tabItemContainerStyle
    : "flex justify-between  bg-greenBg-500 px-7 items-center h-[50px]  rounded-none flex-1 w-full border-b-[2px] border-b-greenBg-400";
  return (
    <Tabs defaultValue={headers[0]} className="w-full">
      {showTabs && (
        <TabsList className={tabListStyle}>
          <div className="flex items-center justify-start flex-1 ">
            {headers?.map((item: any, idx: number) => (
              <TabsTrigger key={idx} value={item} className={tabTriggerStyle}>
                {item === "asian_lines" ? "Asian Lines" : item}
              </TabsTrigger>
            ))}
          </div>
          {isGraph && (
            <>
              <div className="flex items-center w-auto h-full gap-5 text-gray-300 fill-white">
                <span className="cursor-pointer hover:text-white">
                  <BarChart2 className="w-5 h-5" />
                </span>
                <span className="cursor-pointer hover:text-white">
                  <Bell className="w-4 h-4" />
                </span>
              </div>
            </>
          )}
        </TabsList>
      )}
      {/* if the tab contains a banner -- ex: bet boost/bet365 */}
      {tabBanner && tabBanner}
      {/* tab content */}
      {children}
    </Tabs>
  );
};

export default CommonTab;
