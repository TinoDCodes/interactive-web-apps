const YEAR = 2050;
const STATUS = "student";
let count = 0;

if (YEAR == 2050) {
  console.log("January:", "New Year’s Day");
  console.log("March:", "Human Rights Day");
  let date = "April:";
  console.log(date, "Family Day");
  console.log(date, "Freedom Day");
  count += 4;

  if (STATUS == "student") {
    console.log("June:", "Youth Day");
    count += 1;
  }

  console.log("August:", "Women’s Day");
  console.log("September:", "Heritage Day");
  date = "December:";
  console.log(date, "Day of Reconciliation");
  count += 3;

  if (STATUS == "parent") {
    console.log(date, "Christmas Day");
    count += 1;
  }

  console.log(date, "Day of Goodwill");
  count += 1;
}

console.log("\nYour status is:", STATUS);
console.log("The year is:", YEAR);
console.log("The total holidays is:", count);
