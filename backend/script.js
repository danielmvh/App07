async function fetchWeather() {
    const city = document.getElementById('city').value;
    const response = await fetch(`/api/weather?city=${city}`);
    const weatherData = await response.json();

    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
        <h2>${weatherData.name}</h2>
        <p>Temperature: ${weatherData.main.temp} °C</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
    `;
}