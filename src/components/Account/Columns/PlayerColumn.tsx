import CommonColumn from "@/components/DataTable/CommonColumn";
import CommonHeader from "@/components/DataTable/CommonHeader";
import TableLinkButton from "@/components/DataTable/TableLinkButton";

export const PlayerColumn: any[] = [
  {
    accessorKey: "username",
    header: () => <CommonHeader text="Username" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.username} />,
  },
  {
    accessorKey: "turnover",
    header: () => <CommonHeader text="Turnover" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.turnover} />,
  },
  {
    accessorKey: "turnoverReturn",
    header: () => <CommonHeader text="1% TurnoverReturn" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.turnoverReturn} />,
  },
  {
    accessorKey: "action",
    header: () => <CommonHeader text="Action" />,
    cell: ({ row }: any) => (
      <TableLinkButton
        buttonText="Select"
        buttonStyle="text-white"
        link={`/books/user/${row.original.username}`}
      />
    ),
  },
];

export const PlayerColumnData = [
  {
    username: "user_123",
    turnover: 12345,
    turnoverReturn: "20",
    action: "",
  },
  {
    username: "user_456",
    turnover: 12345,
    turnoverReturn: "10",
    action: "",
  },
  {
    username: "user_786",
    turnover: 12345,
    turnoverReturn: "55",
    action: "",
  },
];
