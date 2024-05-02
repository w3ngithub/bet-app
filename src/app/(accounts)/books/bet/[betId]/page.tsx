"use client";
import {
  BetDetailColumn,
  BetDetailsColumnData,
} from "@/components/Account/Columns/BetColumn";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";

const BetPage = () => {
  return (
    <div className="py-5">
      <DataTable data={BetDetailsColumnData} columns={BetDetailColumn} />
      <Button
        disabled
        className="disabled:opacity-100 bg-white mt-4 w-[250px] "
      >
        Total Payout: 1,000
      </Button>
    </div>
  );
};

export default BetPage;
