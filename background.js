chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.action === "detectStack") {
      const apiUrl = `https://whatcms.org/APIEndpoint?key=${message.apiKey}&url=${encodeURIComponent(message.url)}`;
      
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.result.code === 200) {
          sendResponse({ success: true, data: data.result });
        } else {
          sendResponse({ success: false, error: data.result.msg });
        }
      } catch (error) {
        sendResponse({ success: false, error: error.message });
      }
    }
    return true;
  });
  