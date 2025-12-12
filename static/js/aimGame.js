
import { readySetGo } from "./utils.js";

const aimTrainerArea = document.getElementById('aim-area');

const startGame = (container) => {
    const aim = document.createElement('div');
    aim.classList.add('aim-target');
    aim.style.position = 'absolute';
    aim.style.width = `${50}px`;
    aim.style.height = `${50}px`;
    aim.style.borderRadius = '50%';
    aim.style.backgroundColor = 'yellow';
    aim.style.left = `${Math.random() * (container.clientWidth - 50)}px`;
    aim.style.top = `${Math.random() * (container.clientHeight - 50 / 2)}px`;
    aim.style.cursor = 'pointer';
    aim.addEventListener('click', () => {
        aim.remove();
        startGame(container);
    });
    container.appendChild(aim);
}

window.addEventListener('load', async () => {
    await readySetGo(aimTrainerArea);
    startGame(aimTrainerArea);
});