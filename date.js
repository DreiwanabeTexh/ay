const yesButton = document.getElementById('yesbutton');
const noButton = document.getElementById('nobutton');
let clickCount = 0;

const texts = [
    "Are you sure????",
    "Pleaseee???",
    "Think againnnn",
    "I'm asking you againnn",
    "Nu uhhh",
    "I said nu uuhhh HAHAHAHAHAHHAHA"
];

noButton.addEventListener('click', () => {
    if (clickCount < texts.length) {
        noButton.textContent = texts[clickCount];
        clickCount++;
    } 
    
    if (clickCount === texts.length) {
        noButton.remove();
        yesButton.textContent = "Yes. I dooo";
    } else {
        const currentSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        const newSize = parseFloat(currentSize) * 1.5;
        yesButton.style.fontSize = newSize + 'px';
    }
});

yesButton.addEventListener('click', () => {
    yesButton.innerHTML = "YEHEYYYY";
    noButton.remove();
    yesButton.style.fontSize = "3em";
});
