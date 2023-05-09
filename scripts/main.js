window.addEventListener('DOMContentLoaded', function(){
    updateWeatherData(49.357571, 6.168425999999999);
})

let townName = 'Thionville';
let townNameSubmit = document.querySelector("#townNameSubmit");

townNameSubmit.addEventListener("click", function(e){
    e.preventDefault();
    let townNameInput = document.querySelector("#townNameInput");
    townName = townNameInput.value;

    const apiKeyGoogle = 'AIzaSyD7o-fRpseiMT6Syp9413GB2IxwfSu-LaA';
    const apiUrlGoogle = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(townName)}&key=${apiKeyGoogle}`;

    fetch(apiUrlGoogle)
    .then(response => response.json())
    .then(dataGoogle => {
        if (dataGoogle.results.length > 0) {
        const location = dataGoogle.results[0].geometry.location;
        const lat = location.lat;
        const lon = location.lng;
        console.log(`Latitude: ${lat}, Longitude: ${lon}`);
        
        // Update the weather data using the retrieved latitude and longitude
        updateWeatherData(lat, lon);
        } else {
        console.log('No results found for the town name.');
        }
    })
    .catch(error => {
        console.log('Error:', error);
    });
});


const apiKey = '812f27a183a14d0a2752278634e7def5'; 

function updateWeatherData(lat, lon) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        currentWeather(data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
}
 

  function currentWeather(data){
    let townNameContent = document.querySelector("#town-name");
    townNameContent.innerText = townName;

    let cloudsContainer = document.querySelector("#clouds-container");
    let cloudsImage = document.createElement("img");
    let cloudsIcon = data.weather[0].icon;
    let cloudsIconUrl = `https://openweathermap.org/img/wn/${cloudsIcon}.png`;
    cloudsContainer.innerText = data.weather[0].description;
    cloudsImage.src = cloudsIconUrl;
    cloudsContainer.appendChild(cloudsImage);

    let tempatureContent = document.querySelector("#temperature-container");
    temperature = (data.main.temp - 273.15).toFixed(1);
    tempatureContent.innerText = temperature + "C°";

    let windContainer = document.querySelector("#wind-content");
    let precipContainer = document.querySelector("#precip-content");
    let pressureContainer = document.querySelector("#pressure-content");

    windContainer.innerText = "Winds : " + data.wind.speed + " m/s";
    precipContainer.innerText = "Precip : " + (data.rain ? data.rain["1h"] : 0) + " mm/h";

    pressureContainer.innerText = "Pressure : " + data.main.pressure;
}

