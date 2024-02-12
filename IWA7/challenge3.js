const leoName = "Leo";
const leoSurname = "Musvaire";
const leoBalance = "-9394";

const sarahName = "Sarah";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

const leoBalanceValue = Math.abs(parseFloat(leoBalance));
const sarahBalanceValue = Math.abs(parseFloat(sarahBalance));

const owed = `R ${(leoBalanceValue + sarahBalanceValue).toFixed(2)}`;
const leo = `${leoName} ${leoSurname} (Owed: R ${leoBalanceValue.toFixed(2)})`;
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${sarahBalanceValue.toFixed(
  2
)})`;
const total = "Total amount owed: ";
const result = `${leo}\n${sarah}\n\n${divider}\n  ${total}${owed}\n${divider}`;

console.log(result);
