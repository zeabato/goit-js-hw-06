'use strict';

import users from './users.js';

const calculateTotalBalance = function(users){
  let tempTotal = 0;
  users.forEach(elem=>tempTotal += elem.balance);
  return tempTotal;
};


console.log(calculateTotalBalance(users)); // 20916
