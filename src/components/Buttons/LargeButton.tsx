import { Button } from "../ui/button";

type Props = { buttonText: string; buttonStyle?: string };

const LargeButton = ({ buttonText, buttonStyle, ...props }: Props) => {
  return (
    <Button className={`bg-green-600 min-w-[140px] ${buttonStyle}`} {...props}>
      {buttonText}
    </Button>
  );
};

export default LargeButton;
