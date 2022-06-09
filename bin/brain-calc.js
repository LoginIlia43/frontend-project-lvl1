#!/usr/bin/env node
import lodash from 'lodash';
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = userName();
console.log('What is the result of the expression?');

const calcRandomExpression = () => {
  const a = lodash.random(0, 5);
  const b = lodash.random(0, 5);
  const operatorIndex = lodash.random(1, 3);
  let strExpression;

  switch (operatorIndex) {
    case 1:
      strExpression = `${a}+${b}`;
      return [strExpression, a + b];
    case 2:
      strExpression = `${a}-${b}`;
      return [strExpression, a - b];
    case 3:
      strExpression = `${a}*${b}`;
      return [strExpression, a * b];
  }
  
}

const calcGame = () => {
  let countAnswers = 0;

  for (let i = 0; i < 3; i += 1) {
    const resultArray = calcRandomExpression();
    const correctAnswer = String(resultArray[1]);
    
    const playerAnswer = readlineSync.question(`Question: ${resultArray[0]}\nYour answer: `);
    if (playerAnswer !== correctAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
    countAnswers += 1;
    console.log('Correct!');
  }
  if (countAnswers === 3) {
    console.log('Congratulations!');
  }
}

calcGame();
