async function fetchWeather() {
    const API_KEY = 'fcf80a0ab894ebb47b52604666b88fbf';
    const city = 'Hanoi';
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) throw new Error('Weather data not available');
        const data = await response.json();
        
        document.querySelector('.weather-temp').textContent = `${Math.round(data.main.temp)}°C`;
        document.querySelector('.weather-desc').textContent = data.weather[0].description;
        document.querySelector('.weather-icon img').src = 
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.querySelector('.weather-details').innerHTML = `
            <span>Humidity: ${data.main.humidity}%</span>
            <span>Wind: ${Math.round(data.wind.speed * 3.6)} km/h</span>
        `;
    } catch (error) {
        console.error('Error fetching weather:', error);
        document.querySelector('.weather-desc').textContent = 'Weather data unavailable';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    setInterval(fetchWeather, 30 * 60 * 1000);
});
