import 'regenerator-runtime/runtime';

const addScore = () => {
  const scoreForm = document.getElementById('scoreForm');
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MLSvdvsD1/scores/';
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

const displayScores = () => {
  
};

export { addScore, displayScores };