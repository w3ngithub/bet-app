import type { Metadata } from "next";
import "../globals.css";
import AuthTopBar from "@/components/AuthTopBar";
import React from "react";

export const metadata: Metadata = {
  title: "User Accounts ",
  description: "Admin page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AuthTopBar />
      <div className="max-w-[1450px] w-[95%] mx-auto h-contentWidth overflow-auto">
        {children}
      </div>
    </div>
  );
}
