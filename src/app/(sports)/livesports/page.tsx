"use client";
import { DataTable, liveColumns } from "@/components/DataTable";
import LiveBettingSubMenu from "@/components/LiveBetting/LiveBettingSubMenu/LiveBettingSubMenu";
import LiveBettingTopBar from "@/components/LiveBetting/LiveBettingTopBar/LiveBettingTopBar";
import liveData from "@/data/liveOdd.json";
import { CustomResultData } from "@/types/liveTable";
import { sortDataWithTime } from "@/utils/sorting";

export default function LiveSports() {
  const sortedData = sortDataWithTime(liveData.results);

  return (
    <section className="h-contentWidth mx-auto w-screen semi-lg:w-[85%] overflow-auto font-bold">
      <LiveBettingTopBar />
      <LiveBettingSubMenu submenuTitle="Football" />
      {sortedData[0]?.data.map((data: CustomResultData) => (
        <DataTable
          key={data.game_data.id}
          columns={liveColumns(data.game_data.league.name)}
          data={[data]}
        />
      ))}
      <div className="mb-20"></div>
    </section>
  );
}
