const lat = 49.3580;
const lon = 6.1655;
const apiKey = '812f27a183a14d0a2752278634e7def5'; 
 
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
 
 fetch(apiUrl)
   .then(response => response.json())
   .then(data => {
     currentWeather(data);
   })
   .catch(error => {
     console.log('Error:', error);
   });

  function currentWeather(data){
    let townNameContent = document.querySelector("#town-name");
    townNameContent.innerText = data.name;

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