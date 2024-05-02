import LayoutSidebarWrapper from "@/components/LayoutSidebarWrapper";
import React from "react";

export default function SportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutSidebarWrapper>{children}</LayoutSidebarWrapper>;
}
