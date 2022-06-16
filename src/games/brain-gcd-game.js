import getRandom from '../random.js';

const question = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const dividers = (number) => {
  const resultArray = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      resultArray.push(i);
    }
  }
  return resultArray;
};

const generateRound = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const quest = [num1, num2].join(' ');
  const dividersNum1 = dividers(num1);
  const dividersNum2 = dividers(num2);
  let answer;

  if (num1 === 0 && num2 === 0) {
    answer = '1';
  } else if (num1 === 0 || num2 === 0) {
    answer = String(num1 + num2);
  } else {
    const answerArray = [];
    for (let i = 0; i < dividersNum1.length; i += 1) {
      const elem = dividersNum1[i];
      if (dividersNum2.includes(elem)) {
        answerArray.push(elem);
      }
    }
    answer = String(answerArray[answerArray.length - 1]);
  }
  return [quest, answer];
};

export { question, generateRound };
