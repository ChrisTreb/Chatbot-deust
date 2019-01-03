window.getChuck = function() {
    
    var url = "https://api.chucknorris.io/jokes/random";
    fetch(url).then(handleResponse);
  
    function handleJson(data) {
  
      console.log(data);

      var text = data.value;

      window.createMessage('me', text);

      window.scrollToBottom();
    }
    
    function handleResponse(response) {
      response.json().then(handleJson);
    }
  }