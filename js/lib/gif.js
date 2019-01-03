window.getGif = function(gifCategory) {
  var url = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + gifCategory + "&rating=pg-13";
  fetch(url).then(handleResponse);
  
  function handleJson(data) {

    console.log(data);
  
    var gifUrl = data.data.images.fixed_height.url;
  
    var img = '<img style="height:200px" src="' + gifUrl + '" />';
  
    window.createMessage('me', img);

    window.scrollToBottom();
  }
  
  function handleResponse(response) {
    response.json().then(handleJson);
  }
}