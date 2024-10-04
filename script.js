let userInput = document.querySelector("#user-input");
console.log(userInput)
let todoListElement = document.querySelector("#todo-list");

function handleSubmit(event) {
event.preventDefault();
console.log(event);
console.log("Form Submitted");

userInput.addEventListener("submit", handleSubmit);
