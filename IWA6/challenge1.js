const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// Only change below this line

const primaryValid = !Number.isNaN(parseInt(primaryPhone));
const secondaryValid = !Number.isNaN(parseInt(secondaryPhone));

/*
 * //Alternative solution
 *  const primaryNumeric = parseInt(primaryPhone);
 *  const secondaryNumeric = parseInt(secondaryPhone);

 *  const primaryValid = Number.isNaN(primaryNumeric) === false;
 *  const secondaryValid = Number.isNaN(secondaryNumeric) === false;
*/

console.log("Primary phone is valid numerical string:", primaryValid);
console.log("Secondary phone is valid numerical string:", secondaryValid);
