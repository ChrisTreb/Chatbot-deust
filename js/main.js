/*
==================
Go down the container on page reload
==================
*/

var el = document.querySelector(".messagesContainer");
window.onload = setTimeout(function(){ el.scrollBy(0, el.scrollHeight); }, 100);

/*
===================
MESSAGES
===================
*/

function createMessage(to, message) {
  var div = document.createElement('div');

  if (to === 'robot') {
    div.className = "message me";
  } else {
    div.className = "message robot";
  }

  // Ternary expression
  var from = (to === 'me') ? 'Robot' : 'Moi';

  var content = '<div class="message_name">' + from + '</div>';
  content += '<div class="message_content">' + message + '</div>';

  div.innerHTML = content;

  document.querySelector('.messagesContainer').appendChild(div);

  ///////////////////
  /* LOCALSTORAGE */
  /////////////////
  createdDiv = {message};
  console.log(createdDiv);
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
  var el = document.querySelector(".messagesContainer");
  el.scrollBy(0, el.scrollHeight);
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

