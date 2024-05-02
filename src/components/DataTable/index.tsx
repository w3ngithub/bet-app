"use client";

import {
  ColumnDef,
  Row,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import HeaderTable from "./CommonHeader";
import ColumnTable from "./CommonColumn";
import { DataEntry } from "@/types/tableDataTypes";
import { CustomResultData } from "@/types/liveTable";
import LinkCell from "./TableNameCell/HomeTable/HomeTableNameCell";
import LinkCellSecond from "./TableNameCell/LiveTable/LiveTableNameCell";
import { Star } from "lucide-react";
import { BET_SLIP_DATA } from "@/data/dummyData";

export const sportsColumn: any[] = [
  {
    accessorKey: "sport_id",
    noHover: true,
    width: "50%",
    header: () => <div className="font-bold text-white ">Football</div>,
    cell: ({ row }: { row: Row<DataEntry> }) => {
      return <LinkCell data={row.original.game_data} />;
    },
  },
  {
    accessorKey: "1",
    header: () => <HeaderTable text={"1"} />,
    cell: ({ row }: { row: Row<DataEntry> }) => {
      const oddOriginal = row.original.odd_data.main.sp.full_time_result.odds;
      return <ColumnTable text={oddOriginal[0].odds} data={BET_SLIP_DATA[0]} />;
    },
  },
  {
    accessorKey: "X",
    header: () => <HeaderTable text={"X"} />,
    cell: ({ row }: { row: Row<DataEntry> }) => {
      const oddOriginal = row.original.odd_data.main.sp.full_time_result.odds;
      return <ColumnTable text={oddOriginal[1].odds} data={BET_SLIP_DATA[1]} />;
    },
  },
  {
    accessorKey: "2",
    header: () => <HeaderTable text={"2"} />,
    cell: ({ row }: { row: Row<DataEntry> }) => {
      const oddOriginal = row.original.odd_data.main.sp.full_time_result.odds;
      return <ColumnTable text={oddOriginal[2].odds} data={BET_SLIP_DATA[2]} />;
    },
  },
];

export const liveColumns = (leagueName: string): any[] => [
  {
    accessorKey: "sport_id",
    noHover: true,
    width: "50%",
    header: () => (
      <div className="flex gap-2 color-black">
        <Star
          size={18}
          className="stroke-textWhite-200 hover:fill-textWhite-200"
        />
        <div className="font-bold text-white ">{leagueName}</div>,
      </div>
    ),
    cell: ({ row }: { row: Row<CustomResultData> }) => {
      return <LinkCellSecond data={row.original.game_data} isLive />;
    },
  },
  {
    accessorKey: "1",
    header: () => <HeaderTable text={"1"} />,
    cell: ({ row }: { row: Row<CustomResultData> }) => {
      return (
        <ColumnTable
          text={row.original.odd_data.home_od}
          data={BET_SLIP_DATA[0]}
        />
      );
    },
  },
  {
    accessorKey: "X",
    header: () => <HeaderTable text={"X"} />,
    cell: ({ row }: { row: Row<CustomResultData> }) => {
      return (
        <ColumnTable
          text={row.original.odd_data.draw_od}
          data={BET_SLIP_DATA[1]}
        />
      );
    },
  },
  {
    accessorKey: "2",
    header: () => <HeaderTable text={"2"} />,
    cell: ({ row }: { row: Row<CustomResultData> }) => {
      return (
        <ColumnTable
          text={row.original.odd_data.away_od}
          data={BET_SLIP_DATA[2]}
        />
      );
    },
  },
];

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  tableStyle?: string;
  cellStyle?: string;
  headerStyle?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  tableStyle = "",
  cellStyle = "",
  headerStyle = "",
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div
      className={`border-0 w-full bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end ${tableStyle}`}
    >
      <Table>
        <TableHeader className="bg-white/20">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header: any) => {
                return (
                  <TableHead
                    className={headerStyle}
                    key={header.id}
                    style={
                      header.column.columnDef?.width && {
                        width: `${header.column.columnDef.width}`,
                      }
                    }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell: any) => (
                  <TableCell
                    key={cell.id}
                    className={`${cellStyle} ${
                      cell?.column?.columnDef.noHover
                        ? ""
                        : "hover:bg-white/10 cursor-pointer"
                    } `}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
