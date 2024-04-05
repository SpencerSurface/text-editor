const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// DONE: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Save the event to prompt the user later
    window.deferredPrompt = event;
});

// DONE: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Get the event from earlier and prompt the user
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();

    // Overwrite the event so the user is not prompted again
    window.deferredPrompt = null;
});

// DONE: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log("Successfully installed!");
    // Make sure the prompt is overwritten
    window.deferredPrompt = null;
});
