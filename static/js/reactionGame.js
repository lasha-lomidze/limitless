import { random, sleep } from "./utils.js";

const clickMe = document.getElementById('click-me');

let shouldClick = false;
let startTime = 0;

const lost = () => {
    clickMe.textContent = 'Too Early!';
    shouldClick = false;
}

const won = () => {
    if (!startTime) return;

    const endTime = performance.now();
    const reactionTimeMs = Math.round(endTime - startTime);

    clickMe.textContent = `Clicked in ${reactionTimeMs} ms!`;
    shouldClick = false;

    console.log(`User reaction time: ${reactionTimeMs} ms`);
}

document.addEventListener('DOMContentLoaded', async () => {

    clickMe.textContent = 'Wait for Green...';
    clickMe.classList.add('bg-danger');

    const randomMs = random(1000, 7000);
    await sleep(randomMs);

    clickMe.classList.remove('bg-danger');
    clickMe.classList.add('bg-success');
    clickMe.textContent = 'CLICK!!!';

    startTime = performance.now();
    shouldClick = true;
});

clickMe.addEventListener('click', () => {
    if (shouldClick) {
        won();
    } else {
        lost();
    }
});
