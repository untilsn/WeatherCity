const API_KEY = "d03f035596add8430fa26364464ec805";
const searchValue = document.querySelector(".search");
const locationWeather = document.querySelector(".locate");
const degreeWeather = document.querySelector(".degree");
const statusWeather = document.querySelector(".status");
const wind = document.querySelector(".wind-value");
const humid = document.querySelector(".humid-value");
const weatherImg = document.querySelector(".img img");

searchValue.addEventListener("change", handleWeather);

async function handleWeather(e) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value.trim()}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    console.log(data);
    renderDataWeather(data);
  } catch (error) {
    locationWeather.innerHTML = "unknow";
  }
}

function renderDataWeather(data) {
  locationWeather.innerHTML = data.name;
  statusWeather.innerHTML = data.weather[0].description;
  degreeWeather.innerHTML = Math.floor(data.main.temp) + "°C";
  wind.innerHTML = data.wind.speed + "km/h";
  humid.innerHTML = data.main.humidity + "%";
  weatherImg.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
}

async function displayWeather() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=-22.8375&lon=-51.9731&appid=${API_KEY}&units=metric`
  );
  const data = await res.json();
  renderDataWeather(data);
}
displayWeather();
