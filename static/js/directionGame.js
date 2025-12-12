
import { arrRandom, sleep, startCountdown, readySetGo } from "./utils.js";

const scoreDisplayEl = document.getElementById('score-display');
const arrowDisplayEl = document.getElementById('arrow-display');
const timer = document.getElementById('direction-game-timer');
const arrows = ['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp'];

const getArrowDisplay = arrow => {
    switch (arrow) {
        case 'ArrowDown': return "⬇️";
        case 'ArrowUp': return "⬆️";
        case 'ArrowRight': return "➡️";
        case 'ArrowLeft': return "⬅️";
    }
}

const showNewArrow = (htmlEl) => {
    const { el: newArrow } = arrRandom(arrows);
    arrowDisplayEl.textContent = getArrowDisplay(newArrow);
    return newArrow;
}

let curArrow = "";
let score = 0;
let isInputEnabled = false;

window.addEventListener('load', async () => {
    await readySetGo(arrowDisplayEl);
    startCountdown(timer, 30000)
    isInputEnabled = true;
    curArrow = showNewArrow(arrowDisplayEl);
    startCountdown(timer, 30000, () => {
        arrowDisplayEl.textContent = "DONE";
        isInputEnabled = false;
    })
})

document.addEventListener('keydown', async (e) => {
    if (!isInputEnabled) {
        return;
    }
    if (e.key === curArrow) {
        score++;
        scoreDisplayEl.textContent = score;
        curArrow = showNewArrow(arrowDisplayEl);
    } else {
        isInputEnabled = false;
        arrowDisplayEl.textContent = "WRONG !";
        await sleep(500);
        curArrow = showNewArrow(arrowDisplayEl);
        isInputEnabled = true;
    }
});
