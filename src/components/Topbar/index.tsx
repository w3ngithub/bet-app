"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TopRightNavbar from "./TopRightNav";
import { getLinkClassName } from "@/utils/getLinkClassName";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="block bg-greenBg-400 max-semi-lg:hidden">
      <div className="max-w-[1450px] mx-auto grid grid-cols-3  h-[56px] items-center text-textWhite-500 text-sm px-5  ">
        <Link href="/" className="text-2xl font-bold text-textYellow ">
          bet365
        </Link>
        <div className="flex items-center justify-center h-full gap-5 ">
          <Link href="/" className={getLinkClassName("/", pathname)}>
            Sports
          </Link>
          <Link
            href="/livesports"
            className={getLinkClassName("/livesports", pathname)}
          >
            In-Play
          </Link>
        </div>
        <TopRightNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
