'use strict';

function logUser(user) {
  for (const key in user) {
    console.log(`${key}: ${user[key]}`);
  }
  console.log('\n');
}

const user1 = {
  name: 'Mike',
  age: 36,
};
const user2 = {
  name: 'Kevin',
  age: 36,
};

logUser(user1);
logUser(user2);

const compareAgeResInConsole = (man1, man2) => {
  console.log('Now we\'re comparing their ages...');

  man1.age > man2.age ? console.log(`${man1.name} is older.`) :
    man1.age < man2.age ? console.log(`${man2.name} is older.`) :
      console.log('The\'re the same age!');
};

compareAgeResInConsole(user1, user2);
