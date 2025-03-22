// Callback fn=A callback function is a function that is passed into another function as an argument and is executed inside that 
// function to complete an action or handle a result.
function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); 
}

function sayGoodbye() {
  console.log("Good Morning!");
}

greet("Achal", sayGoodbye);
