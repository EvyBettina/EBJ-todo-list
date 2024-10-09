/* // Originalen
let toStore = [1, 2, 3, 4];

// Oversett og lagre i LocalStorage
let jsonToStore = JSON.stringify(toStore);
localStorage.setItem("todos", jsonToStore);

// Hent ug og oversett tilbake til JavaScript
let storedItem = localStorage.getItem("todos");
let converted = JSON.parse(storedItem);

// Logg ut originalen og det vi har hentet ut fra LocalStorage
console.log(toStore);
console.log(converted); */

let userInput = document.querySelector("#user-input");
let todoListElement = document.querySelector("#todo-list");

let storedTodos = localStorage.getItem("todos");
let convertedTodos = JSON.parse(storedTodos);

let todos;
if (storedTodos === null) {
  // Hvis det er første besøk på siden, lag en ny liste
todos = [];
} else {
  // Hvis det var noe lagret i LocalStorage, bruk det
  todos = convertedTodos;
}

renderTodos ();

// Dette er det som skal skje når brukeren trykker på 
// Legg til knappen
function handleSubmit(event) {
event.preventDefault(); // Forhindrer nettsiden og lastes inn på nytt (refresh)

console.log("Creating Todo Object...");
let newTodo = createTodoObject(userInput);

console.log(todos);
todos.push(newTodo);

console.log("Updating the stored list...");
let jsonTodos = JSON.stringify(todos)
localStorage.setItem("todos", jsonTodos);
console.log(jsonTodos);

console.log("Clearing out the old todos from the document...");
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