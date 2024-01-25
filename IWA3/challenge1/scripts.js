import { company } from "./configuration.js";
import { year } from "./configuration.js";

const message = "© " + company + " (" + year + ")";
document.querySelector("footer").innerText = message;

/*
 * Why does the code not work?
 * - line 1 & 2 spelling mistake "form" should be "from".
 * - relative paths to configuration.js should start with "./" and end with file extension.
 * - named exports should be within curly braces "{}".
 */
