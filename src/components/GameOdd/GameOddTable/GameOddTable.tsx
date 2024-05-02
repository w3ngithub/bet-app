import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import GameOddButton from "../GameOddButton/GameOddButton";
import { BettingCategory } from "@/types/GameOddTypes";

interface OddsItem {
  id: string;
  odds: string;
  header: string;
  name: string;
  handicap: string;
}

interface GameOddTableProps {
  odds: OddsItem[];
}

const GameOddTable: React.FC<BettingCategory> = ({ odds, id }) => {
  const collectUniqueHeaders = (data: any) => {
    const uniqueHeaders: { [key: string]: OddsItem[] } = {};
    data.forEach((item: any) => {
      const { header } = item;
      if (!uniqueHeaders[header]) {
        uniqueHeaders[header] = [];
      }
      uniqueHeaders[header].push(item);
    });
    return uniqueHeaders;
  };

  const uniqueHeadersData = collectUniqueHeaders(odds);

  return (
    <Table className="w-full text-white">
      <TableHeader className="w-full flex justify-start items-center border-0">
        <TableRow
          style={{ borderBottomWidth: "0" }}
          className="w-full flex  bg-gray-100/10 justify-start border-0  items-center flex-1"
        >
          {[" ", ...Object.keys(uniqueHeadersData)].map((header) => (
            <TableHead
              className="min-w-[200px] border-0 flex-1 w-full h-[30px] leading-[30px] justify-center  flex items-center px-2 text-[13px] font-semibold text-white hover:text-white"
              key={header}
            >
              {header === "undefined" ? "" : header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="border-0">
        {Object.values(uniqueHeadersData)[0]?.map((item, index) => (
          <TableRow
            key={id}
            className="w-full flex border-0   justify-center items-center text-white flex-1"
          >
            <GameOddButton
              title={item.name}
              type="disabled"
              centerContent={true}
            />
            {Object.values(uniqueHeadersData).map((headerData, dataIndex) => (
              <>
                <GameOddButton
                  key={dataIndex}
                  gameOdd={headerData[index] ? headerData[index].odds : " "}
                  centerContent={true}
                  title={headerData[index] ? headerData[index]?.handicap : " "}
                />
              </>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GameOddTable;
