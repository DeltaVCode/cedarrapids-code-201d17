let a = 2;
let b = 3;
console.log(a + b);
let c = a;
a = 7;
console.log(a);
console.log(c);

function printTheThing(a) {
  console.log(a);
}

printTheThing(4);
printTheThing(b);
//
console.log(1);
function doStuff() {
  console.log(2);
}
console.log(3);
function doThings() {
  console.log(4);
  doStuff();
  console.log(5);
}
console.log(6);
doStuff();
console.log(7);
doThings();
console.log(8);



//


// Declare Global Variables
// Declare Constructor functions - name should be capitalized!
// Declare prototype methods
// Declare regular functions
// Add event listeners
// Call functions
//declare global variables at the top of your file
const globalVariable1 = 'hello';
const globalVariable2 = [0, 1, 2];
const myForm = document.getElementById('my-form');

//create an instance of PersonConstructor and save it to the sam variable
//note that we can do this before the constructor function declaration
const sam = new PersonConstructor('Sam', 'Hamm');
//now sam = { firstName: 'Sam', lastName: 'Hamm' }

//then put any object constructors
function PersonConstructor(first, last) {
  this.firstName = first;
  this.lastName = last;
}

//then put any prototype functions that go with the object constructor
//call this function on an instance of PersonConstructor
PersonConstructor.prototype.sayHello = function() {
  console.log('Hello, my name is ' + this.firstName);
};

//then put regular function declarations
function firstFunction(parameter) {
  console.log(parameter);
}

function secondFunction(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }
}

function formHandler(event) {
  console.log(event.target);
}

//then add any event listeners
myForm.addEventListener('submit', formHandler);

//finally, call your functions
firstFunction(globalVariable1);
//logs 'hello'
secondFunction(globalVariable2);
//logs  0
//  1
//  2
sam.sayHello();
//logs 'Hello, my name is Sam'





