import TextField from "@/components/TextField/TextField";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import React from "react";

interface BestSlipListItemProps {
  title?: string;
  description?: string;
  odd?: string | number;
  returns?: string | number;
  onRemove?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const BestSlipListItemVariant = cva(
  "w-full min-h-[65px] flex justify-start items-start text-black flex-col border-b-[1px] border-gray-400"
);
const BestSlipListItem: React.FC<BestSlipListItemProps> = ({
  title,
  description,
  odd,
  returns,
  onRemove,
  children,
  className,
}) => {
  return (
    <div className={cn(BestSlipListItemVariant({ className }))}>
      {children ? (
        children
      ) : (
        <div className="w-full h-[63px] flex justify-start items-start text-black pl-0">
          <div className="w-8 h-[70%] text-greenBg-400 flex justify-start items-start pt-[6px] pl-[6px]">
            <X className="h-4 w-4 cursor-pointer" onClick={onRemove} />
          </div>
          <div className="h-full flex flex-col justify-start items-start flex-1 pt-2">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap w-full max-w-[300px]">
              {title}
            </span>
            <span className="text-gray-600 text-[12px] whitespace-nowrap text-ellipsis overflow-hidden w-full max-w-[300px]">
              {description}
            </span>
          </div>
          <span className=" pt-2 w-10 ">{odd}</span>
          <div className="w-[115px] h-full flex flex-col justify-start items-start gap-[2px]">
            <TextField
              variant="small"
              className="bg-gray-200 border-transparent border- pl-7 rounded-0 padding-0 outline-0 focus:outline-0 focus-visible:outline-0"
              placeholder="Amount"
              borderType="normal"
            />
            <span className="text-[12px] w-full text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap py-[1px]">
              Returns : {returns}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BestSlipListItem;
