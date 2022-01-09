(function (){
  'use strict';


  const body = document.querySelector("body");
  //////////////////////////////////////////////////////// OBJECT 1
  function object1() {
      const section = document.createElement("section");
      body.appendChild(section);

      let cat = {
          name: 'Bertie',
          breed: 'Cymric',
          color: 'white',
          greeting: function () {
              console.log('Meow!');
          }
      }

      // Put your code here
      const catName = cat['name'];
      cat.greeting();
      cat.color = 'black';

// Don't edit the code below here

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `The cat's name is ${ catName }.`;
para2.textContent = `The cat's color is ${ cat.color }.`;

section.appendChild(para1);
section.appendChild(para2);
    
let bandInfo;

// Put your code here
let band = {
name: 'GnR',
nationality: 'American',
genre: 'Rock',
members: '4',
formed: '1985',
split:'20',
albums:[
  {name: 'Appetite for Destruction' ,
  released: 1985,
},
  {
    name:'Chinese Democracy',
    released:2008,
  }
]


}
bandInfo = `${band.name} is an ${band.nationality} artist 
    that began singing in ${band.formed} in the ${band.genre} genre. ${band.name} has 
    released a few albums including ${band.albums[0][0]} release in and ${band.albums[0][1]} 
    and ${band.albums[1][0]} release in and ${band.albums[1][1]}.`;

// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);
    
let cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log(`Hello, said ${cat.name} the ${cat.breed}`);
    }
  }
  
  let cat2 = {
  name: 'Chunky',
  breed: 'Fluffy',
  color: 'Grey',
  greeting: function() {
      console.log(`Hello, said ${cat.name} the ${cat.breed}`);
    }
  }
  cat.greeting();
  cat2.greeting();
}});