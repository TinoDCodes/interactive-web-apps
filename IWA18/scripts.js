import {
  createOrderHtml,
  html,
  moveToColumn,
  updateDraggingHtml,
} from "./view.js";
import { COLUMNS, createOrderData, updateDragging, state } from "./data.js";

const { add, other, edit, help, columns } = html;

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};

/**
 * Handler that sets the dragging source state to the events target
 * @param {Event} event
 */
const handleDragStart = (event) => {
  state.dragging.source = event.target;
};

/**
 * Handler that enforces the movement of the order to the desired column.
 * It updates the column state of the selected order and makes use of the
 * "moveToColumn" function to move the html node for the order to the right column.
 * @param {Event} event
 */
const handleDragEnd = (event) => {
  const { id } = state.dragging.source.dataset;
  const { over } = state.dragging;
  const order = state.orders[id];

  // update state of order
  order.column = over;

  // move order to the relevant column
  moveToColumn(id, over);

  updateDragging({ over: null });
  updateDraggingHtml({ over: null });
};

/**
 * A handler that toggles the help overylay open or closed based on which element is clicked.
 * If the close button is clicked, it will close the overy and if the "?" button is clicked
 * it will open the overlay.
 * @param {Event} event
 */
const handleHelpToggle = (event) => {
  const { target } = event;
  const isCancel = target === help.cancel;

  if (isCancel) {
    help.overlay.open = false;
  } else {
    help.overlay.open = true;
  }

  other.add.focus();
};

/**
 * A handler that toggles the "add order" overylay open or closed based on which element is clicked.
 * If the "Add Order" button is clicked, it will open the overy and if the "cancel" button is clicked
 * it will close the overlay.
 * @param {Event} event
 */
const handleAddToggle = (event) => {
  const { target } = event;
  const isAddOrderBtn = target === other.add;

  if (isAddOrderBtn) {
    add.overlay.open = true;
  } else {
    add.form.reset();
    add.overlay.open = false;
  }

  other.add.focus();
};

/**
 * A handler that handles the submission and creation of an order when the "add" button is clicked.
 * When the "add" button is clicked, the values of the order title and table number are collected
 * and used to create an orderData object with the help of the createOrderData function.
 * Once the order data is generated it is used to generate the html that will represent the order
 * and this html element for the order is then appended as a child to the appropriate column.
 * Lastly the form input values get reset and the overlay is closed.
 * @param {Event} event
 */
const handleAddSubmit = (event) => {
  event.preventDefault();
  const { form, overlay, title, table } = add;

  const orderData = createOrderData({
    title: title.value,
    table: table.value,
    column: COLUMNS[0],
  });
  // add the order to state
  state.orders[orderData.id] = orderData;

  // Generate order HTML
  const orderHtml = createOrderHtml(orderData);
  columns[COLUMNS[0]].appendChild(orderHtml);

  // Reset form and close overlay
  form.reset();
  overlay.open = false;
  other.add.focus();
};

/**
 * A handler that toggles the edit overlay open or closed.
 * If an order item is clicked, the overlay is opened, the particular order's id is retreived from
 * the target element's dataset and is used to get the order's details from state. Once the order
 * details are collected from state, they are used to populate the relevant fields in the "edit dialog".
 *
 * If the cancel button is clicked then the overlay is closed and the "add order button" is set to focus.
 * @param {Event} event
 */
const handleEditToggle = (event) => {
  const { target } = event;
  const { overlay, title, table, column } = edit;
  const isOrder = target.className === "order";

  if (isOrder) {
    const { id } = target.dataset;
    const orderFromState = state.orders[id];

    overlay.open = true;
    title.value = orderFromState.title;
    table.value = orderFromState.table;
    column.value = orderFromState.column;
    edit.id.value = orderFromState.id;
  } else {
    overlay.open = false;
    other.add.focus();
  }
};

/**
 * A handler that handles updating the selected order's details and state. The order id is retrieved from
 * the hidden overlay input and is used to collect the state object for the desired order. Once the "update"
 * button is clicked, the current values of the overlay inputs are used to update the state object for the order.
 * A new html node is created using the updated state of the object, the old html node for the order is removed from
 * the DOM and the new html node is appended to the appropriate column.
 * @param {Event} event
 */
const handleEditSubmit = (event) => {
  event.preventDefault();
  const { overlay, title, table, column } = edit;
  const orderId = edit.id.value;
  const orderFromState = state.orders[orderId];
  const prevOrderColumn = orderFromState.column;
  const currentOrderHtmlNode = document.querySelector(`[data-id="${orderId}"]`);

  // update order details in state
  orderFromState.title = title.value;
  orderFromState.table = table.value;
  orderFromState.column = column.value;

  const newOrderHtml = createOrderHtml(orderFromState);

  columns[prevOrderColumn].removeChild(currentOrderHtmlNode);
  columns[orderFromState.column].appendChild(newOrderHtml);

  // close edit overlay & return focus to add order button
  overlay.open = false;
  other.add.focus();
};

/**
 * A handler that removes the htmlNode associated with the desired order from the DOM
 * as well as deletes the order from state.
 * @param {Event} event
 */
const handleDelete = (event) => {
  const overlayElement = event.target.parentNode.parentNode;
  const orderId = overlayElement.querySelector("[data-edit-id]").value;
  const orderColumn = state.orders[orderId].column;
  const orderNode = document.querySelector(`[data-id="${orderId}"]`);

  columns[orderColumn].removeChild(orderNode);
  delete state.orders[orderId];

  overlayElement.open = false;
  other.add.focus();
};

add.cancel.addEventListener("click", handleAddToggle);
other.add.addEventListener("click", handleAddToggle);
add.form.addEventListener("submit", handleAddSubmit);

other.grid.addEventListener("click", handleEditToggle);
edit.cancel.addEventListener("click", handleEditToggle);
edit.form.addEventListener("submit", handleEditSubmit);
edit.delete.addEventListener("click", handleDelete);

help.cancel.addEventListener("click", handleHelpToggle);
other.help.addEventListener("click", handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}
