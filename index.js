let form = document.getElementById("form");
let userInputBox = document.getElementById("user-input-box");
let wordCountArea = document.getElementById("word-count-area");

form.addEventListener("submit", event => {
  event.preventDefault();
  wordCounter(userInputBox);
})

//checks if the str is a word
function isWord(str) {
  var alphaNumericFound = false;
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if ((code > 47 && code < 58) || // numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123)) { // lower alpha (a-z)
      alphaNumericFound = true;
      return alphaNumericFound;
    }
  }
  return alphaNumericFound;
}

function wordCounter(text) {
  var text = userInputBox.value.split(' ');
  var count = 0;
  for (var i = 0; i < text.length; i++) {
    if (!text[i] == ' ' && isWord(text[i])) {//if it isn't space and it is a word
      count++;
    }
  }
  wordCountArea.innerText = `The word count is ${count}.`;
}