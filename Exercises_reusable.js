'use strict';

//------------------1.Identifiers--------------------------
console.log('-----1-----');

const myName = 'Ivan';
const _myName = 'Ivan';
const myBirthdayYear = 2002;

const hello = name => console.log(`Hello, ${name}!`);

hello('Ivan');
hello(myName);
hello(_myName);

//------------------2.Loops--------------------------------
console.log('-----2-----');

function range(start, end) {
  if (start % 2 === 0) start++;

  for (let i = start; i <= end; i += 2) {
    console.log(i);
  }
}

range(15, 30);

//------------------3.Functions----------------------------
console.log('-----3-----');

const square = x => x ** 2;
const cube = x => x ** 3;

const average = (a, b) => (a + b) / 2;

for (let i = 1; i < 10; i++) {
  const res = average(square(i), cube(i));
  console.log(res);
}

//------------------4.Objects-------------------------------
console.log('-----4-----');

const obj1 = { name: '' };
let obj2 = { name: '' };

obj1.name = 'Mr. obj1'; //Normal
obj2.name = 'Mr. obj2'; //Normal

console.dir(obj1);
console.dir(obj2);

//obj1 = { name: "new Mr. obj1"}; //Error
obj2 = { name: 'new Mr. obj2' }; //Normal

const createUser = (name, city) => ({ name, city });

const obj3 = createUser('Mrs. obj3', 'Classville');
console.dir(obj3);

//------------------5.Arrays--------------------------------
console.log('----5-----');

const people = [
  { name: 'John',  phone: '2734837' },
  { name: 'Dan',   phone: '1637482' },
  { name: 'Devil', phone: '6666666' },
  { name: 'Max',   phone: '0194637' },
  { name: 'Nick',  phone: '0297384' },
  { name: 'Rob',   phone: '9275585' },
];

function findPhoneByName(name) {
  for (const current of people) {
    if (current.name === name) {
      return current.phone;
    }
  }
}

console.log(findPhoneByName('Dan'));

//------------------6.Hash collections----------------------
console.log('----6-----');

for (const every of people) {
  const key = every.name;
  every[key] = every.phone;
  console.dir(every);
}

const findPhoneByName_hash = name => {
  for (const current of people) {
    if (current.name === name) return current[name];
  }
};

console.log(findPhoneByName_hash('Nick'));
