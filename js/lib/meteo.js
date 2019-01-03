window.getMeteo = function(city) {
  var url = "https://api.openweathermap.org/data/2.5/weather?appid=d3fbc543ce07d0376be06fccc25c7235&q=" + city;
  fetch(url).then(handleResponse);

  function handleJson(data) {

    if(data.cod === 200){

      console.log(data);
      
      var ce = data.main.temp - 273.15;
      var windSpeed = data.wind.speed;
    
      var text = 'Il fait ' + ce.toFixed(2) + ' degrés celsius, le vent souffle à ' + windSpeed + 'km/h'; 
    
      window.createMessage('me', text);

      window.scrollToBottom();

    } else {
      window.createMessage('me', 'Je ne trouve pas les données météo, désolé.');
      window.scrollToBottom();
    }
  }
  
  function handleResponse(response) {
    response.json().then(handleJson);
  }
}
