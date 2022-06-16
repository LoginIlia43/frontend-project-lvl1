import readlineSync from 'readline-sync';

const gameEngine = (question, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`); // Запуск приветствия и присвоение имени

  question(); // Запуск вопроса игры

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) { // Запуск раундов
    const result = (game());
    const correctAnswer = result[1];
    console.log(`Question: ${result[0]}`);
    const userAnswer = readlineSync.question('Answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
