import React from "react";
import gameOddData from "@/data/eventsOdd.json";
import CommonTab from "@/components/CommonTab";
import { TabsContent } from "@/components/ui/tabs";
import GameOddAccordion from "@/components/GameOdd/GameOddAccordion/IndividualSportAccordion/GameOddAccordion";
import GameOddTable from "@/components/GameOdd/GameOddTable/GameOddTable";
import Link from "next/link";

const OddsPage = () => {
  const { FI, event_id, others, ...filteredData } = gameOddData.results[0];

  const tabHeaders = Object.keys(filteredData);
  const tabContent = Object.values(filteredData)?.map((item) => item.sp);
  return (
    <div className="w-full h-[90vh] flex-col justify-start items-start overflow-y-auto overflow-x-hidden flex ">
      <div className="w-full min-h-[105px] flex flex-col justify-between items-start p-1 px-7 bg-greenBg-500">
        <div className="text-[13px] w-full font-light flex justify-between items-center text-gray-300 pr-5 py-2">
          <Link href="/" className="cursor-pointer hover:text-white">
            Soccer - UEFA Champions League- Women
          </Link>
          <span className="text-[12px] ">20 Mar 04:45</span>
        </div>
        <Link
          href="/"
          className="cursor-pointer hover:underline decoration-[1px] hover:underline-offset-[2px] flex w-full text-white h-[55px] flex-1 items-center justify-start font-bold text-[20px]"
        >
          Benfica - Dames v Lyon - Dames
        </Link>
      </div>
      <CommonTab headers={tabHeaders} isGraph>
        <div className="w-full h-auto pt-2 p-7 bg-gray-100/10">
          {tabContent.map((content: any, id) => (
            <TabsContent
              value={tabHeaders[id]}
              key={id}
              className="flex flex-col items-center justify-start gap-5 "
            >
              {Object.values(content)?.map((item: any, id: number) => {
                if (item?.odds) {
                  return (
                    <GameOddAccordion
                      dummy={item}
                      containsTable={true}
                      key={id}
                      title={item?.name}
                      moreInfo={id === 0}
                      defaultState={"open"}
                    >
                      <div className="w-full flex flex-1 bg-[#4E5453]">
                        <GameOddTable
                          odds={item?.odds}
                          id={item?.id}
                          name={item?.name}
                        />
                      </div>
                    </GameOddAccordion>
                  );
                }
              })}
            </TabsContent>
          ))}
        </div>
      </CommonTab>
    </div>
  );
};

export default OddsPage;
