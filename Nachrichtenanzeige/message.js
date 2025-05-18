let inputEl = document.getElementById("text");
let buttonEl = document.getElementById("button");
let textareaEl = document.getElementById("textarea");

buttonEl.addEventListener("click", function() {
    textareaEl.value = inputEl.value;
});