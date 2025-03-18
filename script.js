
const proxy = "http://localhost:8080/"; 
const apiKey = "YOUR_OPENWEATHER_APIKEY"; 

const cityNameEl = document.getElementById("cityName");
const tempEl = document.getElementById("temp");
const temp2El = document.getElementById("temp2");
const feelsLikeEl = document.getElementById("feels_like");
const humidityEl = document.getElementById("humidity");
const humidity2El = document.getElementById("humidity2");
const maxTempEl = document.getElementById("max_temp");
const minTempEl = document.getElementById("min_temp");
const windDegreesEl = document.getElementById("wind_degrees");
const windSpeedEl = document.getElementById("wind_speed");
const windSpeed2El = document.getElementById("wind_speed2");
const sunriseEl = document.getElementById("sunrise");
const sunsetEl = document.getElementById("sunset");

const getWeather = (city) => {
    cityNameEl.innerHTML = city;

    fetch(`${proxy}https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            if (data.main && data.wind && data.sys) {
                tempEl.innerHTML = `${data.main.temp}°C`;
                temp2El.innerHTML = `${data.main.temp}°C`;
                feelsLikeEl.innerHTML = `${data.main.feels_like}°C`;
                humidityEl.innerHTML = `${data.main.humidity}%`;
                humidity2El.innerHTML = `${data.main.humidity}%`;
                maxTempEl.innerHTML = `${data.main.temp_max}°C`;
                minTempEl.innerHTML = `${data.main.temp_min}°C`;
                windDegreesEl.innerHTML = `${data.wind.deg}°`;
                windSpeedEl.innerHTML = `${data.wind.speed} m/s`;
                windSpeed2El.innerHTML = `${data.wind.speed} m/s`;

                sunriseEl.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
                sunsetEl.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();
            } else {
                console.error("Missing data fields in API response:", data);
            }
        })
        .catch(err => console.error("Error fetching weather data:", err));
};

// Event listener for the search button
document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    const cityInput = document.getElementById("city").value;
    if (cityInput.trim() !== "") {
        getWeather(cityInput);
    } else {
        alert("Please enter a city name.");
    }
});

// Fetch default city weather
getWeather("Delhi");
