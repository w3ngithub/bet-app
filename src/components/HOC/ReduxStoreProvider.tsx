"use client";
import React from "react";
import { Provider } from "react-redux";
import { createStore, AppStore } from "@/store";

const reduxStore = createStore();

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={reduxStore}>{children}</Provider>;
}
