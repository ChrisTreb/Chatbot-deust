/*
==================
Go down the container on page reload
==================
*/

$(window).on('load', function() { $("html, body").animate({ scrollTop: $(document).height() }, 100); });

/*
===================
MESSAGES
===================
*/

function createMessage(to, message) {
  var div = document.createElement('div');

/* DATE */
/*
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var day = date.getDate();
var monthNumber = date.getMonth();
var year = date.getFullYear();


var timeNow = `Le ${day}/0${parseInt(monthNumber) + 1}/${year}, à ${hours}:${minutes}:${seconds}`;
*/
//////////

  if (to === 'robot') {
    div.className = "message me";
  } else {
    div.className = "message robot";
  }

  // Ternary expression
  var from = (to === 'me') ? 'Robot' : 'Moi';

  
  var messageBody =  '<div class="message_content">' + message + '</div>';

  var content = '<div class="message_name">' + from + '</div>';
  content += messageBody;

  div.innerHTML = content;

  document.querySelector('.messagesContainer').appendChild(div);

  ///////////////////
  /* LOCALSTORAGE */
  /////////////////
  window.createdDiv = {from, messageBody};
  console.log(window.createdDiv);
  window.dataStore();
  
  /////////////////
}

window.createMessage = createMessage;

/*
===================
SCROLL
===================
*/

function scrollToBottom() {
  $("html, body").animate({ scrollTop: $(".messagesContainer").height() }, 1000);
}

window.scrollToBottom = scrollToBottom;

/*
===================
FORM HANDLER
===================
*/

var form = document.querySelector('form.bottomContainer');

function handleSubmit(event) {
  event.preventDefault();

  var input = form.querySelector('input');
  var message = input.value;

  createMessage('robot', message);

  scrollToBottom();

  var robotResponse = window.handleMessage(message);

  if (robotResponse !== false) {

    if (robotResponse) {
      createMessage('me', robotResponse);
    } else {

    var dunno = [
      "Je n'ai pas compris, désolé...",
      "Veuillez réessayer, merci.",
      "I don't understand.",
      "Try again.",
      "No comprendo...",
      "Verstehe ich nicht..."
    ];

      createMessage('me', dunno[Math.floor(Math.random()*dunno.length)]);
    }
  }

  scrollToBottom();

  input.value = '';
}

form.addEventListener('submit', handleSubmit);

/*
===================
HANDLE MESSAGE
===================
*/

window.handleMessage = function(message) {
  for (var key in rules) {
    var func = rules[key];
    key = new RegExp(key, 'gi');

    if (message.search(key) > -1) {
      return func(message);
      break;
    }
  }
}

