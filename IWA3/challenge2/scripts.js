import { display as alexDisplay, role as alexRole } from "./alex.js";
import {
  display as johannesDisplay,
  role as johannesRole,
} from "./johannes.js";
import { display as nwabisaDisplay, role as nwabisaRole } from "./nwabisa.js";

document.querySelector("#nwabisa").innerText = nwabisaDisplay;
document.querySelector("#johannes").innerText = johannesDisplay;
document.querySelector("#alex").innerText = alexDisplay;

console.log("Roles: " + nwabisaRole + ", " + johannesRole + ", " + alexRole);
