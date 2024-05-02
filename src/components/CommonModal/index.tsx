"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

interface CommonModalProps {
  openModal?: boolean;
  modalTitle: string;
  className?: string;
  description?: string;
  children?: React.ReactNode;
  modalTrigger?: React.ReactNode;
  footerContent?: React.ReactNode;
  dialogFooterStyle?: string;
  onModalStateChange?: () => any;
}
const CommonDialogVariant = cva(
  "max-sm:w-[90%] fixed ease-out [&>*]:text-greenBg-500 sm:rounded-[3px] translate-y-[-50%] border-0 z-50 grid w-full max-w-lg gap-4 select-none rounded-[2px] bg-background p-6 shadow-lg duration-[900ms] opacity-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:opacity-100 data-[state=open]:fade-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[5%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[0%] transition-transform transform"
);
const CommonModal: React.FC<CommonModalProps> = ({
  modalTitle,
  description,
  children,
  modalTrigger,
  dialogFooterStyle,
  footerContent,
  openModal,
  onModalStateChange,
  className,
}) => {
  const footerStyle = dialogFooterStyle
    ? dialogFooterStyle
    : "justify-center sm:justify-center gap-10 flex-row   w-full min-h-[50px]";

  return (
    <Dialog open={openModal} onOpenChange={onModalStateChange}>
      <DialogOverlay />
      {modalTrigger && <DialogTrigger asChild>{modalTrigger}</DialogTrigger>}
      <DialogContent
        style={{ backgroundColor: "#E4E4E4", animationDuration: "500ms" }}
        className={cn(CommonDialogVariant({ className }))}
      >
        <DialogHeader>
          <DialogTitle
            className="
           flex justify-center items-center "
          >
            {modalTitle}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        {footerContent ? (
          <DialogFooter className={footerStyle}>{footerContent}</DialogFooter>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default CommonModal;
