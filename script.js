document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "88e03081dda30cb855fbfb0482c4bc2f";

  document.getElementById("getWeatherBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if(city) {
      getWeather(city);
    }
  });

  function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      if(data.cod == 200) {
        const weatherInfo = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp} °F</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          `;
        document.getElementById("weatherResult").innerHTML = weatherInfo;
      } else {
          document.getElementById("weatherResult").innerHTML = `<p>City not found</p>`;
      }

    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p>Error fetching data</p>`;
      console.error(error);
    });
  }
});
