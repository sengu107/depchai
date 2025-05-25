function createSenkoFall() {
    const senko = document.createElement('div');
    senko.classList.add('senko-fall');

    senko.style.left = Math.random() * 100 + 'vw';
    senko.style.animationDuration = Math.random() * 3 + 2 + 's';
    senko.style.opacity = Math.random();

    document.body.appendChild(senko);

    setTimeout(() => {
        senko.remove();
    }, 5000);
}

setInterval(createSenkoFall, 300);

async function updateDate() {
    const now = new Date();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    document.getElementById('gregorian-date').textContent = `${day}, ${month} ${date}, ${year}`;
}

setInterval(updateDate, 1000);
updateDate();

function updatePixelClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updatePixelClock, 1000);
updatePixelClock();