const lat = 49.3580;
const lon = 6.1655;
const apiKey = '812f27a183a14d0a2752278634e7def5'; 

// Construct the API URL
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

// Make the API call
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process the weather data
    console.log(data);
    // You can access specific weather information from the 'data' object
  })
  .catch(error => {
    console.log('Error:', error);
  });

  

