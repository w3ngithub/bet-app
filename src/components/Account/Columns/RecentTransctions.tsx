import CommonColumn from "@/components/DataTable/CommonColumn";
import CommonHeader from "@/components/DataTable/CommonHeader";

export const RecentTransactionsColumn: any[] = [
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
    accessorKey: "from",
    header: () => <CommonHeader text="From" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.from} />,
  },
  {
    accessorKey: "to",
    header: () => <CommonHeader text="To" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.to} />,
  },
  {
    accessorKey: "type",
    header: () => <CommonHeader text="Type" />,
    cell: ({ row }: any) => <CommonColumn text={row.original.type} />,
  },
];

export const RecentTransactionsData = [
  {
    chips: 2000,
    date: "01/01/2024",
    from: "user_123",
    to: "Book Treasury",
    type: `Player Balance`,
  },
  {
    chips: 1000,
    date: "01/01/2024",
    to: "user_123",
    from: "Book Treasury",
    type: `Agent Treasury`,
  },
  {
    chips: 5000,
    date: "01/01/2024",
    from: "agent_123 Treasury",
    to: "Book Treasury",
    type: `Player Balance`,
  },
];
