"use client";
import Link from "next/link";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import BookDropdown from "./BookDropdown";

const AuthTopBar = () => {
  const [bookName, setBookName] = useState<string | undefined>(undefined);
  const handleBookChange = (val: string) => {
    setBookName(val);
  };
  return (
    <nav className="w-full bg-greenBg-400">
      <div className="max-w-[1450px] mx-auto grid grid-cols-3 h-[56px] items-center text-textWhite-500 text-sm px-5">
        <Link
          href="/"
          className="text-2xl font-bold text-textYellow max-md:text-xl max-mobile:text-base"
        >
          bet365
        </Link>
        <p className="text-xl max-md:text-xl max-mobile:text-sm font-bold max-mobile:justify-self-start justify-self-center">
          {bookName || "Account"}
        </p>

        <div className="flex items-center justify-end flex-1 w-full gap-3">
          <BookDropdown
            bookName={bookName}
            handleBookChange={handleBookChange}
          />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default AuthTopBar;
