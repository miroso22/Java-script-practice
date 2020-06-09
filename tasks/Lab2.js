'use strict';

const FILM_COUNT = 4;
const array = [[ 1, 2, 3, 4],
               [ 4, 2, 1, 3],
               [ 1, 4, 3, 2],
               [ 2, 1, 4, 3]];

const findSimilarity = (array, baseUserIndex) => {
  const baseUser = array[baseUserIndex];
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (i == baseUserIndex) continue;

    let count = 0;
    const curUser = array[i];
    for (let j = 0; j < FILM_COUNT; j++) {
      if (curUser[j] == baseUser[j]) count++;
    }
    result.push( [i, count] );
  }

  return result.sort( (a, b) => a[1] > b[1]);
}

console.log(findSimilarity(array, 0));
