chrome.runtime.sendMessage(
    { action: "detectStack", url: window.location.href, apiKey: "wxthr9wycgbcy11lofpgy3rtifsh07ancy1w3fnkq2gw88vvgyyszbmuxt2dp90gybbmyl" },
    (response) => {
      if (response.success) {
        console.log("Detected Tech Stack:", response.data);
      } else {
        console.error("Error detecting stack:", response.error);
      }
    }
  );
  