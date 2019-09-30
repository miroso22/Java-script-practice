'use strict';

const user = {
  name: 'John',
  years: 30,
};

const { name, years: age, isAdmin = false } = user;

console.log(`${name} ${age} ${isAdmin}`);

//-----------------------------------------------------

const fibonacci = (curValue, lastValue, num) => {
  console.log(curValue);
  return num ? fibonacci(curValue + lastValue, curValue, --num):
  curValue;
};

//const start = Date.now();
fibonacci(1, 1, 20);
//console.log(`Time: ${Date.now() - start}`);
