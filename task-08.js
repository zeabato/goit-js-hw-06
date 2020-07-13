'use strict';

import users from './users.js';

const getUsersWithFriend = function (users, friendName){
  
  return users.filter(elem => elem.friends.includes(friendName)).map(elem=>elem.name);
  
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]