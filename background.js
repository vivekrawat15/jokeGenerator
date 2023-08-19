chrome.action.onClicked.addListener(tab => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: injectScript
    });
  });
  
  function injectScript() {
    const popupScript = document.createElement('script');
    popupScript.src = chrome.runtime.getURL('popup.js');
    popupScript.onload = function() {
      this.remove();
    };
    (document.head || document.documentElement).appendChild(popupScript);
  }
  