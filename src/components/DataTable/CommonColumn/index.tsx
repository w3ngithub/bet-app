"use client";

import { openBetSlip } from "@/store/betslip/reducer";
import Link from "next/link";
import { useDispatch } from "react-redux";

type Props = {
  text: string;
  textStyle?: string;
  onClick?: () => void;
  data?: any;
  disableActions?: boolean;
  asLink?: boolean;
  href?: string;
};

export default function CommonColumn({
  data,
  asLink,
  text,
  textStyle,
  onClick,
  disableActions,
  href,
  ...props
}: Props) {
  const dispatch = useDispatch();

  const handleBetSlipModal = () => {
    if (!disableActions) {
      dispatch(openBetSlip({ isOpen: true, data }));
    }
  };
  const renderComponent = () => {
    if (asLink && href) {
      return (
        <Link
          href={href}
          {...props}
          className="w-full h-full flex justify-center items-center"
        >
          <span
            className={`text-center text-textYellow text-[12px] font-normal pr-4 ${textStyle}`}
          >
            {text}
          </span>
        </Link>
      );
    } else {
      return (
        <div
          onClick={handleBetSlipModal}
          {...props}
          className={`text-center text-textYellow text-[12px] font-normal pr-4 ${textStyle}`}
        >
          {text}
        </div>
      );
    }
  };

  return renderComponent();
}
