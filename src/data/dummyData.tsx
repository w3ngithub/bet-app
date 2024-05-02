import CommonColumn from "@/components/DataTable/CommonColumn";
import CommonHeader from "@/components/DataTable/CommonHeader";

export const AccountsData = [
  {
    book: "user_123",
    turnover: 12345,
    role: "01/01/2024",
    action: "",
    completion: "-",
    status: "Pending",
  },
];

export const Table_Column = [
  {
    accessorKey: "username",
    header: () => <CommonHeader text="Username" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.book} />,
  },
  {
    accessorKey: "chips",
    width: "30%",
    header: () => <CommonHeader text="Chips" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.turnover} />,
  },
  {
    accessorKey: "request",
    header: () => <CommonHeader text="Request Date" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.role} />,
    width: "20%",
  },
  {
    accessorKey: "completion",
    header: () => <CommonHeader text="Completion Date" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.completion} />,
    width: "20%",
  },
  {
    accessorKey: "Status",
    header: () => <CommonHeader text="Status" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.status} />,
    width: "20%",
  },
];

export const BET_SLIP_DATA = [
  {
    title: "AFC Bournemouth",
    description: "AFC Bournemouth- Leicester City",
    odd: "1.58",
    returns: 0.5,
  },
  {
    title: "Draw",
    description: "Blackburn Rovers- Newcastle United",
    odd: "0.58",
    returns: 0.5,
  },
  {
    title: "Luton Town",
    description: "Luton Town- Manchester City",
    odd: "2.58",
    returns: 0.5,
  },
  {
    title: "Olympique Lyon",
    description: "Olympique Lyon - Strasbourg Alsase",
    odd: "0.88",
    returns: 0.5,
  },
  {
    title: "AFC Bournemouth",
    description: "AFC Bournemouth- Leicester City",
    odd: "2.00",
    returns: 0.5,
  },
];
