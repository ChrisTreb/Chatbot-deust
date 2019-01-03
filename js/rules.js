var startTime = Math.round(+new Date() / 1000);

var rules = {

  'quel (â|a)ge': function(message){

    var now = Math.round(+new Date() / 1000);
    var diff = now - startTime;

    return "J'ai " + diff + " secondes";
  },

  '(ç|c)a va': function(message){
    return 'Oui et toi?';
  },

  'bonjour|salut': function(message){
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

  'chuck norris': function(message){
    window.getChuck();
    return false;
  },

  'Montre moi l\'affiche du film': function(message){

    var arr = message.split(' ');
    var filmTitle = '';

    if (arr[arr.length - 1].length > 2){
      filmTitle = arr[arr.length - 1];
    }

    window.getFilm(filmTitle);
    return false;
  },

  "j'ai une question": function(message){
    var question = "Pour les questions cliquez<a target='_blank' href='http://lmgtfy.com/?q=ma question' > ici</a>";
    return question;
  },

  "montre moi la carte de": function(message){

    var arr = message.split(' ');
    var mapCity = '';

    if (arr[arr.length - 1].length > 2){
      mapCity = arr[arr.length - 1];
    } else {
      mapCity = arr[arr.length - 2];
    }

    window.getAdress(mapCity);
    return false;
  },

  "(Ahuri|Aigrefin|Anachorète|Analphabète|Andouille|Arsouille|Assisté|Asticot|Attardé|Avorton|Babache|Bachibouzouk|Baltringue|Banane|Bandit|Barjot|Batârd|Betterave|Bigleux|Bite|Blaireau|Boloss|Bordel|Bordel|Boudin|Bouffon|Bougre|Bougre|Boule|Boulet|Bouricot|Bourique|Bourrin|Boursemolle|Boursouflure|Bouseux|Boutonneux|Branleur|Branlotin|Branque|Branquignole|Brigand|Brêle|Brosse|Bubon|Burne|Butor|Bécasse|Bégueule|Bélitre|Béotien|Caca|Cagole|Calice|Canaille|Canaillou|Cancrelat|Caprinophile|Casse-pieds|Cassos|Catin|Cave|Chacal|Chafouin|Chameau|Chancreux|Chancre|Chaoui|Charogne|Chenapan|Chiassard|Chiasse|Chieur|Chiure|Cinglé|Clampin|Cloaque|Cloche|Clodo|Cloporte|Clown|Cochon|Cocu|Con|Conard|Conchieur|Connard|Connasse|Conne|Coprolithe|Coprophage|Cornard|Cornegidouille|Corniaud|Couard|Couille|Couillon|Crapule|Crassard|Crasseuse|Crasspouillard|Crevard|Crevure|Crotte|Cryptorchide|Crétin|Cuistre|Cul|Dégueulasse|Ducon|Dugenou|Dugland|Dypterosodomite|Débile|Décamerde|Décérébré|Dégueulis|Dégénéré|Dépravé|Détritus|Ecervelé|Ectoplasme|Emmerdeur|Empaffé|Emplâtre|Empoté|Enculeur|Enculé|Enflure|Enfoiré|Eunuque|Faquin|Faraud|Fesse|Fiente|Filou|Fion|Fiote|Foireux|Foldingue|Fourbe|Foutriquet|Frapadingue|Frappe|Freluquet|Fricoteur|Frigide|Fripouille|Frippon|Frustré|Fumier|Fumiste|Furoncle|Félon|Ganache|Gangrène|Gland|Glandeur|Glandus|Globicéphale|Gnome|Godiche|Gogol|Goinfre|Gommeux|Gougnafier|Goujat|Goulu|Gourdasse|Gourgandine|Graveleux|Gredin|Grenouille|Gringalet|Grognasse|Grue|Gueulard|Gueux|Gugus|Guignol|Has-been|Hérétique|Histrion|Homoncule|Hurluberlu|Hérétique|Iconoclaste|Idiot|Ignare|Illettré|Imbibé|Imbécile|Impuissant|Ivrogne|Jaune|Jean-foutre|Jobard|Jobastre|Judas|Kroumir|Kéké|Laideron|Larve|Lavedu|Lépreux|Loboto|Lèche-cul|Malandrin|Malotru|Malpropre|Manant|Maquereau|Maquerelle|Maraud|Margoulin|Merdaillon|Merdasse|Merde|Merdophile|Microcéphale|Minable|Minus|Miteux|Molasson|Mongol|Mononeuronal|Morbleu|Morfale|Morille|Morpion|Mortecouille|Morue|Morveux|Motherfucker|Moudlabite|Méchant|Mécréant|Mérule|Nabot|Nanar|Naze|Nazillon|Necropédophile|Neuneu|Niais|Niaiseux|Nigaud|Niguedouille|Noob|Nounouille|Nécrophile|Obsédé|Olibrius|Outrecuidant|Pachyderme|Paltoquet|Panaris|Parasite|Parbleu|Parvenu|Paumé|Pecore|Peigne-cul|Pendard|Pervers|Petzouille|Phlegmon|Pigeon|Pignolo|Pignouf|Pimbêche|Pinailleur|Pine|Pintade|Pipistrelle|Piqueniquedouille|Pisse-Froid|Pisse-vinaigre|Pisseuse|Pissure|Piètre|Pleutre|Plouc|Poivrot|Polisson|Poltron|PouacrePouacreux|Pouffe|Pouffiasse|Poufieux|Pouilleux|Pourceau|Pourriture|Punaise|Putassière|Pute|Putréfaction|Pygocéphale|Pécore|Pédale|Péquenot|Pétasse|Pétassoïde|Pétochard|Quadrizomique|Queutard|Quiche|Radasse|Radin|Rastaquouère|Renégat|Roquet|Roublard|Rouge|Roulure|Partouze|Sabraque|Sacrebleu|Sacrement|Sacripan|Sagouin|Salaud|Saleté|Saligaud|Salopard|Salope|Saloperie|Salopiaud|Saltinbanque|Saperlipopette|Saperlotte|Sauvage|Scatophile|Scelerat|Schnock|Schpountz|Sinoque|Sodomite|Sot|Souillon|Spermiducte|Suintance|Sybarite|Syphonné|Tabarnak|Tabernacle|Tâcheron|Tafiole|Tanche|Tartignole|Taré|Thon|Tocard|Toqué|Trainé|Tricard|Tromblon|Troubignole|Truand|Trumeaux|Tuberculeux|Tudieu|Tétârd|Usurpateur|Vandale|Vaurien|Vautour|Ventrebleu|Vermine|Veule|Vicelard|Vilain|Vioque|Voleur|Vorace|Voyou|Vérole|Wisigoth|Zigomar|Zigoto|Zonard|Zouave|Zoulou|Zozo)": function(message) {
    return "On se calme et un peu de tenue, merci!";
  }

};
