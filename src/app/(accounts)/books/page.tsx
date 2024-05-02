"use client";

import {
  ChipsColumn,
  ChipsColumnData,
} from "@/components/Account/Columns/ChipsColumn";

import LargeButton from "@/components/Buttons/LargeButton";
import HeaderText from "@/components/Headings";
import { Button } from "@/components/ui/button";
import AgentPlayerTab from "../../../components/SuperAgent/AgentPlayerTab";
import UpdateBook from "@/components/SuperAgent/AgentPlayerTab/UpdateBook";
import { ROLES } from "@/lib/constants";
import CommonHeadingTable from "@/components/CommonHeadingTable";
import CommonModal from "@/components/CommonModal";
import TextField from "@/components/TextField/TextField";
import { WithdrawalColumn } from "@/components/Account/Columns/WithdrawalColumn";

const BooksPage = () => {
  const userRole: string = "superAgent";
  return (
    <section className="flex flex-col  gap-4 ">
      <div>
        <HeaderText heading=" Invite Code: user_123_abc" />
        <div className="flex justify-between max-sm:flex-col max-sm:gap-4">
          <div className="flex gap-2">
            <Button className="bg-white disabled:opacity-100" disabled>
              Chips: 1,000
            </Button>
            <CommonModal
              modalTitle="Request Additional Chips"
              modalTrigger={
                <LargeButton
                  buttonText="Request More"
                  buttonStyle="text-white"
                />
              }
              footerContent={
                <Button
                  type="submit"
                  className="bg-greenBg-500 h-[45px] text-[15px]  hover:bg-greenBg-400 text-white font-bold py-2 px-4 rounded-[3px] min-w-40"
                >
                  Confirm
                </Button>
              }
            >
              <form className="flex justify-start items-center flex-col w-full gap-5">
                <TextField
                  borderType="default"
                  variant="large"
                  placeholder="Chip Count"
                  type="text"
                  className="bg-white  text-[#282828]"
                  disabled={false}
                />
              </form>
            </CommonModal>
          </div>
          {ROLES.player !== userRole && (
            <div className="flex gap-2">
              <LargeButton buttonText="Request More" buttonStyle="text-white" />
              <Button className="bg-white disabled:opacity-100" disabled>
                Treasury: 50,000
              </Button>
            </div>
          )}
        </div>
      </div>
      {ROLES.superAgent === userRole && (
        <CommonHeadingTable
          heading="Withdrawal Requests"
          tableData={ChipsColumnData}
          cellStyle="p-0"
          columnData={WithdrawalColumn}
        />
      )}
      {ROLES.player !== userRole && (
        <CommonHeadingTable
          heading="Chips Requests"
          tableData={ChipsColumnData}
          cellStyle="p-0"
          columnData={ChipsColumn}
        />
      )}

      <AgentPlayerTab userRole={userRole} />
      {ROLES.superAgent === userRole && <UpdateBook />}
      {ROLES.superAgent !== userRole && (
        <div className="w-full flex justify-center">
          <LargeButton
            buttonText="Exit Book"
            buttonStyle="bg-red-500  text-white mb-5   hover:bg-red-500/80"
          />
        </div>
      )}
    </section>
  );
};

export default BooksPage;
