let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

//Enter city

/*let city = prompt("Enter a city?");
city = city.toLowerCase();

if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  alert(
    `It is currently ${Math.round(temperature)}°C (${Math.round(
      (temperature * 9) / 5 + 32
    )}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}*/

//CurrentTime
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();

if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `${day} ${hours}:${minutes}`;

function cit(event) {
  event.preventDefault();
  let header = document.querySelector("h1");
  let cityInput = document.querySelector("#ent-city");
  header.innerHTML = cityInput.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", cit);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#te");
  temperatureElement.innerHTML = 81;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#te");
  temperatureElement.innerHTML = 27;
}

let fahrenheitLink = document.querySelector("#fa");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#ce");
celsiusLink.addEventListener("click", convertToCelsius);

function displayWeatherCondition(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#te").innerHTML = Math.round(response.data.main.temp);
}

function searchCity(city) {
  let apiKey = "01c5d92bf0571e2225681c60258e03c4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#ent-city").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
