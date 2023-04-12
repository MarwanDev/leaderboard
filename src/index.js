import './styles/main.scss';
import { leaderboard } from './modules/leaderboard.js';

const scoresList = document.getElementById('scoresList');
const leaderboardDisplay = (name, score) => `<div class="leaderboard-container">${name}: ${score}</div>`;

leaderboard.forEach((leader) => {
  const htmlToAdd = leaderboardDisplay(leader.name, leader.score);
  scoresList.insertAdjacentHTML('afterbegin', htmlToAdd);
});