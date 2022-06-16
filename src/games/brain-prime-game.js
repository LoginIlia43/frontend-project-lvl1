#!/usr/bin/env node
import getRandom from '../random.js';

const question = () => {
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
  const quest = getRandom(0, 100);
  const answer = isPrime(quest);
  return [quest, answer];
};

export { question, generateRound };
