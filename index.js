let form = document.getElementById("form");
let userInputBox = document.getElementById("user-input-box");
let wordCountArea = document.getElementById("word-count-area");

form.addEventListener("submit", event => {
  event.preventDefault();
  let userInput = userInputBox.value.trim();
  let array = userInput.split(" ");
  let count = array.length;
  wordCountArea.innerText = `The word count is ${count}.`;
})