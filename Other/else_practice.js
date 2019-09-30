'use strict';

//------------------Cut segment-------------------------------
/*const filterRangeInPlace = function(array, min, max) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min || array[i] > max) array.splice(i, 1);
  }
  return array;
};

const arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log(arr);*/

//------------------Reverse sort------------------------
/*const arr = [5, 4, 7, -1, -20];

arr.sort((a, b) => b - a);

console.log(arr);*/

//-------------------Sort lines---------------------------
/*const arr = ['HTML', 'JavaScript', 'CSS'];

const copySorted = array => array.slice().sort();
const sorted = copySorted(arr);

console.log(arr);
console.log(sorted);*/

//-------------------Array of names---------------------------
/*const vasya = { name: 'Vasya', age: 20 };
const petya = { name: 'Petya', age: 20 };
const mrX = { name: 'Mr. X', age: 20 };

const users = [vasya, petya, mrX];

const names = [];
for (const user of users) {
  names.push(user.name);
}

console.log(names);*/

//-------------------Transform to objects------------------
/*const vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
const petya = { name: 'Петя', surname: 'Иванов', id: 2 };
const masha = { name: 'Маша', surname: 'Петрова', id: 3 };

const users = [vasya, petya, masha];

const usersMapped = users.map(user => ({
  fullName: user.name + ' ' + user.surname,
  id: user.id,
}));

console.log(usersMapped);*/

//-------------------Age sort---------------------------
const vasya = { name: 'Вася', age: 25 };
const petya = { name: 'Петя', age: 30 };
const masha = { name: 'Маша', age: 28 };

const users = [vasya, petya, masha];

function sortByAge(array) {
  array.sort((user1, user2) => user1.age - user2.age);
}

sortByAge(users);
console.log(users);
