import './styles/main.scss';
import { addScore, displayScores } from './modules/leaderboard';

const scoresList = document.getElementById('scoresList');
const refreshBtn = document.getElementById('refreshBtn');
refreshBtn.addEventListener('click', () => {
  scoresList.innerHTML = '';
  displayScores();
});
addScore();
displayScores();