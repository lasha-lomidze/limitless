
export const sleep = async (ms) => {
    const start = performance.now();
    let now = start;

    while (now - start < ms) {
        await new Promise(requestAnimationFrame);
        now = performance.now();
    }
};

export const setAccurateInterval = (callback, interval) => {
    let start = performance.now();
    let expected = start + interval;

    let stopped = false;

    const tick = () => {
        if (stopped) return;

        const now = performance.now();
        if (now >= expected) {
            callback();
            expected += interval;
        }

        requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);

    return {
        clear: () => { stopped = true; }
    };
};

export const startCountdown = (htmlEl, ms, onEnd) => {
    let remaining = ms;

    const formatTime = t => {
        const totalSec = Math.ceil(t / 1000);
        const minutes = Math.floor(totalSec / 60);
        const seconds = totalSec % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    htmlEl.textContent = formatTime(remaining);

    const timer = setAccurateInterval(() => {
        remaining -= 100;
        if (remaining <= 0) {
            htmlEl.textContent = "0:00";
            timer.clear();
            if (onEnd) onEnd();
        } else {
            htmlEl.textContent = formatTime(remaining);
        }
    }, 100);

    return timer;
};

export const random = (start, end, integer = true) => {
    const val = Math.random() * (end - start) + start;
    return integer ? Math.floor(val) : val;
}
export const arrRandom = (arr) => {
    const index = random(0, arr.length);
    return { el: arr[index], index };
}

export const readySetGo = async (htmlEl, ms = 500) => {
    htmlEl.textContent = "Ready?";
    await sleep(ms);
    htmlEl.textContent = "Set...";
    await sleep(ms);
    htmlEl.textContent = "GO!";
    await sleep(ms);
}


// export const accurateSetTimeout = async (ms) => {
//     const start = performance.now();
//     let now = start;

//     while (now - start < ms) {
//         await new Promise(requestAnimationFrame);
//         now = performance.now();
//     }
// };