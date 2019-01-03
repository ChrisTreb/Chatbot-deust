window.getChuck = function() {
    
    var url = "https://api.chucknorris.io/jokes/random";
    fetch(url).then(handleResponse);
  
    function handleJson(data) {

      if(data.category == null){
  
        console.log(data);

        var text = data.value;

        window.createMessage('me', text);

        window.scrollToBottom();
      } else {

        window.createMessage('me', 'Désolé, je n\'ai pas trouvé Chuck, mais lui va sûrement vous trouver.');
        window.scrollToBottom();
        
      }
    }
    
    function handleResponse(response) {
      response.json().then(handleJson);
    }
  }