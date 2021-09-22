import fetch from "node-fetch";
import { getDataURL, fileName } from "./constants.js";
import { createExcel } from "./excelHelper.js";
import { token } from "./loginHelper.js";

// Create request and get data to parse
const headers = {
  authorization: "Bearer " + token,
};
const response = await fetch(getDataURL, {
  method: "GET",
  headers: headers,
});
const data = await response.json();
// Create the excel file
createExcel(data, fileName);
