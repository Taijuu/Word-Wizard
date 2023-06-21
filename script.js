function randomLetter() {
  const file = './words/words5Letters.txt';

  fetch(file)
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');
      const words = lines.filter(line => line.trim() !== '');

      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex];
      console.log(randomWord)
      displayResult(randomWord);
    })
    .catch(error => {
      console.log('An error has occurred:', error);
      displayResult('Error getting random word.');
    });
}

function displayResult(word) {
  const result = document.querySelector('.result');
  result.innerHTML = `Random word: ${word}`;
}

randomLetter()