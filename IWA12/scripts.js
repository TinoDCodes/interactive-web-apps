const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

// Edit below line

// Create book objects for three different books
const book1Root = document.querySelector("#book1");
const book1 = {
  status: book1Root.querySelector(".status"), // Reference to the book status element
  reserve: book1Root.querySelector(".reserve"), // Reference to the reserve button
  checkout: book1Root.querySelector(".checkout"), // Reference to the checkout button
  checkin: book1Root.querySelector(".checkin"), // Reference to the check-in button
};

const book2Root = document.querySelector("#book2");
const book2 = {
  status: book2Root.querySelector(".status"),
  reserve: book2Root.querySelector(".reserve"),
  checkout: book2Root.querySelector(".checkout"),
  checkin: book2Root.querySelector(".checkin"),
};

const book3Root = document.querySelector("#book3");
const book3 = {
  status: book3Root.querySelector(".status"),
  reserve: book3Root.querySelector(".reserve"),
  checkout: book3Root.querySelector(".checkout"),
  checkin: book3Root.querySelector(".checkin"),
};

// Update book1 UI based on its status
book1.checkin.style.color = ""; // Reset check-in button color
book1.status.style.color = STATUS_MAP[`${book1.status.innerText}`].color; // Set status color
book1.reserve.disabled = STATUS_MAP[`${book1.status.innerText}`].canReserve
  ? false
  : true; // Enable/disable reserve button
book1.checkout.disabled = STATUS_MAP[`${book1.status.innerText}`].canCheckout
  ? false
  : true; // Enable/disable checkout button
book1.checkin.disabled = STATUS_MAP[`${book1.status.innerText}`].canCheckIn
  ? false
  : true; // Enable/disable check-in button

// Update book2 UI similarly
book2.checkin.style.color = "";
book2.status.style.color = STATUS_MAP[`${book2.status.innerText}`].color;
book2.reserve.disabled = STATUS_MAP[`${book2.status.innerText}`].canReserve
  ? false
  : true;
book2.checkout.disabled = STATUS_MAP[`${book2.status.innerText}`].canCheckout
  ? false
  : true;
book2.checkin.disabled = STATUS_MAP[`${book2.status.innerText}`].canCheckIn
  ? false
  : true;

// Update book3 UI similarly
book3.checkin.style.color = "";
book3.status.style.color = STATUS_MAP[`${book3.status.innerText}`].color;
book3.reserve.disabled = STATUS_MAP[`${book3.status.innerText}`].canReserve
  ? false
  : true;
book3.checkout.disabled = STATUS_MAP[`${book3.status.innerText}`].canCheckout
  ? false
  : true;
book3.checkin.disabled = STATUS_MAP[`${book3.status.innerText}`].canCheckIn
  ? false
  : true;
