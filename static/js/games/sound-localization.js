import { readySetGo } from '../utils.js';

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();
const panner = audioCtx.createStereoPanner();

oscillator.connect(gainNode);
gainNode.connect(panner);
panner.connect(audioCtx.destination);

oscillator.type = 'sine';
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
oscillator.start();
audioCtx.suspend();

const totalStages = 5;
let stage = 0;
let scores = [];
let gameStarted = false;
let stageActive = false;
let dot = { x: 0, y: 0 };

const roundEl = document.getElementById('round-info');
const readyEl = document.getElementById('ready-set-go');

const dotEl = document.createElement('div');
dotEl.style.width = '10px';
dotEl.style.height = '10px';
dotEl.style.backgroundColor = 'yellow';
dotEl.style.borderRadius = '50%';
dotEl.style.position = 'absolute';
dotEl.style.display = 'none';
document.body.appendChild(dotEl);

function spawnDot() {
    dot.x = Math.random() * window.innerWidth;
    dot.y = Math.random() * window.innerHeight;
    dotEl.style.left = `${dot.x - 5}px`;
    dotEl.style.top = `${dot.y - 5}px`;
    dotEl.style.display = 'none';
}

function getDistance(x, y) {
    const dx = x - dot.x;
    const dy = y - dot.y;
    const maxDist = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
    return Math.min(1, Math.sqrt(dx * dx + dy * dy) / maxDist);
}

function setAudio(distance) {
    if (!stageActive) return;

    switch (stage) {
        case 0: oscillator.type = 'sine'; gainNode.gain.value = 0.05 * (1 - distance); break;
        case 1: oscillator.type = 'triangle'; oscillator.frequency.value = 200 + (1 - distance) * 800; gainNode.gain.value = 0.05; break;
        case 2: oscillator.type = 'square'; gainNode.gain.value = 0.05 * (1 - distance); panner.pan.value = ((dot.x / window.innerWidth) - 0.5) * 2; break;
        case 3: oscillator.type = 'sawtooth'; oscillator.frequency.value = 400 + Math.sin(Date.now() / 200) * 300; gainNode.gain.value = 0.05 * (1 - distance); break;
        case 4: oscillator.type = 'sine'; oscillator.frequency.value = 440 + Math.sin(Date.now() / 100) * 20; gainNode.gain.value = 0.05 * (1 - distance); break;
    }
}

function updateUI() {
    const avgScore = scores.length ? (scores.reduce((a, b) => a + b, 0) / scores.length * 100).toFixed(1) : 0;
    roundEl.innerHTML = `Round: ${stage + 1} / ${totalStages}<br>Score: ${avgScore}`;
}

async function startStage() {
    stageActive = false;
    spawnDot();

    gainNode.gain.value = 0;
    await readySetGo(readyEl, 1000);

    stageActive = true;
    updateUI();
}

async function confirmClick(x, y) {
    if (!stageActive) return;
    stageActive = false;

    const distance = getDistance(x, y);
    scores.push(1 - distance);

    dotEl.style.display = 'block';

    gainNode.gain.value = 0;

    updateUI();

    await new Promise(r => setTimeout(r, 2000));

    stage++;
    if (stage >= totalStages) {
        endGame();
    } else {
        startStage();
    }
}

function endGame() {
    const avg = (scores.reduce((a, b) => a + b, 0) / scores.length * 100).toFixed(1);
    readyEl.textContent = `Game Over! Average Score: ${avg}`;
    gainNode.gain.value = 0;
    oscillator.stop();
    dotEl.style.display = 'none';
    stageActive = false;
}

document.addEventListener('mousemove', (e) => {
    if (!gameStarted || !stageActive) return;
    const distance = getDistance(e.clientX, e.clientY);
    setAudio(distance);
});

document.addEventListener('click', async (e) => {
    if (!gameStarted) {
        await audioCtx.resume();
        gameStarted = true;
        startStage();
    } else {
        confirmClick(e.clientX, e.clientY);
    }
});
