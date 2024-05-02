import LargeButton from "@/components/Buttons/LargeButton";
import { MultipleSelectDropdown } from "@/components/Dropdown/MultipleSelect";
import TextField from "@/components/TextField/TextField";
import { Label } from "@/components/ui/label";
import React from "react";

const UpdateBook = () => {
  return (
    <div className=" w-[90%] mx-auto mb-5">
      <div className="w-full">
        <MultipleSelectDropdown />
        <form
          onSubmit={() => {}}
          className="flex flex-col items-center gap-4 mt-4"
        >
          <TextField
            borderType="default"
            variant="large"
            placeholder="Book Name"
            type="text"
            name="name"
            className="bg-white text-[#282828]"
            disabled={false}
            // onChange={handleChange}
            // value={formData.name}
          />
          <Label className="text-white ">Update Turnover Percentage</Label>
          <TextField
            borderType="default"
            variant="large"
            // onChange={handleChange}
            placeholder="Turnover Percentage"
            type="text"
            name="turnoverPercentage"
            className="bg-white text-[#282828]"
            disabled={false}
            // value={formData.turnoverPercentage}
          />
          <LargeButton
            buttonText="Update"
            buttonStyle="bg-green-500/50 max-h-[45px] text-[15px]  hover:bg-greenBg-400 text-white "
          />
          <LargeButton
            buttonText="Delete Book"
            buttonStyle="bg-red-500  text-white hover:bg-red-500/80  "
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
