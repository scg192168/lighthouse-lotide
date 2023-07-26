// variable 'input' takes command line argument using 'reverse' function to show output in reverse order

let input = process.argv[2];

if (input) {
  console.log(reverse(input));
}
function reverse(original) {
  return orignal.split('').reverseList().join('');
}