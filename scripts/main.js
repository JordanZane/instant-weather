const lat = 49.3580;
const lon = 6.1655;
const apiKey = '812f27a183a14d0a2752278634e7def5'; 

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {

    console.log(data);

    currentWeather(data);

  })
  .catch(error => {
    console.log('Error:', error);
  });

 
function currentWeather(data){
    let townNameContent = document.querySelector("#town-name");
    townNameContent.innerText = data.name;

    let cloudsContainer = document.querySelector("#clouds-container");
    cloudsContainer.innerText = data.weather[0].description;

    let tempatureContent = document.querySelector("#temperature-container");
    temperature = (data.main.temp - 273.15).toFixed(1);
    tempatureContent.innerText = temperature;
    console.log(typeof temperature);

    let infosContainer = document.querySelector("#infos-container");


}

