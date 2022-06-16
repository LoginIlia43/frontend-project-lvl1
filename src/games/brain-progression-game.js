#!/usr/bin/env node
import lodash from 'lodash';
import randomNumb from '../random.js';

const questionFn = () => {
  console.log('What number is missing in the progression?');
};

const generateRound = () => {
  const startNumber = randomNumb();
  const progressionStep = randomNumb();
  const progression = [startNumber];

  // Generate a progression
  let progNumber = startNumber;
  for (let i = 1; i < 10; i += 1) {
    progNumber += progressionStep;
    progression.push(progNumber);
  }

  // Hide the element
  const numHideElem = lodash.random(0, 9);
  const hiddenElement = String(progression[numHideElem]);
  progression[numHideElem] = '..';

  return [progression.join(' '), hiddenElement];
};

export { questionFn, generateRound };
