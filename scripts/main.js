document.addEventListener("DOMContentLoaded", function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}')
  .then(response => response.json())
  .then(datas => {
    generateProjects(datas);
  })
  .catch(error => {
    console.error('Error fetching projects:', error);
  });
})