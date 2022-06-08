#!/usr/bin/env node
import lodash from 'lodash';
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = userName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => {
  let countAnswers = 0;

  for (let i = 0; i < 3; i += 1) {
    const randNumb = lodash.random(0, 100);
    const playerAnswer = readlineSync.question(`Question: ${randNumb}\nYour answer: `);
    const correctAnswer = isEven(randNumb);

    if (playerAnswer !== correctAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    } else {
      console.log('Correct!');
      countAnswers += 1;
    }
  }
  if (countAnswers === 3) {
    console.log('Congratulations!');
  }
};

evenGame();
