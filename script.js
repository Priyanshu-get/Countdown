document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    startCountdown(startDate, endDate);
});

const quotes = [
    '"The future depends on what you do today." - Mahatma Gandhi',
    '"The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt',
    '"Do not wait to strike till the iron is hot; but make it hot by striking." - William Butler Yeats',
    '"The best way to predict the future is to create it." - Peter Drucker',
    '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
    '"Act as if what you do makes a difference. It does." - William James',
    '"Never bend your head. Always hold it high. Look the world straight in the eye." - Helen Keller'
];

function startCountdown(startDate, endDate) {
    const countdown = document.getElementById('countdown');
    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date();
        const remainingTime = endDate - now;

        if (remainingTime <= 0) {
            clearInterval(interval);
            countdown.innerHTML = '<div><span>0</span>Days</div><div><span>0</span>Hours</div><div><span>0</span>Minutes</div><div><span>0</span>Seconds</div>';
            return;
        }

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        daysSpan.textContent = days;
        hoursSpan.textContent = hours;
        minutesSpan.textContent = minutes;
        secondsSpan.textContent = seconds;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display immediately
    changeQuoteDaily();
}

function changeQuoteDaily() {
    const quoteElement = document.getElementById('quote');
    const today = new Date().getDate();
    const quoteIndex = today % quotes.length;
    quoteElement.textContent = quotes[quoteIndex];
    quoteElement.style.opacity = 0;
    setTimeout(() => {
        quoteElement.style.animation = 'none';
        quoteElement.offsetHeight; // Trigger reflow
        quoteElement.style.animation = null;
    }, 0);
}
