
// 1. Define the URL with your filter
// const url = "https://api.quotable.io/random?minLength=100";

// 2. The function to get the data
async function fetchZenQuote() {
    try {
        const response = await fetch("https://zenquotes.io/api/random");
        const data = await response.json();
        return data[0].q; // 'q' is the quote text
    } catch (e) {
        return "Backup: Knowledge is power, but only if you type it fast.";
    }
}

fetchZenQuote().then(quote => {
    const quoteDisplayEl = document.getElementById('quote-display');
    const userInputEl = document.getElementById('user-input');
    const scoreDisplayEl = document.getElementById('score-display');
    const timerEl = document.getElementById('typing-speed-timer');

    quoteDisplayEl.textContent = quote;

    console.log("Quote to type:", quote);

    let startTime = null;
    let timerInterval = null;

    userInputEl.addEventListener('input', () => {
        const currentInput = userInputEl.value;

        if (startTime === null) {
            startTime = Date.now();
            timerInterval = setInterval(() => {
                const elapsedMs = Date.now() - startTime;
                timerEl.textContent = `Time: ${(elapsedMs / 1000).toFixed(1)}s`;
            }, 100);
        }

        if (currentInput === quote) {
            const elapsedMs = Date.now() - startTime;
            clearInterval(timerInterval);
            const wordsTyped = quote.split(' ').length;
            const wpm = (wordsTyped / (elapsedMs / 60000)).toFixed(2);
            scoreDisplayEl.textContent = `WPM: ${wpm}`;
            userInputEl.disabled = true;
        }
    });
});

// Utility functions (could be imported from utils.js)
export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));