document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateJoke');
    const jokeText = document.getElementById('joke');
  
    generateButton.addEventListener('click', async () => {
      const joke = await fetchJoke();
      jokeText.textContent = joke;
    });
  });
  
  async function fetchJoke() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();
    
    if (data.type === 'twopart') {
      return `${data.setup}\n${data.delivery}`;
    } else {
      return data.joke;
    }
  }
  