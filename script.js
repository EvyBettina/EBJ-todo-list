let userInput = document.querySelector("#user-input");
let todoListElement = document.querySelector("#todo-list");

let todos = []

// Dette er det som skal skje når brukeren trykker på 
// Legg til knappen
function handleSubmit(event) {
event.preventDefault(); // Forhindrer nettsiden og lastes inn på nytt (refresh)

console.log("Creating Todo Object...");
let newTodo = createTodoObject(userInput);

console.log(todos);
todos.push(newTodo);

console.log("Clearing out the old todos from the document...")
todoListElement.innerHTML = "";

console.log("Appending all todos to the Document...");
todos.forEach((todo, index) => {
    console.log(todo);
    console.log(index);
// Først lage det HTML for det gjøremålet
let newTodoCard = createTodoCard(todo);

// Legg det nye html element til i Dokumentet
todoListElement.append(newTodoCard);
});
    
}

userInput.addEventListener("submit", handleSubmit);

// Denne leser av daten i et form element
// og lager et JavaScript objekt for Gjøremålene
function createTodoObject(form) {
 let todo = form.querySelector("#todo");
let todoValue = todo.value;

let todoObject = {
    title: todoValue,
  };

return todoObject;
}

function createTodoCard(todoObject) {
    // Lage alle elementene vi trenger
 let todoCard = document.createElement("li");
 let titleElement = document.createElement("h2");

// Sett de sammen til ett element
 todoCard.append(titleElement);

 // Konfigurere elementene med korrekte verdier
 titleElement.textContent = todoObject.title;

return todoCard;
}