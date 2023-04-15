import './styles/main.scss';
import { addScore, displayScores } from './modules/leaderboard';

const scoresList = document.getElementById('scoresList');
const refreshBtn = document.getElementById('refreshBtn');

window.addEventListener('load', () => {
  refreshBtn.click();
});

refreshBtn.addEventListener('click', () => {
  scoresList.innerHTML = '';
  displayScores();
});
addScore();
displayScores();