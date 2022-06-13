import readlineSync from 'readline-sync';

const gameFunc = (helloFn, questionFn, gameFn) => {
  const name = helloFn(); // Запуск приветствия и присвоение имени

  questionFn(); // Запуск вопроса игры

  let roundCounter = 0;
  for (let i = 0; i < 3; i += 1) { // Запуск игр и счетчика раундов
    const resultArray = (gameFn());
    const correctAnswer = resultArray[1];
    console.log(`Question: ${resultArray[0]}`);
    const userAnswer = readlineSync.question('Answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      roundCounter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (roundCounter === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default gameFunc;
