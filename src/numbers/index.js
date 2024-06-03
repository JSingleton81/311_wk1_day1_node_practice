const isEven = (num) => {
  // write code for numbers.isEven
  return num % 2 === 0;
}

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((acc, current) => acc + current, 0);
}

const comboSum = (arr, targetSum) => {
  // write code for numbers.comboSum
  return arr.some((val, index, array) =>
  array.some((other, otherIndex) => index !== otherIndex && val + other === targetSum)
);
}

module.exports = {
  isEven,
  sum,
  comboSum
}