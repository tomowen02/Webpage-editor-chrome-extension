let mode = "none";
chrome.storage.local.set({mode: mode });

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // If the message is to toggle the contentEditable attribute
  if (request.type === "edit") {
    if (mode === "edit") {
      mode = "none";
    } else {
      mode = "edit";
    }
  } else if (request.type === "delete") {
    if (mode === "delete") {
      mode = "none";
    } else {
      mode = "delete";
    }
  }
  chrome.storage.local.set({ mode: mode });
});