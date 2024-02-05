const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

let customers = 1;
const location = "NK";
let currency = null;
let shipping = null;

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

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

const cost = shoes + toys + shirts + batteries + pens;

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

const totalCost = cost + shipping;

location === "NK"
  ? console.log(BANNED_WARNING)
  : console.log("Price:", currency, totalCost);
