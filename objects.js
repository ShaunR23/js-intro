catName = cat["name"];
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
name: 'GnR'
nationality: 'American"
genre: 'Rock'
members: '4'
formed: '1985'
split:'20'
albums:[{name: 'Appetite for Destruction' released: 1985}{name:'Chinese Democracy' released:2008}


}

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
  name: 'Chunky'
  breed: 'Fluffy'
  color: 'Grey'
  greeting: function() {
      console.log(`Hello, said ${cat.name} the ${cat.breed}`);
    }
  }
      