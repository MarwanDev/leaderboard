// eslint-disable-next-line import/no-duplicates
import 'regenerator-runtime/runtime';

const scoresList = document.getElementById('scoresList');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MLSvdvsD12/scores/';
const addScore = () => {
  const scoreForm = document.getElementById('scoreForm');
  scoreForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const playerName = document.getElementById('name-input').value;
    const playerScore = document.getElementById('score-input').value;
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          // eslint-disable-next-line quote-props
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          user: playerName,
          score: playerScore,
        }),
      });
    } catch (error) {
      console.log(error);
    }
    document.getElementById('name-input').value = '';
    document.getElementById('score-input').value = '';
  });
};

const listHtml = (user, score) => `<div class="leaderboard-container">${user}: ${score}</div>`;
const displayScores = async () => {
  try {
    await fetch(url)
      .then((result) => result.json())
      .then((data) => {
        data.result.forEach((player) => {
          const htmlToAdd = listHtml(player.user, player.score);
          scoresList.insertAdjacentHTML('afterbegin', htmlToAdd);
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export { addScore, displayScores };