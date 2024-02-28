// Get elements for order 1
const order1Root = document.querySelector('[data-key="order1"]');
const order1BiscuitsText =
  order1Root.querySelector('[class="biscuits"]').children[1];
const order1DonutsText =
  order1Root.querySelector('[class="donuts"]').children[1];
const order1PancakesText =
  order1Root.querySelector('[class="pancakes"]').children[1];
const order1StatusText =
  order1Root.querySelector('[class="status"]').children[1];

// Get elements for order 2
const order2Root = document.querySelector('[data-key="order2"]');
const order2BiscuitsText =
  order2Root.querySelector('[class="biscuits"]').children[1];
const order2DonutsText =
  order2Root.querySelector('[class="donuts"]').children[1];
const order2PancakesText =
  order2Root.querySelector('[class="pancakes"]').children[1];
const order2StatusText =
  order2Root.querySelector('[class="status"]').children[1];

// Get elements for order 3
const order3Root = document.querySelector('[data-key="order3"]');
const order3BiscuitsText =
  order3Root.querySelector('[class="biscuits"]').children[1];
const order3DonutsText =
  order3Root.querySelector('[class="donuts"]').children[1];
const order3PancakesText =
  order3Root.querySelector('[class="pancakes"]').children[1];
const order3StatusText =
  order3Root.querySelector('[class="status"]').children[1];

// Set text content for order 1
order1BiscuitsText.innerText = order1Root.attributes["data-biscuits"].value;
order1DonutsText.innerText = order1Root.attributes["data-donuts"].value;
order1PancakesText.innerText = order1Root.attributes["data-pancakes"].value;
order1StatusText.innerText =
  order1Root.attributes["data-delivered"].value === "true"
    ? "Delivered"
    : "Pending";

// Set text content for order 2
order2BiscuitsText.innerText = order2Root.attributes["data-biscuits"].value;
order2DonutsText.innerText = order2Root.attributes["data-donuts"].value;
order2PancakesText.innerText = order2Root.attributes["data-pancakes"].value;
order2StatusText.innerText =
  order2Root.attributes["data-delivered"].value === "true"
    ? "Delivered"
    : "Pending";

// Set text content for order 3
order3BiscuitsText.innerText = order3Root.attributes["data-biscuits"].value;
order3DonutsText.innerText = order3Root.attributes["data-donuts"].value;
order3PancakesText.innerText = order3Root.attributes["data-pancakes"].value;
order3StatusText.innerText =
  order3Root.attributes["data-delivered"].value === "true"
    ? "Delivered"
    : "Pending";
