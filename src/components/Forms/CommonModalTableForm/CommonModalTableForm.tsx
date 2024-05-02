import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
interface CommonModalTableFormProps {
  tableData: Record<any, any>[];
  tableColumns: ColumnDef<any>[];
  tableStyle?: string;
  cellStyle?: string;
  children?: React.ReactNode;
  onSubmit?: () => void;
}
const CommonModalTableForm: React.FC<CommonModalTableFormProps> = ({
  tableData,
  tableColumns,
  tableStyle,
  cellStyle,
  children,
  onSubmit,
}) => {
  return (
    <form
      className="flex justify-start items-center flex-col  w-full gap-5 overflow-hidden"
      onSubmit={onSubmit}
    >
      <DataTable
        data={tableData}
        columns={tableColumns}
        tableStyle={tableStyle}
        cellStyle={cellStyle}
      />
      {children}
      <div className="flex w-full justify-center items-center gap-10 max-mobile:gap-3 max-mobile:flex-col">
        <Button
          variant="destructive"
          className=" max-h-[45px] text-[15px]  bg-red-700 text-white font-bold py-2 px-4 rounded-[3px] min-w-40"
        >
          Disapprove
        </Button>
        <Button
          type="submit"
          className="bg-greenBg-500 max-h-[45px] text-[15px]  hover:bg-greenBg-400 text-white font-bold py-2 px-4 rounded-[3px] min-w-40"
        >
          Approve
        </Button>
      </div>
    </form>
  );
};

export default CommonModalTableForm;
