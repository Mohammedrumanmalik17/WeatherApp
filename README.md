# Weather App

## Overview
This Weather App provides real-time weather updates for any city using the OpenWeatherMap API. It displays temperature, humidity, wind speed, and sunrise/sunset times in a user-friendly interface built with **HTML, CSS, Bootstrap, and JavaScript**.

## Features
- Search for weather details by city name
- Displays:
  - Current temperature, min/max temperature
  - Humidity and wind details
  - Sunrise and sunset timings
- Soothing background sound feature
- Uses **CORS Anywhere** to handle CORS issues while fetching API data

## Technologies Used
- **Frontend:** HTML, CSS, Bootstrap, JavaScript
- **API:** OpenWeatherMap API
- **CORS Handling:** CORS Anywhere Proxy

## Setup Instructions
### 1. Clone the Repository
```sh
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2. Install Dependencies
- If running a local proxy server for CORS handling, install **CORS Anywhere**:
```sh
npm install cors-anywhere
```

### 3. Start CORS Anywhere (If Needed)
```sh
npx cors-anywhere --port 8080
```

### 4. Update API Key
- Get an API key from [OpenWeatherMap](https://openweathermap.org/api)
- Replace the `apiKey` variable in `script.js`:
```js
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
const proxy = "http://localhost:8080/"; // CORS Anywhere Proxy
```

### 5. Run the App
Simply open `index.html` in a browser:
```sh
open index.html
```

## Deployment
To deploy on **GitHub Pages**:
1. Push code to a GitHub repository.
2. In the repository settings, enable GitHub Pages.
3. Use the GitHub Pages URL to access your app.

## API Security
To protect your API key:
- Restrict usage in OpenWeatherMap settings (domain-based restrictions).
- Use a backend proxy (e.g., FastAPI, Express.js) to fetch data securely.

## License
This project is licensed under the MIT License. Feel free to contribute!

## Author
**Your Name** - [GitHub Profile](https://github.com/mohammedrumanmalik17)

