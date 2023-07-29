// This JavaScript code defines a function called 'letterPosition', which 
// takes a 'sentence' as input and returns an object that maps each unique
// lowercase letter in the 'sentence' to an array of its positions (indexes)
// in the 'sentence'

const letterPosition = function(sentence) {
  const result = {};
  const lowerCaseSentence = sentence.toLowerCase();
  for (let i = 0; i < lowerCaseSentence.length; i++) {
    const letter = lowerCaseSentence[i];
    if (letter !== ' ' && !result[letter]) {
      result[letter] = [i];
    } else if (letter !== ' ') {
      result[letter].push(i);
    }
  }
  return result;
};
const result = letterPosition("Lighthouse in the house");

console.log(result);

module.exports = letterPosition;
