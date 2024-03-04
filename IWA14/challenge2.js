/**
 * Function takes in 2 numbers as parameters and returns their sum
 * @param {number} a
 * @param {number} b
 * @returns {number} a + b
 */
function add(a, b) {
  return a + b;
}

/**
 * Function takes in 2 numbers as parameters and returns their product
 * @param {number} a
 * @param {number} b
 * @returns {number} a * b
 */
function multiply(a, b) {
  return a * b;
}

function internal() {
  const added = this.add(this.internal.a, this.internal.b);
  const result = this.multiply(added, this.internal.c);
  console.log(result);
}

// Not allowed to change below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal,
};

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal,
};

example1.calculate();
example2.calculate();
