"use client";

import React, { useEffect, useRef, useState } from "react";
import SmallNavBar from "./SmallNavBar";
import SideBarContainer from "@/components/Sidebar";

type Props = {
  children: React.ReactNode;
};

const SmallScreenNavBar = ({ children }: Props) => {
  const [menuClick, setMenuClick] = useState(false);
  const ref = useRef<any>();

  const handleMenuToggle = () => {
    setMenuClick((prev) => !prev);
  };

  useEffect(() => {
    //check if the click is made outside the sidebar
    const handleClickOutside = (event: any) => {
      if (menuClick && !ref?.current?.contains(event.target)) {
        setMenuClick(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, menuClick]);

  return (
    <div className="relative h-[56px] w-full overflow-x-clip max-semi-lg:flex max-semi-lg:bg-greenBg-400">
      {/* hide sidebar when large screen */}
      <section
        className={`hidden max-semi-lg:block transition-all ease-in-out duration-200 ${
          menuClick ? "ml-0" : "ml-[-270px]"
        }  `}
        ref={ref}
      >
        <SideBarContainer
          handleMenuToggle={handleMenuToggle}
          sideBarContainerStyle="h-screen"
        />
      </section>
      <section
        className={`max-semi-lg:w-screen ${
          menuClick ? "max-semi-lg:pointer-events-none" : ""
        }`}
      >
        {/* hide navbar in large screen */}
        <div className="block semi-lg:hidden">
          <SmallNavBar
            menuClick={menuClick}
            handleMenuToggle={handleMenuToggle}
          />
        </div>
        <div className="w-full semi-lg:max-w-[1450px] semi-lg:w-[95%] mx-auto">
          {children}
        </div>
      </section>
    </div>
  );
};

export default SmallScreenNavBar;
