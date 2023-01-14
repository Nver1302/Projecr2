let p = document.querySelector('.quote')
let b = document.querySelector('.btn')
let h = document.querySelector('.author')

function Person(quote, author){
  this.quote = quote,
  this.author = author
}

const person1 = new Person("You can never cross the ocean until you have the courage to lose sight of the shore.", "- Christopher Columbus");
const person2 = new Person("Eighty percent of success is showing up.", "- Woody Allen");
const person3 = new Person("Life is 10% what happens to me and 90% of how I react to it.", "- Charles Swindoll");


b.addEventListener('click', function() {
  let arr = [person1, person2, person3];

  let randNum = Math.floor(Math.random() * arr.length);

  let axe = arr[randNum];
  p.innerText = axe.quote;
  h.innerText = axe.author;
