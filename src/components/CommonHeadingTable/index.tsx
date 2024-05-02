import { DataTable } from "../DataTable";
import HeaderText from "../Headings";

type Props = {
  heading: string;
  tableData: any[];
  columnData: any;
  cellStyle?: string;
};

const CommonHeadingTable = ({
  heading,
  tableData,
  columnData,
  cellStyle,
}: Props) => {
  return (
    <div>
      <HeaderText heading={heading} />
      <DataTable data={tableData} columns={columnData} cellStyle={cellStyle} />
    </div>
  );
};

export default CommonHeadingTable;
