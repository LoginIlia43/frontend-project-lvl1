#!/usr/bin/env node
import { gameDescription, generateRound } from '../src/games/brain-gcd-game.js';
import gameEngine from '../src/index.js';

gameEngine(gameDescription, generateRound);
