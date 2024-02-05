// Define constants for the year and status
const YEAR = 2050;
const STATUS = "student";

// Initialize a counter for holidays
let count = 0;

// Set an initial date label
let date = "April:";

// Check if the year is 2050
if (YEAR == 2050) {
  // Print holiday names for January and March
  console.log("January:", "New Year’s Day");
  console.log("March:", "Human Rights Day");

  // Print holiday names for April
  console.log(date, "Family Day");
  console.log(date, "Freedom Day");
  count += 4;

  // Check if the status is "student"
  if (STATUS === "student") {
    // Print additional holiday name for June
    console.log("June:", "Youth Day");
    count += 1;
  }

  // Print holiday names for August and September
  console.log("August:", "Women’s Day");
  console.log("September:", "Heritage Day");

  // Update the date label for December
  date = "December:";
  console.log(date, "Day of Reconciliation");
  count += 3;

  // Check if the status is "parent"
  if (STATUS === "parent") {
    // Print additional holiday name for Christmas
    console.log(date, "Christmas Day");
    count += 1;
  }

  // Print holiday name for Day of Goodwill
  console.log(date, "Day of Goodwill");
  count += 1;
}

// Print the user's status, year, and total holidays
console.log("\nYour status is:", STATUS);
console.log("The year is:", YEAR);
console.log("The total holidays is:", count);
