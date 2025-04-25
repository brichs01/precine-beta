
function parseScript() {
    const script = document.getElementById('scriptInput').value;
    const scenes = script.split(/INT\.|EXT\./).filter(Boolean);
    const output = scenes.map((scene, i) =>
        `<div><strong>Scene ${i + 1}</strong><br>INT./EXT. ${scene.trim()}</div>`
    ).join("<hr>");
    document.getElementById('sceneOutput').innerHTML = output;
}

function sendFeedback() {
    window.open("https://forms.gle/YOUR_GOOGLE_FORM_LINK", "_blank");
}
