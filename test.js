'use strict';

let arr = [
  {
    name: 'Artem',
    friends: [1]
  }, 
  {
    name: 'Mira',
    friends:[ 1,2,3,4]
  },
  {
    name: 'Kirill',
    friends: [1,2],
  },
];

arr.sort(function(prev, next){
  return prev.friends.length - next.friends.length;
});

console.log(arr);





