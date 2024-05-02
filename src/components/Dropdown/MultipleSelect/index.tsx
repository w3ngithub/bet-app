"use client";

import * as React from "react";

import { Checkbox } from "../../ui/checkbox";
import { Command as CommandPrimitive } from "cmdk";
import { sportsData } from "@/data/sportsData";

export function MultipleSelectDropdown() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const closeRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<number[]>([]);

  const handleSelectAll = (value: boolean) => {
    if (value) {
      const test = sportsData.map((f) => f.id);
      setSelected(test);
      setOpen(true);
    } else setSelected([]);
  };

  const handleCheckboxChange = (data: number) => {
    if (!selected.includes(data)) {
      setSelected((prev) => [...prev, data]);
    } else {
      const remainingSelect = selected.filter((d) => d !== data);
      setSelected(remainingSelect);
    }
  };

  React.useEffect(() => {
    const closeDropdown = (e: any) => {
      if (open && !closeRef.current?.contains(e.target)) {
        setOpen(false);
        e.stopPropagation();
      }
    };
    document.addEventListener("mousedown", closeDropdown);

    return () => document.removeEventListener("mousedown", closeDropdown);
  }, [open]);

  return (
    <CommandPrimitive
      ref={closeRef}
    >
      <div className="w-full mt-5 overflow-hidden bg-transparent bg-white rounded ">
        <div className="px-3 py-2 text-sm border rounded-md group border-input ">
          <div className="flex justify-between w-full ">
            <CommandPrimitive.Input
              readOnly
              ref={inputRef}
              onFocus={() => setOpen(true)}
              placeholder="All Sports"
              className="flex-1 ml-2 text-center text-black outline-none cursor-pointer caret-transparent placeholder:text-black scrollbar-w"
            />

            <Checkbox
              className="text-white "
              checked={selected.length === sportsData.length}
              onCheckedChange={handleSelectAll}
            />
          </div>
        </div>
        {open && (
          <CommandPrimitive.List className="mx-3 h-[250px] overflow-y-scroll scrollbar-hidden">
            {sportsData.map((d) => (
              <div
                key={d.id}
                onMouseDown={(e) => {
                  e.preventDefault();
                  // Handle your mouse down logic here
                }}
                className={
                  "relative cursor-pointer flex justify-center py-2 w-full  border-b border-dashed "
                }
              >
                <CommandPrimitive.Item
                  key={d.id}
                  // onMouseDown={(e) => {
                  //   e.preventDefault();
                  // }}
                  onSelect={() => {
                    handleCheckboxChange(d.id);
                  }}
                >
                  <span className="self-center text-black"> {d.title}</span>
                  <Checkbox
                    className="absolute right-0 text-white"
                    checked={selected.includes(d.id)}
                  />
                </CommandPrimitive.Item>
              </div>
            ))}
          </CommandPrimitive.List>
        )}
      </div>
    </CommandPrimitive>
  );
}
