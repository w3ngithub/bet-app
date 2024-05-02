import React from "react";
import SideBarButton from "./SideBarButton/SideBarButton";
import SideBarListContainer from "./SideBarListContainer/SideBarListContainer";
// import SideBarAccordion from "./SideBarAccordion/SideBarAccordion";
import { sportsData } from "@/data/sportsData";

type Props = {
  sideBarContainerStyle?: string;
  handleMenuToggle?: () => void;
};

const SideBarContainer = ({
  sideBarContainerStyle,
  handleMenuToggle,
}: Props) => {
  return (
    <div
      className={`w-[270px]  flex flex-col justify-start items-start overflow-auto h-contentWidth  bg-background  ${sideBarContainerStyle}`}
    >
      <div className="w-full pr-[3px] ">
        <SideBarListContainer title="Popular">
          <SideBarButton
            icon="dutchFootball"
            selected="default"
            title="Dutch football"
            id={83}
            handleMenuToggle={handleMenuToggle}
          />
        </SideBarListContainer>
        <SideBarListContainer title="Frequently Visited">
          <SideBarButton
            icon={"rugby"}
            selected="default"
            title="American football"
            id={12}
            handleMenuToggle={handleMenuToggle}
          />
          <SideBarButton
            icon="basketBall"
            selected="default"
            title="Basketball"
            id={18}
            handleMenuToggle={handleMenuToggle}
          />
          <SideBarButton
            icon="boxing"
            selected="default"
            title="Boxing"
            id={9}
            handleMenuToggle={handleMenuToggle}
          />
          <SideBarButton
            icon="volleyball"
            selected="default"
            title="Volleyball"
            id={91}
            handleMenuToggle={handleMenuToggle}
          />
          <SideBarButton
            icon="indy"
            selected="default"
            title="indy"
            id={5}
            handleMenuToggle={handleMenuToggle}
          />
        </SideBarListContainer>
        <SideBarListContainer title="Full List">
          {sportsData.map((sport) => (
            <div className="w-full" key={sport.id}>
              <SideBarButton
                icon={sport.icon}
                selected="default"
                title={sport.title}
                id={sport.id}
                handleMenuToggle={handleMenuToggle}
              />
            </div>
          ))}
        </SideBarListContainer>
      </div>
    </div>
  );
};

export default SideBarContainer;
