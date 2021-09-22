import excel4node from "excel4node";
import {
  headerStyle,
  columnHeaders,
  bodyStyle,
  worksheetName,
} from "./constants.js";

const wb = new excel4node.Workbook();
const hStyle = wb.createStyle(headerStyle);
const bStyle = wb.createStyle(bodyStyle);

export function createExcel(data, fileName) {
  const ws = wb.addWorksheet(worksheetName);
  columnHeaders.forEach((elem, index) => {
    ws.cell(1, index + 1)
      .string(elem)
      .style(hStyle);
  });
  // Excel freezes the top rows
  ws.row(1).freeze();
  // Excel create rows
  data.forEach((elem, index) => {
    /*
     * The following code show how to create a cell
     * Consider that this data element has 2 properties --> id and name
     *  ws.cell(2 + index, 1)
     *  .string(elem.id)
     *  .style(bStyle);
     *  ws.cell(2 + index, 2)
     *  .string(elem.name)
     *  .style(bStyle);
     */
  });
  // Excel write to file
  wb.write(fileName);
}
