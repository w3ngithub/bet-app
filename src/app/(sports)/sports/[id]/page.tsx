"use client";
import { DataTable, liveColumns } from "@/components/DataTable";
import liveData from "@/data/liveOdd.json";
import { CustomResultData } from "@/types/liveTable";
import { sortDataWithTime } from "@/utils/sorting";

export default function SportsPage() {
  const sortedData = sortDataWithTime(liveData.results);

  return (
    <main className="!h-[100vh] overflow-auto font-bold">
      <h1 className="pl-2 my-2 text-white">In-Play</h1>
      {sortedData[0]?.data.map((data: CustomResultData) => (
        <DataTable
          key={data.game_data.id}
          columns={liveColumns(data.game_data.league.name)}
          data={[data]}
        />
      ))}
      <div className="mb-20"></div>
    </main>
  );
}
