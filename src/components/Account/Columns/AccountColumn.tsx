"use client";

import CommonColumn from "@/components/DataTable/CommonColumn";
import CommonHeader from "@/components/DataTable/CommonHeader";

export const accountsColumn: any[] = [
  {
    accessorKey: "book",
    header: () => <CommonHeader text="Book" />,
    cell: ({ row }: any) => (
      <CommonColumn disableActions text={row.original.book} />
    ),
  },
  {
    accessorKey: "turnover",
    width: "30%",
    header: () => <CommonHeader text="Turnover" />,
    cell: ({ row }: any) => (
      <CommonColumn disableActions text={row.original.turnover} />
    ),
  },
  {
    accessorKey: "role",
    header: () => <CommonHeader text="Role" />,
    cell: ({ row }: any) => (
      <CommonColumn disableActions text={row.original.role} />
    ),
    width: "20%",
  },
  {
    accessorKey: "action",
    header: () => <CommonHeader text="Action" />,
    cell: ({ row }: any) => (
      <CommonColumn
        asLink
        href={"/books"}
        disableActions
        // text={row.original.action}
        text={"View Book"}
      />
    ),
    width: "20%",
  },
];

export const AccountsData = [
  {
    book: "user_123",
    turnover: 12345,
    role: "Owner",
    action: "",
  },
  {
    book: "user_456",
    turnover: 12345,
    role: "Super Agent",
    action: "",
  },
  {
    book: "user_786",
    turnover: 12345,
    role: "Player",
    action: "",
  },
];
