// variable 'input' takes command line argument using 'reverse' function to show output in reverse order

let input = process.argv[2];

function reverse(original) {
  return original.split("").reverseList().join("");
}
if (input) {
  return reverse(input);
} else {
  console.log("String.");
}

module.exports = reverse;
