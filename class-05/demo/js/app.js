'use strict';
console.log('app file is connected!');


/**
 *lotteryNumberPicker
 *@param {}
 * @return {*}
 */
function lotteryNumberPicker(){

  //create an empty array to hold some numbers
  let lotteryArray = [];
  //set the first number in our array  at position 0 to be the number 10
  // lotteryArray[0] = 10;
  console.log(lotteryArray);
  //add 5 random numbers to our array up to 100
  // lotteryArray[1] = 33;
  // lotteryArray[2] = 56;
  // lotteryArray[3] = 87;
  // lotteryArray[4] = 91;
  // lotteryArray[5] = 13;
  // log our results
  // then we will return our results.
  for(let i = 0; i < 6; i++){
    console.log('i', i);
    lotteryArray[i] = Math.ceil(Math.random() * 99);
    console.log('array:', lotteryArray);
  }

  return lotteryArray;




}

//how we call a function or invoke it.
let ourLotteryNumber = lotteryNumberPicker();
console.log('outside the function with the returned value:',ourLotteryNumber);


// function lotteryNumberPicker(){
//   let lotteryArray = [];
//   for(let i = 0; i < 6; i++){
//     lotteryArray[i] = Math.ceil(Math.random() * 99);
//   }
//   return lotteryArray;
// }

// parameters which are placeholders for any numbers we are giving to our function.

/**
 *
 *
 * @param {*} quanity
 * @param {*} lotteryMax
 * @return {*} lottery numbers from user input
 * @author Craig
 */
function lotteryNumbers(quanity, lotteryMax){
  let lotteryArray = [];
  for(let i = 0; i < quanity; i++){
    lotteryArray[i] = Math.floor(Math.random() * lotteryMax);
  }
  return lotteryArray;
}


let quanity = prompt('How many numbers would you like?');
let lotteryMax = prompt('What is the max amount per number?');
//                         arguments becuase they are our values
let result = lotteryNumbers(quanity, lotteryMax);
console.log('our lottery results:', result);

alert(result);
console.table(result);
