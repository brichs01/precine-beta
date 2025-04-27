// Handle tab switching
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}

// Parse the script into breakdown, characters, and assets
function parseScript() {
    const script = document.getElementById('scriptInput').value;
    const lines = script.split('\n');
    const breakdown = [];
    const characters = new Set();
    const assets = new Set();

    lines.forEach(line => {
        if (line.trim() === '') return;

        if (line === line.toUpperCase() && line.length < 40) {
            characters.add(line.trim());
        }

        if (line.includes('EXT.') || line.includes('INT.')) {
            breakdown.push(line.trim());
        }

        if (line.toLowerCase().includes('car') || line.toLowerCase().includes('gun') || line.toLowerCase().includes('house')) {
            assets.add(line.trim());
        }
    });

    document.getElementById('breakdownOutput').innerHTML = breakdown.map(scene => `<div>${scene}</div>`).join('');
    document.getElementById('characterList').innerHTML = Array.from(characters).map(c => `<div>${c}</div>`).join('');
    document.getElementById('assetList').innerHTML = Array.from(assets).map(a => `<div>${a}</div>`).join('');

    localStorage.setItem('script', script);
}

// Shot List functions
function addShot() {
    const container = document.getElementById('shotList');
    const shotItem = document.createElement('div');
    shotItem.innerHTML = `
        <input placeholder="Shot Type (Wide, Close-Up, etc)">
        <input placeholder="Camera Angle">
        <input placeholder="Lens (24mm, 50mm)">
        <input placeholder="Lighting">
        <input placeholder="Mood">
    `;
    container.appendChild(shotItem);
}

// Storyboard functions
function addStoryboardFrame() {
    const container = document.getElementById('storyboardList');
    const frame = document.createElement('div');
    frame.innerHTML = `
        <input placeholder="Scene / Caption">
    `;
    container.appendChild(frame);
}

// Feedback form handler
function submitFeedback(event) {
    event.preventDefault();
    const feedback = document.getElementById('feedback').value;
    alert('Thanks for your feedback: ' + feedback);
    document.getElementById('feedback').value = '';
}

// Load saved script if available
window.onload = function() {
    const savedScript = localStorage.getItem('script');
    if (savedScript) {
        document.getElementById('scriptInput').value = savedScript;
        parseScript();
    }
};
