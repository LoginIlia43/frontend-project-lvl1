#!/usr/bin/env node
import randomNumb from '../src/random.js';

const questionFn = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const isPrime = (number) => {
  let dividersCounter = 0;
  for (let i = 1; i < number; i += 1) {
    if (number % i === 0) {
      dividersCounter += 1;
    }
  }
  if (dividersCounter < 2) {
    return 'yes';
  }
  return 'no';
};

const generateRound = () => {
  const question = randomNumb();
  const answer = isPrime(question);
  return [question, answer];
};

export { questionFn, generateRound };
