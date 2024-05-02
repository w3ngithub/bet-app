import Link from "next/link";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { CREATE_BOOK } from "@/lib/constants";
import CreateBookModal from "@/components/Modals/CreateBookModal/CreateBookModal";
import { DropdownSelect } from "@/components/Dropdown/SingleSelect";

type Props = {
  bookName?: string;
  handleBookChange?: (val: string) => void;
  dropdownStyle?: string;
};

const BookDropdown = ({ bookName, handleBookChange, dropdownStyle }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const handleModalStateChange = () => {
    setOpenModal((prev) => !prev);
  };
  const router = useRouter();
  const handleSelectChange = (val: string) => {
    if (val === CREATE_BOOK) {
      setOpenModal(true);
    } else {
      handleBookChange && handleBookChange(val);
      router.push(`/books`);
    }
  };
  const dropdownData = [
    "user_123 Book",
    "user_234 Book",
    "user_456 Book",
    CREATE_BOOK,
    "All Accounts",
  ];

  const handleDropDownOpenChange = () => {
    setOpenDropDown((prev) => !prev);
  };

  return (
    <>
      <DropdownSelect
        key={bookName}
        openDropDown={openDropDown}
        placeholder="Select Book"
        data={dropdownData}
        selectStyles={`justify-self-end bg-green-500/40 text-white border-transparent w-[200px] ${dropdownStyle}`}
        handleChange={handleSelectChange}
        onOpenChange={handleDropDownOpenChange}
        bookName={bookName || ""}
      />
      <CreateBookModal
        modalState={openModal}
        handleModalStateChange={handleModalStateChange}
      />
    </>
  );
};

export default BookDropdown;
