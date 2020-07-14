'use strict';

import users from './users.js';

const getUsersWithGender = (users, gender) => {
  return users.filter(elem=>elem.gender===gender).map(obj=>obj.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]