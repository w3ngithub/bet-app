import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import BestSlipListItem from "../BetSlipListItem/BetSlipListItem";
import { useAuth } from "@clerk/nextjs";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { openBetSlip } from "@/store/betslip/reducer";
const BetSlipDialogVariant = cva(
  "fixed ease-out p-0 gap-0 translate-x-[-3%] sm:translate-x-[-5%] translate-y-[-10%]  opacity-100 max-h-[500px] [&>*]:text-greenBg-500 sm:rounded-[3px] data-[state=open]:opacity-100   left-auto  -right-[0%] -bottom-[8px] top-auto  border-0 z-50 grid w-[90%]  sm:w-full max-w-lg   select-none rounded-[2px] bg-background p-6 shadow-lg duration-[900ms] opacity-100  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:opacity-100 data-[state=open]:fade-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[5%] data-[state=open]:slide-in-from-left-[10%] data-[state=open]:slide-in-from-top-[0%] transition-transform transform"
);

interface MatchDetails {
  title: string;
  description: string;
  odd: string;
  returns: number;
}
interface CommonModalProps {
  openModal?: boolean;
  disableClickOutside?: boolean;
  slipTitle: string;
  className?: string;
  description?: string;
  children?: React.ReactNode;
  customFooterContent?: React.ReactNode;
  onModalStateChange?: () => any;
  modalTrigger?: React.ReactNode;
  data?: any;
}

const BetSlipDialogStyles = {
  animationDuration: "500ms",
  padding: "0",
  overflow: "hidden",
  borderRadius: "3px",
};

const BetSlipModal: React.FC<CommonModalProps> = ({
  disableClickOutside,
  slipTitle,
  description,
  children,
  customFooterContent,
  openModal,
  onModalStateChange,
  className,
  modalTrigger,
  data,
  ...props
}) => {
  const { userId } = useAuth();
  const removeBetSlip = (index: number) => {
    setStorageData((prevBets: any) =>
      prevBets.filter((_: any, i: number) => i !== index)
    );
  };

  let [storageData, setStorageData, updateStorage] =
    useLocalStorage("bet-slip");

  const dispatch = useDispatch();
  const { data: newData } = useSelector((state: any) => state.betslip);
  const handleClick = () => {
    dispatch(openBetSlip({ isOpen: !openModal }));
  };
  useEffect(() => {
    updateStorage(data);
  }, [data]);

  if (!userId) {
    return <span>{modalTrigger}</span>;
  }

  return (
    <Dialog open={openModal} onOpenChange={onModalStateChange}>
      {modalTrigger && (
        <DialogTrigger
          asChild
          onClick={() => {
            updateStorage(data);
          }}
        >
          {modalTrigger}
        </DialogTrigger>
      )}
      <DialogContent
        onInteractOutside={(e) => {
          if (disableClickOutside) {
            e.preventDefault();
          }
        }}
        style={BetSlipDialogStyles}
        className={cn(BetSlipDialogVariant({ className }))}
        {...props}
      >
        {/* modal inner overlay -- was added for background color only */}
        <div className="bg-gray-300  absolute  min-h-full z-[1] min-w-full p-0 overflow-hidden"></div>
        {/* modal header */}
        <div className="z-[2] border-b-[1px] border-gray-400 h-14 p-0 ">
          {/* modal title */}
          <div className="w-full  pl-3 p-0  flex flex-1 flex-row  justify-between items-center h-full overflow-hidden ">
            <div className="flex flex-1 justify-start items-center h-full gap-[6px]">
              <div className=" rounded-full bg-greenBg-400 h-6 text-white flex justify-center items-center w-6 text-[13px] font-medium">
                5
              </div>
              <div className="flex flex-col  justify-center items-start flex-1 p-0 pt-[2px] font-semibold h-full">
                <span className="text-[15px] text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis pr-[2px]">
                  {slipTitle}
                </span>
                <span className="text-[12px] p-0 whitespace-nowrap overflow-hidden text-ellipsis pr-[2px]">
                  {description}
                </span>
              </div>
            </div>
            {/* modal close icon*/}

            <DialogClose
              onClick={handleClick}
              className="border-l-[1px] text-gray-600 outline-[0] focus-visible:outline-[0]  min-h-full border-gray-400 flex justify-center items-center w-14 rounded-[0_3px_0_0]"
            >
              <X className="h-4 w-4" />
            </DialogClose>
          </div>
        </div>
        {/* modal content */}
        {/* id/#bet-slip-modal-content added for scrollbar styling */}
        <div
          id="bet-slip-modal-content"
          className="z-[2] flex flex-col overflow-x-hidden justify-start items-center h-auto overflow-y-auto text-[15px]"
        >
          {children ? (
            children
          ) : (
            <>
              {storageData?.length > 0 ? (
                <BestSlipListItem className="min-h-12">
                  <div
                    className="pl-4 cursor-pointer text-greenBg-500 text-[14px] flex justify-start items-center h-full font-medium"
                    onClick={() => {
                      setStorageData([]);
                    }}
                  >
                    Remove All
                  </div>
                </BestSlipListItem>
              ) : null}{" "}
              {/* betslip items */}
              {storageData?.map((bet: any, index: number) => (
                <BestSlipListItem
                  key={index}
                  title={bet?.title}
                  description={bet?.description}
                  odd={bet?.odd}
                  returns={bet?.returns}
                  onRemove={() => removeBetSlip(index)}
                />
              ))}
            </>
          )}
        </div>

        {customFooterContent ? (
          customFooterContent
        ) : (
          <div className="z-[2] w-full rounded-none relative overflow-hidden h-[50px] bg-greenBg-500 ">
            <Button className="rounded-[1px] text-white flex w-full gap-1 h-[50px] hover:bg-greenBg-400/80 font-medium hover:font-medium">
              <span> Place bet</span>
              <span className="text-greenBg-300">600.00 HKD</span>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BetSlipModal;
