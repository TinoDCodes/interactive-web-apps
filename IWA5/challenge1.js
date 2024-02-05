// Constants for shipping warnings
const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";

// Default value for selecting items
const NONE_SELECTED = 0;

// Initialize variables
let customers = 1;
const location = "RSA"; // Change this to the actual location
let currency = null;
let shipping = null;

// Determine shipping cost based on location
if (location === "RSA") {
  shipping = 400;
  currency = "R";
} else if (location === "NAM") {
  shipping = 600;
  currency = "$";
} else {
  shipping = 800;
  currency = "$";
}

// Calculate costs for different items
const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

// Calculate total cost
const cost = shoes + toys + shirts + batteries + pens;

// Apply free shipping condition
if (
  (location === "RSA" && cost >= 1000) ||
  (location === "NAM" && cost >= 60)
) {
  if (customers === 1) {
    shipping = 0;
  } else {
    console.log(FREE_WARNING);
  }
}

// Calculate final total cost
const totalCost = cost + shipping;

// Display appropriate message based on location
location === "NK"
  ? console.log(BANNED_WARNING)
  : console.log("Price:", currency, totalCost);
