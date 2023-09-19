'use strict';
console.log('app js is connected');

// Problem Domain: the Cedar Rapids Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.



// let petOne = {
//   name: 'Fluffy',
//   breed: 'Tabby',
//   imageName: 'diabloBlanco',
//   intertests: ['Sun Light', 'Mouse Toys', 'Red Dots'],
//   isGoodWithKids: true,
//   isGoodWithCats: true,
//   isGoodWithDogs: true,
//
// };
// add so that our constructor function doesnt have to worry about it and all our objects can still have methods/functions that do things.
//new Pet(add the arguments for our objects properties/attributes);
//we are going to create constructor function ~ it is going to build our object quickly.

function Pet(petName,breed,imageName,interests,isGoodWithKids,isGoodWithCats,isGoodWithDogs){
  this.petName = petName;
  this.breed = breed;
  this.imageName = imageName;
  this.intertests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
}



//new operator and it is how we call or invoke our construtor function.
let petOne = new Pet('Tom', 'Tiger', 'diabloBlanco',['Sun light', 'Mouse Toys', 'Red dots'],true, true, true);
let petTwo = new Pet('Garfield','LazyCat', 'jumper',['Cat nip', 'strings', 'food'],true, false,true);
let petThree = new Pet('Sylvester','sadCat', 'tommyBob',['birds', 'wands', 'naps'],true, false,true);
// console.log(petOne, petTwo,petThree);






//we are going to create some prototypes. allow us to create function outside of our constructor (which is where our objects are being created) will extend the functionality of our objects.

Pet.prototype.setAge = function(){
  this.age = randomAge(3,12) + ' Months old.';
};

Pet.prototype.getInterests = function(){
  //grab a random array index and return that intertest
  let randomArrayIndex =  Math.floor(Math.random() * this.intertests.length) + 1;
  // console.log('array index',randomArrayIndex);
};

//render out a table that we create in js and show some pet data.
//helper function for calculating age
function randomAge(minMonth, maxMonth){
  //do the math... return a random number for a months old..
  return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
}




Pet.prototype.render = function(){
  let parentElement = document.getElementById('kittenProfiles');
  let article = document.createElement('article');
  parentElement.appendChild(article);
  let h2 = document.createElement('h2');
  // console.log(this.petName);
  h2.textContent = this.petName;
  article.appendChild(h2);
  let petPara = document.createElement('p');
  petPara.textContent = `Cats are cool! and ${this.petName} is   ${this.age}`;
  article.appendChild(petPara);
  let petUl = document.createElement('ul');
  article.appendChild(petUl);
  for(let i = 0; i < petOne.intertests.length; i++){
    let petLi = document.createElement('li');
    petLi.textContent = petOne.intertests[i];
    petUl.appendChild(petLi);
  }
  let petOneImage = document.createElement('img');
  petOneImage.setAttribute('src', 'images/' + this.imageName + '.jpeg' );
  petOneImage.setAttribute('alt', 'Please adopt our kittens');
  article.appendChild(petOneImage);

  //add a table
  let petTable = document.getElementById('adoptPets-table');
  console.log(petTable);

  // create some table elements
  //first we create a TR table row.
  //then we can create TR table body
  let petRow =  document.createElement('tr');
  let headNameCell = document.createElement('th');
  headNameCell.textContent = this.petName;
  petRow.appendChild(headNameCell);
  //create the html
  let breedCell = document.createElement('td');
  //set the text content with a value
  breedCell.textContent = this.breed;
  //then append the table data to the row
  petRow.appendChild(breedCell);

  let ageCell = document.createElement('td');
  ageCell.textContent = this.age;
  petRow.appendChild(ageCell);

  let interestsCell = document.createElement('td');
  interestsCell.textContent = this.interests;
  petRow.appendChild(interestsCell);

  //append our table back to our html.
  petTable.appendChild(petRow);
};


petOne.setAge();
petTwo.setAge();
petThree.setAge();
petOne.getInterests();
petTwo.getInterests();
petThree.getInterests();



//            pet      objects
let allPetsArray = [petOne, petTwo, petThree];
console.log(allPetsArray);

for(let i = 0; i < allPetsArray.length; i++){
  allPetsArray[i].render();
}


