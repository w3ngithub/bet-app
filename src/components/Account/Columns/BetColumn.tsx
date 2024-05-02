import CommonColumn from "@/components/DataTable/CommonColumn";
import CommonHeader from "@/components/DataTable/CommonHeader";
import TableLinkButton from "@/components/DataTable/TableLinkButton";
import { COMPLETED, FAILED, PENDING } from "@/lib/constants";
import { getStatusColorCode } from "@/utils/getStatusColor";

export const BetColumn: any[] = [
  {
    accessorKey: "date",
    header: () => <CommonHeader text="Date" />,
    cell: ({ row }: any) => (
      <CommonColumn text={row.original.date} textStyle="p-5" />
    ),
  },
  {
    accessorKey: "chips",
    header: () => <CommonHeader text="Chips" />,
    cell: ({ row }: any) => (
      <CommonColumn text={row.original.chips} textStyle="p-5" />
    ),
  },
  {
    accessorKey: "parlay",
    header: () => <CommonHeader text="Parlay" />,
    cell: ({ row }: any) => (
      <CommonColumn text={row.original.parlay} textStyle="p-5" />
    ),
  },
  {
    accessorKey: "totalParlayRate",
    header: () => <CommonHeader text="Total Parlay Rate" />,
    cell: ({ row }: any) => (
      <CommonColumn
        text={row.original.totalParlayRate || "-"}
        textStyle="p-5"
      />
    ),
  },
  {
    accessorKey: "status",
    header: () => <CommonHeader text="Status" />,
    cell: ({ row }: any) => {
      const { status } = row.original;
      const bgColor = getStatusColorCode(status);
      return (
        <CommonColumn text={status} textStyle={`p-5 ${bgColor}  text-[14px]`} />
      );
    },
  },
  {
    accessorKey: "return ",
    header: () => <CommonHeader text="Return" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.return} />,
  },
  {
    accessorKey: "action",
    header: () => <CommonHeader text="Action" />,
    cell: ({ row }: any) => (
      <TableLinkButton
        link={`/books/bet/${row.original.parlay}`}
        buttonText="View"
        buttonStyle="text-white"
      />
    ),
  },
];

export const BetDetailColumn: any[] = [
  {
    accessorKey: "parlay",
    header: () => <CommonHeader text="Parlay" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.parlay} />,
  },
  {
    accessorKey: "date",
    header: () => <CommonHeader text="Date" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.date} />,
  },
  {
    accessorKey: "chips",
    header: () => <CommonHeader text="Chips" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.chips} />,
  },
  {
    accessorKey: "class",
    header: () => <CommonHeader text="Class" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.class} />,
  },
  {
    accessorKey: "name",
    header: () => <CommonHeader text="Name" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.name} />,
  },
  {
    accessorKey: "odd",
    header: () => <CommonHeader text="Odd" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.odd} />,
  },
  {
    accessorKey: "outcome ",
    header: () => <CommonHeader text="Outcome" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.outcome} />,
  },
];

export const BetDetailsColumnData = [
  {
    chips: 2000,
    date: "01/01/2024",
    parlay: "3",
    class: "Asian Lines",
    name: `Goal Line - Over`,
    odd: "1.94",
    outcome: "Success",
  },
  {
    chips: 1000,
    date: "01/01/2024",
    parlay: "2",
    class: "Asian Lines",
    name: `Goal Line - Over`,
    odd: "1.94",
    outcome: "Fail",
  },
];

export const BetColumnData = [
  {
    chips: 2000,
    date: "01/01/2024",
    parlay: "3",
    status: PENDING,
    totalParlayRate: `2.4x`,
    return: "Pending",
  },
  {
    chips: 1000,
    date: "01/01/2024",
    parlay: "2",
    status: COMPLETED,
    totalParlayRate: `3.1x`,
    return: "3100",
  },
  {
    chips: 5500,
    date: "01/01/2024",
    parlay: "5",
    status: FAILED,
    totalParlayRate: `6.6x`,
    return: "36300",
  },
];
