// Set the launch date (October 31st)
const launchDate = new Date('2023-10-31T00:00:00Z').getTime();

// Update the countdown every second
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = launchDate - now;

    if (timeRemaining <= 0) {
        clearInterval(countdown);
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
}, 1000);
