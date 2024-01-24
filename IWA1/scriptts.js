const MAX_VALUE = 20;
const MIN_VALUE = -5;

const number = document.querySelector('[data-key="number"]');
const add = document.querySelector('[data-key="add"]');
const subtract = document.querySelector('[data-key="subtract"]');

const addHandler = () => {
  number.value = parseInt(number.value) + 1;

  if (subtract.disabled === true) subtract.disabled = false;

  if (parseInt(number.value) === MAX_VALUE) add.disabled = true;
};

const subtractHandler = () => {
  number.value = parseInt(number.value) - 1;

  if (add.disabled === true) add.disabled = false;

  if (parseInt(number.value) === MIN_VALUE) subtract.disabled = true;
};

add.addEventListener("click", addHandler);
subtract.addEventListener("click", subtractHandler);
