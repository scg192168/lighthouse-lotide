// variable 'input' takes command line argument using 'reverse' function to show output in reverse order

let input = process.argv[2];

function reverse(original) {
  return orignal.split('').reverseList().join('');
}
if (input) {
  console.log(reverse(input));
} else {
  console.log("String.");
}
