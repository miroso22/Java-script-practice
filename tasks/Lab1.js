'use strict';

const array = [30, 19, 9, 15, 1, 55, 24, 3, 78, 1, 46, 41, 14, 18];

const sort = array => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      const swap = () => {
        const elem = array[j - 1];
        array[j - 1] = array[j];
        array[j] = elem;
      }
      let b = array[j - 1];
      let a = array[j];
      if (isEven(a) && (isEven(b) && a < b || !isEven(b))) {
        swap();
      } else if (!isEven(a) && !isEven(b) && a > b) {
        swap();
      }
    }
  }
}
const isEven = a => a % 2 == 0;

sort(array);
console.log(array);
