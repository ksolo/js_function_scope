// The JS global object is the window object while in the browser

console.log(window);

// The window object object is providing the context for the application
// to run in, and can therefore be referred to as this

console.log(window === this);

// As we delcare variables and functions in global context, they are
// essentially added to the window object as properties

var myVariable = "Wooooot";

// console.log(myVariable);
// console.log(window.myVariable);
// console.log(window.hasOwnProperty('myVariable'));

function myFunction(){
  console.log("I'm in window.myFunction");
}

myFunction();
window.myFunction();
this.myFunction();

// When we enter a function we enter a new scope.

function myNewFunction(){
  // we are still in global context since this function is not
  // associated with an object.
  console.log(this === window);

  // this is called shadowing, where we are naming a variable the same
  // as what is available in an outer scope.  Be cautious when doing this
  // since it could lead to confusion to the reader.

  var myVariable = "Now I'm scoped to the function";
  console.log(myVariable);

};

function anotherFunction(){
  // variables declared anywhere in the function, are available anywhere
  // in the function.  This is called hoisting

  // remember declaration and assignment are two different concepts

  console.log(myLocalVariable);
  console.log(myBlockedVariable);
  console.log(someOtherVariable);

  var myLocalVariable = 5;

  if (myLocalVariable) {
    var myBlockedVariable = "Hello";
  }
  else {
    var someOtherVariable = "Howdy"
  }


}

myNewFunction();
console.log(myVariable);
console.log(window.myVariable)

// Objects can be used to group properties and functions together.

var myObject = {};

// When a function is associated to an object, it is called a method.

myObject.myMethod = function(){
  // inside of a method, the `this` keyword, will refer to the object
  // the method has been attached.
  console.log(this);
  console.log(this === myObject);

  // if a function is nested inside of a method, the inner function
  // is not attached to the object, so therefore the `this` keyword
  // will go back up to the global level.

  // inner functions also have acess to variables from the outer
  // function

  var self = this;

  function myInnerFunction(){
    console.log(self);
    console.log(self === myObject);

    console.log(this);
    console.log(this === window);
  };

  myInnerFunction();

  // to get around this type of scope limitation, we can create a
  // variable in the method, that is then accessable to the inner
  // function.

};


// `this` ===========================================================
// The JavaScript keyword `this` is contextually determined based on how
// the function was invoked.


// Constructor invocation




// Method invocation
Car.prototype.whatThe = function(){
  console.log(this);
  var that = this;
  var self = this;
  function stuff() {
    console.log(this);
    console.log(that);
    console.log(self);
  }
  stuff();
}



// Function invocation




// Function#call and Function#apply



