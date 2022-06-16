#!/usr/bin/env node
import helloFn from '../src/hello.js';
import { question, generateRound } from '../src/games/brain-even-game.js';
import gameFunc from '../src/index.js';

gameFunc(helloFn, question, generateRound);
