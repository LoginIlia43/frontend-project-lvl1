import getRandom from '../random.js';

const question = () => {
  console.log('What number is missing in the progression?');
};

const generateRound = () => {
  const startNumber = getRandom(0, 100);
  const progressionStep = getRandom(0, 30);
  const progression = [startNumber];

  // Generate a progression
  let progNumber = startNumber;
  for (let i = 1; i < 10; i += 1) {
    progNumber += progressionStep;
    progression.push(progNumber);
  }

  // Hide the element
  const numHideElem = getRandom(0, 9);
  const hiddenElement = String(progression[numHideElem]);
  progression[numHideElem] = '..';

  return [progression.join(' '), hiddenElement];
};

export { question, generateRound };
