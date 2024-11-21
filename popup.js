document.getElementById("detectStack").addEventListener("click", () => {
    // Get the currently active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0) {
        console.error("No active tab found.");
        return;
      }
  
      const activeTab = tabs[0]; // Define activeTab within this scope
      chrome.runtime.sendMessage(
        {
          action: "detectStack",
          url: activeTab.url,
          apiKey: "wxthr9wycgbcy11lofpgy3rtifsh07ancy1w3fnkq2gw88vvgyyszbmuxt2dp90gybbmyl" 
        },
        (response) => {
          const techList = document.getElementById("techList");
          techList.innerHTML = "";
  
          if (response.success) {
            const result = response.data;
            const listItem = document.createElement("li");
            listItem.textContent = `CMS: ${result.name} (Confidence: ${result.confidence}%)`;
            techList.appendChild(listItem);
          } else {
            techList.innerHTML = `<li>Error: ${response.error}</li>`;
          }
        }
      );
    });
  });
  