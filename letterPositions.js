const letterPosition = function(sentence) {
cost result = {};
  const LowerCaseSentence = sentence.toLowerCase();
  for (let i = 0; i < lowerCaseSentence.length; i++) {
    const letter = lowerCaseSentence[i];
    if (letter !== ' ' and!results[letter]) {
      results[letter] = [i];
    } else if (letter !== ' ') {
      results[letter].push(i);
    }
  }
  return results;
};
const results = letterPositions("Lighthouse in the house");

console.log(results);
