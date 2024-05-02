"use client";
import {
  AccountsData,
  accountsColumn,
} from "@/components/Account/Columns/AccountColumn";

import { DataTable } from "@/components/DataTable";

const AccountsPage = () => {
  return (
    <div className="w-full mx-auto mt-5 text-white">
      <DataTable data={AccountsData} columns={accountsColumn} />
    </div>
  );
};

export default AccountsPage;
