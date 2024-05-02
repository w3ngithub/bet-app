import React from "react";
import SideBarContainer from "@/components/Sidebar";
import LiveBettingTopBar from "../LiveBetting/LiveBettingTopBar/LiveBettingTopBar";

export default function LayoutSidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SideBarContainer sideBarContainerStyle="block max-semi-lg:hidden " />
      <div className="w-full semi-lg:w-[85%] semi-lg:mx-auto">{children}</div>
    </div>
  );
}
