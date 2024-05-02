import Icons from "@/components/Icons";
import { getLinkClassName } from "@/utils/getLinkClassName";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import TopRightNavbar from "../TopRightNav";

type Props = {
  menuClick: boolean;
  handleMenuToggle: () => void;
};

const SmallNavBar = ({ handleMenuToggle, menuClick }: Props) => {
  const pathname = usePathname();
  return (
    <div className="mx-auto grid grid-cols-[1fr_1fr_1fr_2fr]  min-h-[56px] items-center text-textWhite-500 text-sm px-5 w-screen">
      <Icons
        name={`${menuClick ? "x" : "menu"}`}
        iconStyle={` cursor-pointer ${pathname === "/" ? "" : "invisible"} `}
        onClick={handleMenuToggle}
      />
      <Link
        href="/livesports"
        className={` flex items-center justify-center ${getLinkClassName(
          "/livesports",
          pathname
        )}`}
      >
        In-Play
      </Link>
      <Link
        href="/"
        className={`text-xl flex items-center justify-center font-bold  ${getLinkClassName(
          "/",
          pathname
        )}`}
      >
        <div className="flex max-sm:flex-col max-sm:text-base">
          <span className="text-white">bet</span>
          <span className="text-textYellow">365</span>
        </div>
      </Link>
      <TopRightNavbar topNavStyle="w-full justify-around max-mobile:justify-end " />
    </div>
  );
};

export default SmallNavBar;
