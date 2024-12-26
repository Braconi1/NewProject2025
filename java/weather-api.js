async function WeatherApi() {
    const city = document.getElementById("city").value; 
    const Key = "e669fb3ce63a98d8815b07401f2e72d1";  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric`;

    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            const weatherDiv = document.getElementById("weatherResult");

            weatherDiv.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            throw new Error("API Fail");
        }

    } catch (error) {
        const weatherDiv = document.getElementById("weatherResult");
        weatherDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
}