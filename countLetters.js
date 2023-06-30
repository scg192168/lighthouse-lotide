const countLetters = function(string) {
  const result = {};
  const newString = string.split(" ").joint("");
  for (const letter of newString) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};
console.log(countLetters);