const value = "3";
console.log(parseInt(value) + 4 + parseInt(value));

/*- "343" was the output before because the variable "value" contains a string.
 *- In the expression value + 4 + value, JavaScript performs string concatenation because
 *  the + operator is used with a string (the value of value) and a number (the value 4).
 */
