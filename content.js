let elements = []

async function handleElementClick(event) {
    const { mode } = await chrome.storage.local.get(["mode"]);

    event.preventDefault();
    event.stopPropagation();

    const element = event.target;

    // Make the element editable
    if (mode === "edit") {
        element.contentEditable = true;
        element.focus();
        elements.push(element);
    } else if (mode === "delete") {
        element.remove();
    } else {
        elements.forEach(element => {
            element.contentEditable = false;
        });
    }
}
document.addEventListener('click', handleElementClick, true);

async function handleMouseoverEvent(event) {
    const { mode } = await chrome.storage.local.get(["mode"]);

    event.preventDefault();
    event.stopPropagation();

    const element = event.target;

    // Make the element editable
    if (mode !== "none") {
        element.style.border = "1px solid #59bfff";
    }
}
document.addEventListener('mouseover', handleMouseoverEvent, true);

async function handleMouseoutEvent(event) {
    const { mode } = await chrome.storage.local.get(["mode"]);
    if (mode !== "none") {
        const element = event.target;
        element.style.border = "";
    }
}
document.addEventListener('mouseout', handleMouseoutEvent, true);