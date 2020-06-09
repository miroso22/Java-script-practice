'use strict';

function reduce(array, first, fn) {
  let res = first | array.shift();
  for (let i = 0; i < array.length; i++) {
    res = fn(res, array[i]);
  }
  return res;
}
