#!/usr/bin/env node
import helloFn from '../src/hello.js';
import { questionFn, generateRound } from '../games/brain-progression-game.js';
import gameFunc from '../src/index.js';

gameFunc(helloFn, questionFn, generateRound);
