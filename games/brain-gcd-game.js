#!/usr/bin/env node
import randomNumb from '../src/random.js';

const questionFn = () => {
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
  const num1 = randomNumb();
  const num2 = randomNumb();
  const question = [num1, num2].join(' ');
  const dividersNum1 = dividers(num1);
  const dividersNum2 = dividers(num2);
  let answer;

  if (num1 === 0 && num2 === 0) {
    answer = '1';
  } else if (num1 === 0 || num2 === 0) {
    answer = String(num1 + num2);
  } else {
    const answerArray = [];
    for (const elem of dividersNum1) {
      if (dividersNum2.includes(elem)) {
        answerArray.push(elem);
      }
    }
    answer = String(answerArray[answerArray.length - 1]);
  }
  return [question, answer];
};

export { questionFn, generateRound };
