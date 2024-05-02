"use client";
import BetSlipModal from "@/components/BetSlip/BetSlipModal";
import React from "react";
import { useSelector } from "react-redux";

const GlobalModal = () => {
  const { isOpen, data } = useSelector((state: any) => state.betslip);
  return (
    <BetSlipModal
      disableClickOutside={true}
      openModal={isOpen}
      data={data}
      slipTitle="Bet Slip"
      description="Football Bet Slip"
    />
  );
};

export default GlobalModal;
