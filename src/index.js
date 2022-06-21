import readlineSync from 'readline-sync';

const roundsCount = 3;

const gameEngine = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`); // Запуск приветствия и присвоение имени
  console.log(description); // Запуск вопроса игры

  for (let i = 0; i < roundsCount; i += 1) { // Запуск раундов
    const result = (game());
    const correctAnswer = result[1];
    console.log(`Question: ${result[0]}`);
    const userAnswer = readlineSync.question('Answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
