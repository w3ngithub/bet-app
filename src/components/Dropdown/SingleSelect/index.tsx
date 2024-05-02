import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  data: string[];
  placeholder: string;
  selectStyles?: string;
  handleChange?: (val: string) => void;
  onOpenChange?: () => void;
  openDropDown?: boolean;
  bookName?: string;
};

export function DropdownSelect({
  data,
  placeholder,
  selectStyles,
  handleChange,
  onOpenChange,
  openDropDown,
  bookName,
}: Props) {
  return (
    <Select
      open={openDropDown}
      onValueChange={handleChange}
      onOpenChange={onOpenChange}
      value={bookName}
    >
      <SelectTrigger className={selectStyles}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map((d: string) => (
            <SelectItem key={d} value={d}>
              {d}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
