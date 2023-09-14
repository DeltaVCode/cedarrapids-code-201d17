'use strict';
console.log('app js file is connected!');

//gobal variables access everywhere

function functionName() {
  //is where our code is going to go.
  console.log('this is from inside the function.');
}
//this makes our function run. it calls or invokes our function.
functionName();

// parameters allow us to give things in our code human readable values that we can use throughout the code.
//                parameters are place holders
function multiply(num1, num2) {
  console.log('1st parameter', num1);
  console.log('2nd parameter', num2);
  console.log('results:' + num1 * num2);
}
//these values are the arguments because they are real values
multiply(2, 4);

let result1 = multiply(2, 5);
console.log(result1);

let result2 = multiply(442, 523);
console.log(result2);

// function scope for how our variables work inside our functions. Can we Access these variables and where.
//outside the function and we can reach it from anywhere

let globalVariable = 'global';

function scoper(parameter) {
  //live inside the function and thats where we will use the parameter
  let localVar = 'I like my privacy!';
  console.log('local variable', localVar);
  console.log('our parameter is our: ', parameter);
  console.log('universal variable is our: ', globalVariable + 'variable');
  for (let i = 0; i < 3; i++) {
    console.log('value of i ', i);
  }
}
scoper('argument');

// console.log(' outside the function: ', parameter);
// console.log(' outside the function: ', localVar);
console.log('universal variable:', globalVariable);

// another function
function circlePropsOne(radius) {
  let area = Math.PI * radius * radius;
  let circumference = 2 * Math.PI * radius;
  console.log('1.', area, circumference);
  let propsArray = [area, circumference];
  console.log('our Array: ', propsArray);
  return propsArray;
}

//call the function()
let circle = circlePropsOne(3);
console.log('our return value: ', circle);

//function Expression  anonymous function cause it has no name.
let checkLogin = function () {
  let userId = 1234;
  if (userId) {
    console.log('id:', userId);
  } else {
    console.log('user not found');
  }
};
checkLogin();

//syntax     ('function runs')();
//IIFE Immediately invoked function expression.
// (function userLogin() {
//   //code goes.
//   let userID = 1234;
//   if (userID) {
//     console.log('id: ', userID);
//   } else {
//     console.log('user not loggin1');
//   }
// })();


//switch statement - just see it.
let spaceHandle = prompt('What\'s your space handle?');
let spaceShipPart = prompt('What parts do you need?, Select parts 1 - 4. ');

switch(spaceShipPart){
case '1': confirm(spaceHandle + ' You need part 1.');
  break;
case '2': confirm(spaceHandle + ' You need part 2.');
  break;
case '3': confirm(spaceHandle + ' You need part 3.');
  break;
case '4': confirm(spaceHandle + ' You need part 4.');
  break;
default:
  alert('you gave us no matching part numbers');
}

alert('Good bye for now ' + spaceHandle);
