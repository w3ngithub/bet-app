"use client";
import { useEffect, useState } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import BookDropdown from "@/components/AuthTopBar/BookDropdown";

type Props = { topNavStyle?: string };

const TopRightNavbar = ({ topNavStyle }: Props) => {
  const [isClientSide, setIsClientSide] = useState(false);
  const { userId } = useAuth();

  useEffect(() => {
    setIsClientSide(typeof window !== "undefined");
  }, []);
  return (
    <div
      className={`flex items-center gap-6 justify-self-end ${
        !userId ? topNavStyle : ""
      }`}
    >
      {!userId && (
        <>
          <Link
            href="/sign-up"
            className="text-[12px] font-normal semi-lg:bg-textYellow  semi-lg:text-black  semi-lg:hover:bg-textWhite-300 semi-lg:p-2 semi-lg:h-7 rounded flex items-center"
          >
            Sign Up
          </Link>

          <Link href="/sign-in" className="text-[12px]">
            Log in
          </Link>
        </>
      )}
      {isClientSide && userId && (
        <div className="flex items-center justify-end  gap-1 mobile:gap-3 ">
          <BookDropdown dropdownStyle="max-md:w-full" />
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </div>
  );
};

export default TopRightNavbar;
