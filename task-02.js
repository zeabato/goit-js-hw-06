'use strict';

import users from './users.js';

const getUsersWithEyeColor = function (users, color) {
  return users.filter(elem=>elem.eyeColor===color);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]