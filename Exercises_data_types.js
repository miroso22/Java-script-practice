'use strict';

/*function declare() {
  a = 20;
}

declare();

console.log(a);
*/

const inc = n => n + 1;

const a = 5;
const b = inc(3);
console.dir({ a, b });

const _inc = num => {
  num.n--;
  return this;
};

const obj = { n: 5 };
_inc(obj);
console.dir(obj);

///////////////////////////////////////////////////////////

const hash = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  undefined: 0,
};

const data = [
  -10, false, NaN, 'int', 'OK', true, 12, { a: 1 }, ,
  true, true, 'mom', 16,,,,,,,,,,, null, null,
];

for (const next of data) {
  hash[typeof(next)]++;
}
console.dir(hash);
