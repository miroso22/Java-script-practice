'use strict';

const makeProjection = format => {
  const formattingFunctions = {};
  for (const key in format) {
    formattingFunctions[key] = transformFunction(format[key]);;
  }

  return obj => {
    const formattedObj = {};
    for (const key in format) {
      formattedObj[key] = formattingFunctions[key](obj);
    }
    return formattedObj;
  };
};

const transformFunction = operation => {
  // For each key in format it's making a function that explains,
  // what to write into this field to a projection
  const fn = typeof operation[operation.length - 1] === 'function' ?
                      operation.pop() :
                      x => x;
  return obj => {
    const inputs = [];
    for (const key of operation)
      inputs.push(obj[key]);
    return fn(...inputs);
  };
};

const dataSet = [
  { name: 'Roma', age: 19, education: [{ name: '1', start: 2007, end: 2010 },
                                       { name: '2', start: 2012, end: 2017 }] },
  { name: 'Vanya', age: 18, education: [{ name: '1', start: 2007, end: 2010 },
                                       { name: '3', start: 2005, end: 2012 }] },
  { name: 'Artem', age: 19, education: [{ name: '4', start: 2007, end: 2011 },
                                       { name: '5', start: 2012, end: 2017 }] }
];

const format1 = {
  name: ['name', n => n + ' lox'],
  age: ['age'],
  status: ['name', 'age', (name, age) => '<' + name + '|' + age + '>'],
  education: ['education', education => education.map(proj2)],
};

const format2 = {
  name: ['name'],
  duration: ['start', 'end', (start, end) => end - start],
};

const proj1 = makeProjection(format1);
const proj2 = makeProjection(format2);
for (const person of dataSet) {
  console.dir(proj1(person));
}
