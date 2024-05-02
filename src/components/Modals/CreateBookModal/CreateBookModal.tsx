"use client";
import CommonModal from "@/components/CommonModal";
import { MultipleSelectDropdown } from "@/components/Dropdown/MultipleSelect";
import TextField from "@/components/TextField/TextField";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
interface CreateBookModalFormData {
  name: string;
  turnoverPercentage: string;
  availableSports: string[];
}
const initialFormValues = {
  name: "",
  turnoverPercentage: "",
  availableSports: [""],
};
const CreateBookModal = ({
  modalState,
  handleModalStateChange,
  modelTrigger,
}: {
  modalState?: boolean;
  handleModalStateChange?: () => any;
  modelTrigger?: React.ReactNode;
}) => {
  const [formData, setFormData] =
    useState<CreateBookModalFormData>(initialFormValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (!modalState) {
      setFormData(initialFormValues);
    }
  }, [modalState]);
  return (
    <div>
      <CommonModal
        modalTrigger={modelTrigger}
        openModal={modalState}
        onModalStateChange={handleModalStateChange}
        modalTitle="Create Book"
      >
        <div className="flex justify-start flex-col w-full gap-5 h-auto">
          <TextField
            borderType="default"
            variant="large"
            placeholder="Book Name"
            type="text"
            name="name"
            className="bg-white  text-[#282828]"
            disabled={false}
            onChange={handleChange}
            value={formData.name}
            autofocus={true}
          />
          <TextField
            borderType="default"
            variant="large"
            onChange={handleChange}
            placeholder="Turnover Percentage"
            type="text"
            name="turnoverPercentage"
            className="bg-white  text-[#282828]"
            disabled={false}
            value={formData.turnoverPercentage}
          />
          <MultipleSelectDropdown />
          <Button
            type="submit"
            className="bg-greenBg-500 max-h-[45px] text-[15px]  hover:bg-greenBg-400 text-white font-bold py-2 px-4 rounded-[3px]"
          >
            Create Book
          </Button>
        </div>
      </CommonModal>
    </div>
  );
};

export default CreateBookModal;
