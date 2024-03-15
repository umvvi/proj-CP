/*lorm ipsum */
function copyToClipboard() {
  // Select the text to copy
  var text = document.getElementById("textToCopy");

  // Create a temporary input element
  var input = document.createElement('input');
  input.setAttribute('value', text.innerText);
  document.body.appendChild(input);

  // Select the text in the input element
  input.select();

  // Copy the selected text to the clipboard
  document.execCommand('copy');
  // Set a timeout to hide the notification box after 3 seconds
  setTimeout(function () {
    notificationBox.style.display = "none";
  }, 2000); // 3000ms = 3 seconds

  // Remove the temporary input element
  document.body.removeChild(input);

  // Show the notification box
  var notificationBox = document.getElementById("notificationBox");
  notificationBox.style.display = "block";

}

function ChangeTextDutch() {
  document.getElementById("search").innerHTML = '<input id="search" class="field" placeholder="NANI?!" type="text">';
  
  document.getElementById("li-1").innerHTML = "Home";
  document.getElementById("li-2").innerHTML = "Info & downloads";
  document.getElementById("li-3").innerHTML = "Vragenlijst";
  document.getElementById("li-4").innerHTML = "Doneer";
  document.getElementById("li-5").innerHTML = "Contact";

  document.getElementById("easy-mail").innerHTML = "Vul in voor een makkelijke email";
  document.getElementById("alert").innerHTML = "Als je vragen hebt of een profesional wilt contacteren, kan dat hier." + "<br>" + "Is het met spoed?" + "<br>" + "Neem contact op: " + '<a id="textToCopy phone" onclick="copyToClipboard()">06 92304939</a>';
  document.getElementById("yourage").innerHTML = "Uw leeftijd: " + '<input type="number" placeholder="leeftijd" name="" id="age-d"></input>';
  document.getElementById("yourname").innerHTML = "Uw naam: " + '<input type="text" placeholder="Naam" name="" id="name"></input>';
  document.getElementById("youremail").innerHTML = "E-amail adres: " + '<input  type="text" placeholder="ex. voorbeeld@email.com" name="" id="email"></input>';
  document.getElementById("yournumber").innerHTML = "telefoon nummer: " + '<input type="text" placeholder="ex. 06 12345678" name="" id="phone"></input>';
  document.getElementById("entermessage").innerHTML = "Schrijf een bericht in het veld hieronder" + '<br>' + '<input type="text" placeholder="" name="message" id="message">' + '<button type="button">Verstuur</button>';

  document.getElementById("notificationBox").innerHTML = "Text gekopieerd!";

  document.getElementById("border").innerHTML = 'Locatie en Contact';
  document.getElementById("p-contact").innerHTML = 'Persoonlijk Contact';
}

function ChangeTextEnglish() {

  document.getElementById("li-1").innerHTML = "Home";
  document.getElementById("li-2").innerHTML = "Info & downloads";
  document.getElementById("li-3").innerHTML = "Questionaire";
  document.getElementById("li-4").innerHTML = "Donate";
  document.getElementById("li-5").innerHTML = "Contact";

  document.getElementById("easy-mail").innerHTML = "Fill in this form for an easy email";
  document.getElementById("alert").innerHTML = "If you have questions or want to contact a proffesional, you can do so here." + "<br>" + "Is it urgent?" + "<br>" + "Contact us at: " + '<a id="textToCopy phone" onclick="copyToClipboard()">06 92304939</a>';
  document.getElementById("yourage").innerHTML = "Your age: " + '<input type="number" placeholder="age" name="" id="age"></input>';
  document.getElementById("yourname").innerHTML = "Your name: " + '<input type="text" placeholder="name" name="" id="name"></input>';
  document.getElementById("youremail").innerHTML = "E-mail address: " + '<input  type="text" placeholder="ex. example@email.com" name="" id="email"></input>';
  document.getElementById("yournumber").innerHTML = "Phone number: " + '<input type="text" placeholder="ex. 06 12345678" name="" id="phone"></input>';
  document.getElementById("entermessage").innerHTML = "Enter your message in the field below:" + '<br>' + '<input type="text" placeholder="" name="message" id="message">' + '<button type="button">Submit</button>';

  document.getElementById("notificationBox").innerHTML = "Text Copied!";

  document.getElementById("border").innerHTML = 'Location and Contact';
  document.getElementById("p-contact").innerHTML = 'Personal Contact';
}

function toggleExpand() {
  var qCont = document.getElementById('q-cont');
  var button = qCont.querySelector('button');
  
  if (qCont.style.height === '155px') {
    qCont.style.height = 'fit-content';
    qCont.style.maskImage = 'none';
    button.textContent = 'Contract';
  } else {
    qCont.style.height = '155px';
    qCont.style.maskImage = 'linear-gradient(to top, #000 0, #0000 50%), linear-gradient(#000, #000 90%)';
    button.textContent = 'Expand';
  }
}
function toggleExpand2() {
  var qCont2 = document.getElementById('q-cont2');
  var button2 = qCont2.querySelector('button');
  
  if (qCont2.style.height === '155px') {
    qCont2.style.height = 'fit-content';
    qCont2.style.maskImage = 'none';
    button2.textContent = 'Contract';
  } else {
    qCont2.style.height = '155px';
    qCont2.style.maskImage = 'linear-gradient(to top, #000 0, #0000 50%), linear-gradient(#000, #000 90%)';
    button2.textContent = 'Expand';
  }
}

function toggleExpand3() {
  var qCont3 = document.getElementById('q-cont3');
  var button3 = qCont3.querySelector('button');
  var ans3 = qCont3.querySelector('p');

  if (qCont3.style.height === '100px') {
    qCont3.style.height = 'fit-content';
    qCont3.style.maskImage = 'none';
    button3.textContent = 'Contract';
    ans3.textContent = '( ͡° ͜ʖ ͡°)';
  } else {
    qCont3.style.height = '100px';
    qCont3.style.maskImage = 'linear-gradient(to top, #000 0, #0000 50%), linear-gradient(#000, #000 90%)';
    button3.textContent = 'Expand';
    ans3.textContent = 'we ask of you to refrain from asking irrelevant questions, thank you.';
  }
}