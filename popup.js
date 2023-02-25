const toggleEditableButton = document.getElementById("toggleEditableButton");
const toggleDeleteButton = document.getElementById("toggleDeleteButton");

window.addEventListener("load", async function() {
    updateButtons();
});

toggleEditableButton.addEventListener("click", async function() {
    await chrome.runtime.sendMessage({type: "edit"});
    updateButtons();
});

toggleDeleteButton.addEventListener("click", async function() {
    await chrome.runtime.sendMessage({type: "delete"});
    updateButtons();
});

async function updateButtons() {
    const { mode } = await chrome.storage.local.get(["mode"]);
    if (mode === "edit") {
        toggleEditableButton.innerHTML = "Disable editing"
    } else {
        toggleEditableButton.innerHTML = "Enable editing"
    }
    if (mode === "delete") {
        toggleDeleteButton.innerHTML = "Disable deletion"
    } else {
        toggleDeleteButton.innerHTML = "Enable deletion"
    }
}