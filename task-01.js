import users from './users.js';

const getUserNames = function (users){
  return users.map(element => element.name);
};
console.log(getUserNames(users));




