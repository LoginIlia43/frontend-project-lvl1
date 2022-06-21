import getRandom from '../random.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateRound = () => {
  const question = getRandom(0, 100);
  const answer = isEven(question);
  return [question, answer];
};

export { gameDescription, generateRound };
