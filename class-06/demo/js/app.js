'use strict';
console.log('app js is connected');


// Problem Domain: the Cedar Rapids Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.


//Each Kitten's profile should have:
// Name
// Breed
// - gender   -- isFixed.
// - random age assigned
// a list of what they like.
// an image
// is good with kids
// is good with dogs
// is good with other animals


// let emptyObject = {};
let petOne = {
  name: 'Fluffy',
  breed: 'Tabby',
  imageName: 'diabloBlanco',
  intertests: ['Sun Light', 'Mouse Toys', 'Red Dots'],
  isGoodWithKids: true,
  isGoodWithCats: true,
  isGoodWithDogs: true,
  setAge: function(){
    this.age = randomAge(3,12) + ' Months old.';
    console.log('did we get a month old from our randomAge:',this.age);
  }
};

//FUNction fact a function in an object is reffered to as a METHOD.
let petTwo = {
  name: 'Tiger',
  breed: 'Tiger',
  imageName: 'tommyBob',
  interests: ['Rainy Days', 'Running', 'Yarn'],
  isGoodWithKids: true,
  isGoodWithDogs: true,
  isGoodWithCats: true,
  setAge:   function() {
    this.age = randomAge(3, 12) + ' Months old.';
  }
};

//call the object methods/functions and now log out object to see if they are good
petOne.setAge();
petTwo.setAge();

console.log(petOne, petTwo);


//create DOM elements and render in the html
//create element
//Add the value
//append it to out html doc.
/** 
 *  <article>
        <h2>Kittens Name</h2>
        <p> Description about the kitten</p>
        <ul>
          <li>list some likes for kittens</li>
        </ul>
        <img is a picture of the kitten>
      </article>
*/

//global var
let parentElement = document.getElementById('kittenProfiles');
// console.log(parentElement);


let article = document.createElement('article');
// console.log(article);
parentElement.appendChild(article);

let h2 = document.createElement('h2');
//object is global so we say objects name and then . property we want
h2.textContent = petOne.name;
article.appendChild(h2);
//create p tag
let petPara = document.createElement('p');
petPara.textContent = 'Cats are cool! and pet one is ' + petOne.age;
article.appendChild(petPara);

let petUl = document.createElement('ul');
article.appendChild(petUl);
//                object.array go through the whole array
for(let i = 0; i < petOne.intertests.length; i++){
  let petLi = document.createElement('li');
  petLi.textContent = petOne.intertests[i];
  petUl.appendChild(petLi);
}



let petOneImage = document.createElement('img');
{/* <img src=""   alt=""> add the path below  diabloBlanco         */}
petOneImage.setAttribute('src', 'images/' + petOne.imageName + '.jpeg' );
petOneImage.setAttribute('alt', 'Please adopt our kittens');
article.appendChild(petOneImage);



console.log(parentElement);
// not a method. it is a pure(). has no object that it belongs to
//                   3          12
function randomAge(minMonth, maxMonth){
  //do the math... return a random number for a months old..
  return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
}
