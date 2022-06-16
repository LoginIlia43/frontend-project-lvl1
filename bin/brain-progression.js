#!/usr/bin/env node
import { question, generateRound } from '../src/games/brain-progression-game.js';
import gameEngine from '../src/index.js';

gameEngine(question, generateRound);
