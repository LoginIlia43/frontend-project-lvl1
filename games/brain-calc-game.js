import lodash from 'lodash';
import randomNumb from '../src/random.js';

const questionFn = () => {
  console.log('What is the result of the expression?');
};

const generateRound = () => {
  const a = randomNumb();
  const b = randomNumb();
  const operatorIndex = lodash.random(1, 3);
  let question;

  switch (operatorIndex) {
    case 1:
      question = `${a} + ${b}`;
      return [question, String(a + b)];
    case 2:
      question = `${a} - ${b}`;
      return [question, String(a - b)];
    case 3:
      question = `${a} * ${b}`;
      return [question, String(a * b)];
  }
};

export { questionFn, generateRound };

