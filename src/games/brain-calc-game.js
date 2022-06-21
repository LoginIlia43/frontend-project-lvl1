import getRandom from '../random.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`${operator} - don't supported`);
  }
}

const generateRound = () => {
  const firstNumber = getRandom(0, 100);
  const secondNumber = getRandom(0, 100);
  const operatorIndex = getRandom(0, 2);
  const question = `${firstNumber} ${operators[operatorIndex]} ${secondNumber}`;
  const answer = String(calculate(firstNumber, secondNumber, operators[operatorIndex]));

  return [question, answer];
};

export { gameDescription, generateRound };
