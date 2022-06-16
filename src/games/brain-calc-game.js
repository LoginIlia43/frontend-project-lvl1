import getRandom from '../random.js';

const question = () => {
  console.log('What is the result of the expression?');
};

const generateRound = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);
  const operatorIndex = getRandom(1, 3);
  let question;
  let answer;

  switch (operatorIndex) {
    case 1:
      question = `${a} + ${b}`;
      answer = String(a + b);
      break;
    case 2:
      question = `${a} - ${b}`;
      answer = String(a - b);
      break;
    default:
      question = `${a} * ${b}`;
      answer = String(a * b);
  }
  return [question, answer];
};

export { question, generateRound };
