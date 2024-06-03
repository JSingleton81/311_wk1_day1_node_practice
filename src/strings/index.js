// const split = (str, delim) => {
  // write code for strings.split
  const split = (str, delim) => str.split(delim);
// }

const pairs = (str) => {
  // write code for strings.pairs
  const result = [];

  for (let i = 0; i < str.length; i += 2) {
    result.push(str.substring(i, i + 2));
  }

  return result;
}

const reverse = (str) => {
  // write code for strings.reverse
  return str.split('').reverse().join('');
}

module.exports = {
  split,
  pairs,
  reverse
}