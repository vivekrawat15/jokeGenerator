chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getJoke') {
      fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
        .then(response => response.json())
        .then(data => {
          if (data.type === 'twopart') {
            sendResponse({ joke: `${data.setup}\n${data.delivery}` });
          } else {
            sendResponse({ joke: data.joke });
          }
        })
        .catch(error => sendResponse({ error: error.message }));
      return true;
    }
  });
  