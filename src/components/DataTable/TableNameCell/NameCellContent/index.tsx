type NameProps = {
  name: string;
  scoreData: string;
  isLive: boolean;
};

export default function NameCellContent({
  name,
  scoreData,
  isLive = false,
}: NameProps) {
  return (
    <div className="flex justify-between text-[12px] font-normal">
      <p className=" text-[13px] group-hover:text-greenBg-200 ">{name}</p>
      {isLive && (
        <div className="flex gap-3 ">
          <div
            className={`${
              isLive ? "bg-backgroudGray-200  px-1 " : ""
            } font-bold`}
          >
            {scoreData || 1}
          </div>
        </div>
      )}
    </div>
  );
}
