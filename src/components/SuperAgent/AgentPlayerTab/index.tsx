import {
  BetColumn,
  BetColumnData,
} from "@/components/Account/Columns/BetColumn";
import {
  PlayerColumn,
  PlayerColumnData,
} from "@/components/Account/Columns/PlayerColumn";
import {
  RecentTransactionsColumn,
  RecentTransactionsData,
} from "@/components/Account/Columns/RecentTransctions";
import SmallButton from "@/components/Buttons/SmallButton";
import CommonHeadingTable from "@/components/CommonHeadingTable";
import CommonTab from "@/components/CommonTab";
import { DataTable } from "@/components/DataTable";
import HeaderText from "@/components/Headings";
import { TabsContent } from "@/components/ui/tabs";
import { ROLES } from "@/lib/constants";
import React from "react";

type Props = {
  userRole: string;
};

const AgentPlayerTab = ({ userRole }: Props) => {
  const tabsData = [
    ...(ROLES.superAgent === userRole ? ["Agent"] : []),
    "Player",
  ];

  return (
    <div className="w-full my-4 ">
      <CommonTab
        headers={tabsData}
        tabListContainerStyle="flex w-full"
        showTabs={userRole !== ROLES.player}
        tabItemStyle="text-base mx-1 px-[12px] capitalize py-[4px] rounded-full data-[state=active]:font-semibold text-gray-300 hover:text-white data-[state=active]:bg-greenBg-300 font-normal  data-[state=active]:text-black data-[state=active]:shadow-sm"
      >
        <TabsContent value={"Agent"}>
          <div className="flex flex-col gap-4">
            {ROLES.player !== userRole && (
              <div>
                <div className="flex sm:items-center sm:justify-between max-sm:flex-col ">
                  <HeaderText heading="Player: 46" headerStyle="my-0" />
                  <div className="flex items-center gap-2">
                    <SmallButton buttonText="Edit" buttonStyle="text-white" />
                    <HeaderText
                      heading="01/01/2024 - 02/01/2024"
                      headerStyle="text-base"
                    />
                  </div>
                </div>
                <DataTable data={PlayerColumnData} columns={PlayerColumn} />
              </div>
            )}
            <CommonHeadingTable
              heading="Bet History"
              tableData={BetColumnData}
              cellStyle="p-0"
              columnData={BetColumn}
            />
            <CommonHeadingTable
              heading="Recent Transactions"
              tableData={RecentTransactionsData}
              columnData={RecentTransactionsColumn}
            />
          </div>
        </TabsContent>
        <TabsContent value="Player">
          <div className="flex flex-col gap-4">
            {ROLES.player !== userRole && (
              <div>
                <div className="flex sm:items-center sm:justify-between max-sm:flex-col ">
                  <HeaderText heading="Player: 46" headerStyle="my-0" />
                  <div className="flex items-center gap-2 ">
                    <SmallButton buttonText="Edit" buttonStyle="text-white" />
                    <HeaderText
                      heading="01/01/2024 - 02/01/2024"
                      headerStyle="text-base max-md:text-md "
                    />
                  </div>
                </div>
                <DataTable data={PlayerColumnData} columns={PlayerColumn} />
              </div>
            )}
            <CommonHeadingTable
              heading="Bet History"
              tableData={BetColumnData}
              cellStyle="p-0"
              columnData={BetColumn}
            />
            <CommonHeadingTable
              heading="Recent Transactions"
              tableData={RecentTransactionsData}
              columnData={RecentTransactionsColumn}
            />
          </div>
        </TabsContent>
      </CommonTab>
    </div>
  );
};

export default AgentPlayerTab;
