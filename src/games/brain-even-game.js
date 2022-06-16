import getRandom from '../random.js';

const question = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateRound = () => {
  const quest = getRandom(0, 100);
  const answer = isEven(quest);
  return [quest, answer];
};

export { question, generateRound };
