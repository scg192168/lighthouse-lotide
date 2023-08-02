/** use 'process.argv' array to capture command-line arguments */
const num = process.argv.slice(2);
const rollingDice = (num) => {
  let diceResults = [];
  for (let i = 0; i < num; i++) {
    diceResults.push(Math.ceil((Math.random() * 6)) + 1);
  }
  return diceResults;
};

module.exports = rollingDice;