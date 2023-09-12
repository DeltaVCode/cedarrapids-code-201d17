'use strict';
console.log('app js is connected!!!');

//take in some user input
let userAnswer = prompt(
  'Is my favorite food pizza? Please respond with yes or no!'
);
console.log(userAnswer);
//       trim removes spaces and lower case will lowercase input.
//clean up the input
let cleanUserAnswer = userAnswer.trim().toLowerCase();
//we going to lowercase for user input validation
console.log('lowercase and no space:', cleanUserAnswer);

//we are going to use if else conditions to determine a response to the user.
if (cleanUserAnswer === 'yes' || cleanUserAnswer === 'y') {
  alert('Your right! Pizza is great!');
} else {
  alert('Your wrong pizza is my favorite!');
}
//chaining functions
let userName = prompt('What is your user name?').trim().toLowerCase();
console.log(userName);
console.log(typeof userAnswer);
// USE A PARSE INT OR NUMBER TO CHANGE THE STRING INTO NUMBER.

//short circuit.
// if(true || false || true){
//   then this will run 'in here'
// }

//Look at some data types : boolean, string, number,
let myBooleenValueTrue = false;
let myBooleenValueFalse = false;
let thirdBooleenValueTrue = false;
// true               &&           true now its false
if (myBooleenValueTrue && thirdBooleenValueTrue) {
  alert('1 runs because it is the first condition to return true.');
} else if (myBooleenValueTrue || myBooleenValueFalse) {
  alert('2 because one condition was true');
} else if (thirdBooleenValueTrue) {
  alert('3 is now true!');
} else {
  alert('the else');
  console.log('we hit the else everything was false....');
}

//Introduction to arrays so we can store some stuff, strings, number, arrays, objects
//learn some methods that we can use arrays to do stuff

let emptyArray = [];
console.log(emptyArray);
//                  0,1,2,3,4,5 the 6th element is at index 5
let quizAnswers = ['c', 'a', 'd', 'c', 'e', 'c'];
console.log(quizAnswers);

//nested Arrays
let createNested = [['a'], [[]], [{}, 5]];
console.log(createNested);

let nestedArray = [
  ['yes', 'y'], //0 index  1st element

  ['no', 'n'], // 1 index  2nd element

  ['maybe', 'maybe not'], //2 index do not want a comma here.  3rd element.
];
console.log(nestedArray);

// we can put different data types in our arrays.
let mixedDataTypesArray = ['Harry', 'Potter', 10, true, 'Magic', {}];
console.log('mixedDataTypesArray:', mixedDataTypesArray);

//how can we access things in our arrays.
//                 0,   1,   2
let myArrayOne = ['a', 'x', 'c'];
console.log(myArrayOne[1]);

if (myArrayOne[1] === 'x') {
  alert('you picked the 1st index which is the second element!');
}

/**
 * pop()
 * push()
 * nested arrays
 * what can we put in a js array
 * how to access an index in an array (how do we get it out again?)
 */

let myArrayTwo = [1, 2, 3, 4, 5];
console.log('myArrayTwo:', myArrayTwo);

//this is how we can add an element to the end of our array.
// use the push() method.

myArrayTwo.push(6);
console.log('myArrayTwo after the push:', myArrayTwo);

myArrayTwo.pop();
console.log('pop: ', myArrayTwo);

let myArrayThree = [1, 2, 3, 4, 5];
// dot operator
myArrayThree.pop();
myArrayThree.pop();
myArrayThree.pop();

console.log('pop(): ', myArrayThree);
