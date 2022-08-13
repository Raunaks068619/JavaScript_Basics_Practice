//lexical scoping is about the context the  global exectuion context kicks in and sets init() to the global execution.
// after that sayFirstName() is set on top of "init()".
// as soon as this both runs the scope of execution become empty and now the variable firstname is not available.

function init() {
  var firstname = "Raunak";
  function sayFirstName() {
    console.log(firstname);
  }
  sayFirstName();
}

init();

// if we try to print firstname here it wont be possible cause it was not defined in the global execution context.

console.log(firstname); // undefined or error 

// So that mean the variable firstname is available for the time "init()" is running.

// that is how scope chain works.
