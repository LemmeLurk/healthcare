let currentPile = '';
let displayCount = 0;

function getPileBasedOnTime() {
    const currentTime = new Date();
    return (currentTime.getSeconds() % 2 === 0) ? 'A' : 'B';
}

function loadContent(pile) {
    const imageSrc = `./pile${pile}_image${Math.floor(Math.random() * 6)}.jpg`; // replace with logic to randomize image
    document.getElementById('display').src = imageSrc;
    displayCount++;
}

function displayText() {
    const text = `Pile C Text: Example ${Math.random()}`; // Replace this with your text logic
    document.getElementById('textDisplay').innerText = text;
}

document.getElementById('next').addEventListener('click', () => {
    if (displayCount < 2) {
        currentPile = getPileBasedOnTime();
        loadContent(currentPile);
    } else {
        displayText();
        setTimeout(() => {
            displayCount = 0; // Reset on text display
            document.getElementById('textDisplay').innerText = '';
            loadContent(getPileBasedOnTime());
        }, 5000); // Show text for 5 seconds
    }
});

// Initial Load
loadContent(getPileBasedOnTime());
