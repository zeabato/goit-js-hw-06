'use strict';

import users from './users.js';
const getSortedUniqueSkills = function(users){
  const temp = [];
  
  return users.reduce((acc, elem)=>{acc.push(...elem.skills); return acc;},[]).filter((item, pos, acc)=>acc.indexOf(item)===pos).sort();
    
};
 

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]




// const temp1 = [];
// users.forEach(elem => elem.skills.forEach(skill=> temp1.push(skill)));



// const temp3 = temp1.filter(function(item, pos) {
//   console.log(pos);
//   return temp1.indexOf(item) === pos;
// });



// temp3.sort();
// console.log(temp3);