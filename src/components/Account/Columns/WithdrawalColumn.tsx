import CommonColumn from "@/components/DataTable/CommonColumn";
import CommonHeader from "@/components/DataTable/CommonHeader";
import { COMPLETED, DISAPPROVED, PENDING } from "@/lib/constants";
import { getStatusColorCode } from "@/utils/getStatusColor";
import CommonModal from "@/components/CommonModal";
import CommonModalTableForm from "@/components/Forms/CommonModalTableForm/CommonModalTableForm";
import SmallButton from "@/components/Buttons/SmallButton";

export const WithdrawalColumnForPopup = (isChipRequest?: boolean): any[] => [
  {
    accessorKey: "username",
    header: () => <CommonHeader text="Username" />,
    cell: ({ row }: any) => (
      <CommonColumn text={row.original.username} textStyle="p-5" />
    ),
  },
  ...(isChipRequest
    ? [
        {
          accessorKey: "type",
          header: () => <CommonHeader text="Type" />,
          cell: ({ row }: any) => (
            <CommonColumn text={row.original.type} textStyle="p-5" />
          ),
        },
      ]
    : []),
  {
    accessorKey: "chips",
    header: () => <CommonHeader text="Chips" />,
    cell: ({ row }: any) => (
      <CommonColumn text={row.original.chips} textStyle="p-5" />
    ),
  },
  {
    accessorKey: "requestDate",
    header: () => <CommonHeader text="Request Date" />,
    cell: ({ row }: any) => (
      <CommonColumn text={row.original.requestDate} textStyle="p-5" />
    ),
  },
  {
    accessorKey: "completionDate",
    header: () => <CommonHeader text="Completion Date" />,
    cell: ({ row }: any) => (
      <CommonColumn text={row.original.completionDate || "-"} textStyle="p-5" />
    ),
  },
  {
    accessorKey: "status",
    header: () => <CommonHeader text="Status" />,
    cell: ({ row }: any) => {
      const { status } = row.original;
      const bgColor = getStatusColorCode(status);
      return (
        <CommonColumn text={status} textStyle={`p-5 ${bgColor} text-[14px]`} />
      );
    },
  },
];

export const WithdrawalColumn = [
  {
    accessorKey: "username",
    header: () => <CommonHeader text="Username" />,
    cell: ({ row }: any) => (
      <CommonColumn text={row.original.username} textStyle="p-5" />
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
    accessorKey: "requestDate",
    header: () => <CommonHeader text="Request Date" />,
    cell: ({ row }: any) => (
      <CommonColumn text={row.original.requestDate} textStyle="p-5" />
    ),
  },
  {
    accessorKey: "completionDate",
    header: () => <CommonHeader text="Completion Date" />,
    cell: ({ row }: any) => (
      <CommonColumn text={row.original.completionDate || "-"} textStyle="p-5" />
    ),
  },
  {
    accessorKey: "status",
    header: () => <CommonHeader text="Status" />,
    cell: ({ row }: any) => {
      const { status } = row.original;
      const bgColor = getStatusColorCode(status);
      return (
        <CommonColumn text={status} textStyle={`p-5 ${bgColor} text-[14px]`} />
      );
    },
  },
  {
    accessorKey: "action",
    header: () => <CommonHeader text="Action" />,
    cell: () => (
      <div className="flex justify-center ">
        <CommonModal
          className="max-w-[790px] max-md:w-[90%]"
          modalTitle="Withdrawal Request"
          modalTrigger={
            <SmallButton
              buttonText="View"
              buttonStyle="text-white bg-green-600"
            />
          }
        >
          <CommonModalTableForm
            tableData={WithdrawalColumnData}
            tableColumns={WithdrawalColumnForPopup()}
            tableStyle="rounded-xl overflow-hidden"
            cellStyle="p-0"
          />
        </CommonModal>
      </div>
    ),
  },
];

export const WithdrawalColumnData = [
  {
    username: "user_123",
    chips: 2000,
    requestDate: "01/01/2024",
    completionDate: "",
    status: PENDING,
  },
  {
    username: "user_456",
    chips: 1000,
    requestDate: "01/01/2024",
    completionDate: "01/01/2024",
    status: COMPLETED,
  },
  {
    username: "user_789",
    chips: 5500,
    requestDate: "01/01/2024",
    completionDate: "01/01/2024",
    status: DISAPPROVED,
  },
];
