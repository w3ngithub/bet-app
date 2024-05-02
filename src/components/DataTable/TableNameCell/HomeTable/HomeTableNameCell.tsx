"use client";
import Link from "next/link";
import NameCellContent from "../NameCellContent";

const HomeTableNameCell = ({ data, isLive }: any) => {
  const gameTime = new Date(parseInt(data.time));
  const gameHour = gameTime.getHours();
  const gameMinutes = gameTime.getMinutes();
  const gameStart = `${gameHour}:${gameMinutes}`;
  const scoreData = data.ss ? data.ss.split("-") : "";
  return (
    <div className="relative w-full pr-8 border-r text-textWhite-400 border-greenBg-700">
      <Link
        href={`/odds`}
        className="text-textWhite-300  !hover:bg-transparent  group flex flex-col gap-1 "
      >
        <NameCellContent
          name={data.home.name}
          scoreData={scoreData[0]}
          isLive={isLive}
        />
        <NameCellContent
          name={data.away.name}
          scoreData={scoreData[1]}
          isLive={isLive}
        />
      </Link>
    </div>
  );
};

export default HomeTableNameCell;
