window.getFilm = function(filmTitle) {
    
    var url = "http://www.omdbapi.com/?s=" + filmTitle + "&apikey=d8e9c003";
    fetch(url).then(handleResponse);
  
    function handleJson(data) {
  
      console.log(data);

      var filmUrl = data.Search[0].Poster;
      var img = '<img style="height:300px" src="' + filmUrl + '" />';

      window.createMessage('me', img);

      window.scrollToBottom();
    
    }
    
    function handleResponse(response) {
      response.json().then(handleJson);
    }
  }