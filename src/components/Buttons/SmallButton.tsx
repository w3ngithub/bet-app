import { Button } from "../ui/button";

type Props = {
  buttonText: string;
  buttonStyle?: string;
  handleClick?: () => void;
};

const SmallButton = ({
  buttonText,
  buttonStyle,
  handleClick,
  ...props
}: Props) => {
  return (
    <Button
      className={`bg-green-600  h-[35px]  ${buttonStyle}`}
      size="sm"
      onClick={handleClick}
      {...props}
    >
      {buttonText}
    </Button>
  );
};

export default SmallButton;
