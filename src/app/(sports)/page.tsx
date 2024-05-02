import { DataTable, sportsColumn } from "@/components/DataTable";
import homeSportsData from "@/data/homesports.json";
import { ResultEntry } from "@/types/tableDataTypes";
import { sortDataWithTime } from "@/utils/sorting";
import LayoutSidebarWrapper from "@/components/LayoutSidebarWrapper";
import LiveBettingTopBar from "@/components/LiveBetting/LiveBettingTopBar/LiveBettingTopBar";

export default function Home() {
  const sortedData = sortDataWithTime(homeSportsData.results);

  return (
    <LayoutSidebarWrapper>
      <section className="overflow-scroll overflow-x-hidden font-bold h-contentWidth text-textYellow">
        <div className="px-5 my-5 ">
          <h2 className="cursor-pointer text-greenBg-200 hover:text-white">
            Upcoming Games
          </h2>
        </div>
        {sortedData.map((data: ResultEntry) => (
          <DataTable
            key={data.sport_id}
            columns={sportsColumn}
            data={data.data}
          />
        ))}
      </section>
    </LayoutSidebarWrapper>
  );
}
