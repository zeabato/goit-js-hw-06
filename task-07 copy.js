'use strict';

import users from './users.js';

const calculateTotalBalance = function(users){
  let total = 0;
  total = users.reduce(function(acc,number,index,arr){
    return arr[index].balance + acc;
  },0);
  return total;
  
};


console.log(calculateTotalBalance(users)); // 20916
