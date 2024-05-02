"use client";
import SmallButton from "@/components/Buttons/SmallButton";
import { useRouter } from "next/navigation";

type Props = {
  link: string;
  buttonStyle: string;
  buttonText: string;
};

const TableLinkButton = ({ link, buttonText, buttonStyle }: Props) => {
  const router = useRouter();
  const handleLink = () => {
    router.push(link);
  };
  return (
    <div className="flex justify-center">
      <SmallButton
        buttonText={buttonText}
        buttonStyle={buttonStyle}
        handleClick={handleLink}
      />
    </div>
  );
};

export default TableLinkButton;
