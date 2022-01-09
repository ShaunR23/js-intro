(function(){
'use strict'

// Add your code here

const quoteStart = "Don't judge each day by the harvest you reap ";
quoteEnd = "but the seeds you plant";
finalQuote = quoteStart +''+ quoteEnd;
// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = finalQuote;

section.appendChild(para1);

const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';

// Add your code here
let quoteLength = quote.length
let index = quote[14, 30]
let revisedQuote = quote.slice(0, 24)
// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `The quote is ${ quoteLength } characters long.`;
const para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);
    
const quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here
let length = quote.length
let start = quote.slice(0,1) //first char
let end = quote.slice(1, length)// all but first char
let fixedQuote = quote.toLowerCase();
fixedQuote = fixedQuote.replace("green eggs and ham", "shrimp and grits")

finalQuote = fixedQuote + "."

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = fixedQuote;
const para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);

const theorem = 'Pythagorean theorem';

const a = 5;
const b = 8;

const myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and {b}, the length of the hypotenuse is ${a + b}.`;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);
})
    