'use strict';
console.log('js file is connected.');

//global variable are accessible throughout our js file.
// let userPoints = 0;
// let userName;


// console.log('user points:', userPoints);

// alert('Hello and welcome to my guessing game!');

/**
 * the user variable
 * string, null, " " empty
 * If the user is an empty string or null, keep asking for their name
 *
 * while(userName === ' ' || userName === null){
 *        do some stuff
 *   }
 *
 * short cut
 * while(!userName){
 *  userName = prompt('what is your name?');
 * }
 */



// while(!userName){
//   userName = prompt('Welcome, What is your name?');
//   console.log('user name:', userName);
// }

//lowercase our input and remove extra spaces off the end.

// let normalizedInputName = userName.toLowerCase().trim();
// console.log('clean input', normalizedInputName);

// if(normalizedInputName !== 'bob'){
//   console.log('bob? it is not you!', normalizedInputName);
// }

// alert('Hello ' + userName + ' lets play a game!');

//Control flow of our if / else statements
//1
// if(condition){
// }

//2
// if(condition){
//   do code   
// } else {
//  give them this 
// }

//3
// if(condition){
//   .....
// } else if(second condition) {
//   ....
// } else {
//   .....
// }


// if(condition){.....} else if(second condition) {....} else if (thirdCondition) {.....} else {.......}



// Comparison Operators
/**
 < - less than
 > - greater than
 <= less than or equal to
 >= greater than or equal to
 == kinda equals
 != not equals too
 // stict usage
 === - strictly equals
 !== - not strictly equals
  */

//  prompt();
//  alert();
//  toLowerCase();
//  toUpperCase();
//  log();
//  includes();
//  join();
//  push();
//  pop();
//  trim();
//  length();
//  shift();
//  unshift();
//  indexOf();

//user points
// let answer = prompt('Is popcorn my favorite food?').trim().toLowerCase();
// console.log(answer);

// if(answer === 'no' || answer === 'n'){
//   alert('You are correct popcorn is not my favorite!');
//   //we need to give them a point
//   userPoints += 1;
//   // userPoints = userPoints + 1;
//   // userPoints++;
//   console.log('POINTS??',userPoints);
// } else {
//   alert('No that is incorrect, I like Pizza!');
// }

//looping

console.log(0);
console.log(1);

//while loops require a starting variable
// console.log('While loops need an expression to change the starting variable, in this case we are increasing the value by 5 each time the loop runs');
let count = 0;
// let guesses = 5;
while(count <= 50){
  console.log('count: ', count);
  count = count + 5;
}


//This loop counts down from 50 to 0, decreasing by -2 each time
count = 50;
while(count >= 20){
  console.log('50 -> 20:' , count);
  count = count - 2;
  // count -= 2;
}



/**  multi line comment.
          WHILE LOOPS  will run until a condition is true or truthy, or not true!!

          while(condition){

              something has to change
          }

          let i = 0;
          while(i < value){
            count our iterations or times through the loop
            i = i + 1
            i += 1;
            i++;
          }

          DO WHILE
          do {
            here code runs first and always then the condition is checked.
            }
             while(condition)
*/


// let newUser;
// do {
//   newUser = prompt('A new user Name pLease?');
//   console.log('new user name', newUser);
// } while(!newUser);

// console.log('we now have a new user', newUser);




/*

      Evaluating Comparisons
      Type coercion, weak typing, truthy/falsy
      falsy values are :
      - 0
      - null
      - NaN
      - ''
      - undefined
      - false


      truthy values. ==== everything else.



      Logical Operators
      - (calzone === 'isPizza' ||  'isNotPizza')    => will not Work


      Combining conditions:
      - Not: !
      - And: &&
      - Or:  ||
              true             and             true
       (craig === 'instructor' && craig === 'teacher')

      Short-circuiting:
      - If we know the answer from the first expression, don't evaluate the second expression
        Logical operators work from left -> right, and stop as soon as they get a result. When they stop, they return whatever value stopped them, so we can write logical expressions that return a value other than true or false. This can be used to set default values.


        let name1 = 'Bob';
        let name2 = '';
        let userName1 = (name1 || 'unknown'); -> userName1 = 'Bob'
        let userName2 = (false || 'Ted'); ->     userName2 = 'unknown'


      Any existing value is considered truthy, so we can use a conditional to check whether something exists:
*/

let a = 10;
let emptyObject = {};
//in this condition what are we checking for T or F.
if(a){
  console.log('A exists!');
}

if(a && emptyObject){
  console.log('They both exist!');
}


let foodsILike = ['tatertots', 'chips', 'popcorn', 'pizza'];
console.log(foodsILike);

// 3 things set variable , set condition, increment the variable.
for(let i = 0; i < foodsILike.length; i++){
  //        array name and then [index that gives us the element]
  console.log('do we get food?', foodsILike[i]);
}
//array. method(value as an argument.)
foodsILike.push('swiss chard');

console.log(foodsILike);

//remove an element from our array with pop()

foodsILike.pop();
console.log('pop',foodsILike);

// gets from the front of an array.
let shiftArray = foodsILike.shift();
console.log('shift array',shiftArray);


foodsILike.unshift('spinach');

console.log('un shift', foodsILike);


let index = foodsILike.indexOf('popcorn');

console.log('is this 2?',index);



// yes, js lets you do this (having an array of different data types). don't do it.
let mixedUpArray = ['yeehaw', 42, true, ['yo', 5], {}];
console.log('mixedUpArray ', mixedUpArray);
