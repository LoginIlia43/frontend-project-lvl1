#!/usr/bin/env node
import { question, generateRound } from '../src/games/brain-calc-game.js';
import gameEngine from '../src/index.js';

gameEngine(question, generateRound);
