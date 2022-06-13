#!/usr/bin/env node
import randomNumb from '../src/random.js';

const questionFn = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateRound = () => {
  const question = randomNumb();
  const answer = isEven(question);
  return [question, answer];
};

export { questionFn, generateRound };
