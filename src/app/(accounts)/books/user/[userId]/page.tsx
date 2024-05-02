"use client";
import {
  BetColumn,
  BetColumnData,
} from "@/components/Account/Columns/BetColumn";
import {
  RecentTransactionsColumn,
  RecentTransactionsData,
} from "@/components/Account/Columns/RecentTransctions";
import LargeButton from "@/components/Buttons/LargeButton";
import SmallButton from "@/components/Buttons/SmallButton";
import CommonHeadingTable from "@/components/CommonHeadingTable";
import HeaderText from "@/components/Headings";
import { Button } from "@/components/ui/button";

export default function UserPage() {
  return (
    <div className="flex flex-col gap-3 py-5">
      <div>
        <Button
          className="bg-white disabled:opacity-100 hover:bg-white"
          disabled
        >
          Chips: 1,000
        </Button>
      </div>
      <div>
        <HeaderText heading="Role" />
        <div className="flex items-center gap-3 px-4 py-3 bg-white rounded max-w-fit">
          <p>Player</p>
          <SmallButton buttonText="Update" buttonStyle="text-white" />
        </div>
      </div>

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
      <div className="flex justify-center w-full">
        <LargeButton
          buttonText="Kick User"
          buttonStyle="bg-red-500 text-white mt-5 hover:bg-red-500/80"
        />
      </div>
    </div>
  );
}
