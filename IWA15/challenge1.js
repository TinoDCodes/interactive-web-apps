const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

const first = data.lists[0][1];
const second = data.lists[1][1];
const third = data.lists[2][1];

const result = [];

const extractBiggest = () => {
  let arrayRef = first; // is a reference to the array the has the largest number at its last index

  if (first.length === 0 && second.length === 0 && third.length === 0)
    return null;

  // only compare values from the 2 arrays if both arrays have a length greater than 0
  if (second.length > 0 && first.length > 0) {
    if (second[second.length - 1] > first[first.length - 1]) arrayRef = second;
  } else {
    arrayRef = (second.length > 0 && second) || arrayRef; // set the array reference to whichever array  still has elements in it
  }

  // only compare values from the 2 arrays if both arrays have a length greater than 0
  if (third.length > 0 && arrayRef.length > 0) {
    if (third[third.length - 1] > arrayRef[arrayRef.length - 1])
      arrayRef = third;
  } else {
    arrayRef = (third.length > 0 && third) || arrayRef; // set the array reference to whichever array  still has elements in it
  }

  return arrayRef.pop();
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
