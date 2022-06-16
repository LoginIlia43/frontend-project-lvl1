import lodash from 'lodash';
import randomNumb from '../random.js';

const questionFn = () => {
  console.log('What is the result of the expression?');
};

const generateRound = () => {
  const a = randomNumb();
  const b = randomNumb();
  const operatorIndex = lodash.random(1, 3);
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

export { questionFn, generateRound };
