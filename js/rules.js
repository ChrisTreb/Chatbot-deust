var startTime = Math.round(+new Date() / 1000);

var rules = {

  'quel age': function(message){
    var now = Math.round(+new Date() / 1000);
    var diff = now - startTime;

    return "J'ai " + diff + " secondes";
  },

  '(ç|c)a va': function(message){
    return 'Oui';
  },

  'bonjour': function(message){
    return 'Salutations Humain!';
  },

  'quel est ton (nom|prénom)': function(message){
    return 'My name is Arlette. Arlette Chatbot';
  },

  'Quel temps fait(-| )il (a|à)': function(message){

    var arr = message.split(' ');
    var city = '';

    if (arr[arr.length - 1].length > 2){
      city = arr[arr.length - 1];
    } else {
      city = arr[arr.length - 2];
    }
    
    window.getMeteo(city);

    return false;
  },

  'gif': function(message) {

    var arr = message.split(' ');
    var gifCategory = '';

    if (arr[arr.length - 1].length > 2){
      gifCategory = arr[arr.length - 1];
    }

    window.getGif(gifCategory);
    
    return false;
  },

  'chuck': function(message){
    
    window.getChuck();

    return false;
  },

  'film': function(message){

    var arr = message.split(' ');
    var filmTitle = '';

    if (arr[arr.length - 1].length > 2){
      filmTitle = arr[arr.length - 1];
    }

    window.getFilm(filmTitle);

    return false;
  },

  "question": function(message){

    var question = "Pour les questions cliquez<a target='_blank' href='http://lmgtfy.com/?q=ma question' > ici</a>";

    return question;
  },

  "adresse": function(message){

    var arr = message.split(' ');
    var mapCity = '';

    if (arr[arr.length - 1].length > 2){
      mapCity = arr[arr.length - 1];
    } else {
      mapCity = arr[arr.length - 2];
    }

    window.getAdress(mapCity);
    return false;
  }
};
